Exercises = new Meteor.Collection('exercises');
Concepts = new Meteor.Collection('concepts');

if (Meteor.isClient) {
  var editor;

  Meteor.startup(function() {
    if (amplify.store('done_exercises') === undefined) {
      amplify.store('done_exercises', []);
    }
    if (amplify.store('concept_progress') === undefined) {
      amplify.store('concept_progress', {});
    }
  });

  Meteor.subscribe('userData');

  Meteor.subscribe('exercises', function() {
    Meteor.subscribe('concepts', function() {
      if (amplify.store('current_concept') === undefined) {
        amplify.store('current_concept', Concepts.findOne({num: 0}));
      }
      chooseExercise();
      Meteor.autorun(function() {
        var tests = Session.get('current_exercise')['tests'];
        var testOutputs = [];
        for (var test in tests) {
          testOutputs.push({
            test: (test === '') ? 'Output' : test,
            expected: tests[test],
            run: '',
            correct: ''
          });
        }
        Session.set('test_outputs', testOutputs);
      });
    });
  });

  Meteor.Router.add({
    '/ex/:id': function(num) {
      Session.set('ex_num', parseInt(num));
      return 'mainview';
    },
    '*': function() {
      Session.set('ex_num', null);
      return 'mainview';
    }
  });

  Template.mainview.currentExercise = function() {
    return Session.get('current_exercise');
  };

  Template.mainview.newConcepts = function() {
    if (Session.get('next_visible')) {
      return amplify.store('new_concepts');
    }
    var currentExercise = Session.get('current_exercise');
    var conceptNames = currentExercise['concepts'];
    var conceptProgress = amplify.store('concept_progress');
    var newConcepts = [];
    for (var i = 0; i < conceptNames.length; i++) {
      if (conceptProgress[conceptNames[i]] === undefined) {
        newConcepts.push(Concepts.findOne({name: conceptNames[i]}));
      }
    }

    if (newConcepts.length === 0) {
      newConcepts.push({
        displayName: "Practice Time!",
        explanation: "If you get stuck, you can always click the \"Get hint\" button below."
      });
    }
    amplify.store('new_concepts', newConcepts);

    return newConcepts;
  };

  Template.mainview.hintVisible = function() {
    return Session.get('hint_visible');
  };

  Template.mainview.hotKey = function() {
    return (navigator.platform.substring(0, 3) === "Mac") ? "(CMD + Enter)" : "(CTRL + Enter)";
  };

  Template.mainview.next = function() {
    return Session.get('next_visible');
  };

  Template.mainview.output = function() {
    return Session.get('output');
  };

  Template.mainview.progress = function() {
    var conceptProgress = amplify.store('concept_progress');
    var progressScore = 0;
    var numConcepts = Concepts.find().count();
    for (var concept in conceptProgress) {
      progressScore += conceptProgress[concept];
    }
    var progressPercent = Math.round(100 * progressScore / (4 * numConcepts));
    return progressPercent + '%';
  };

  Template.mainview.testOutputs = function() {
    var testOutputs = Session.get('test_outputs');
    var res = '';
    for (var i = 0; i < testOutputs.length; i++) {
      var testOutput = testOutputs[i];
      var correctImg = '';
      if (testOutput.correct === "True") {
        correctImg = '<img src="/check_mark.png">';
      } else if (testOutput.correct === "False") {
        correctImg = '<img src="/x_mark.png">';
      }
      res += '<tr><td>' + testOutput.test + '</td><td>' + testOutput.expected;
      res += '</td><td>' + testOutput.run + '</td><td>' + correctImg;
      res += '</td></tr>';
    }
    return res;
  };

  Template.mainview.events({
    'click #show_hint': function() {
      Session.set('hint_visible', true);
    },
    'click #run_code': function() {
      executeCode();
    },
    'click #next_exercise': function() {
      chooseExercise();
    }
  });

  var resetExercise = function() {
    Session.set('hint_visible', false);
    if (editor !== undefined) {
      editor.setValue('');
    }
    Session.set('code', '');
    Session.set('output', '');
    Session.set('test_outputs', []);
    Session.set('next_visible', false);
  }

  var chooseExercise = function() {
    // TODO: gate this functionality to admin
    if (Session.get('ex_num') !== undefined) {
      var nextExercise = Exercises.findOne({num: Session.get('ex_num')});
      if (nextExercise !== undefined) {
        resetExercise();
        Session.set('current_exercise', nextExercise);
        return;
      }
    }
    var currentConcept = amplify.store('current_concept');
    while (amplify.store('concept_progress')[currentConcept['name']] >= 3) {
      currentConcept = Concepts.findOne({num: currentConcept['num'] + 1});
      if (currentConcept !== undefined) {
        amplify.store('current_concept', currentConcept);
      } else {
        // TODO: do something better here
        console.log('All concepts learned!');
        return;
      }
    }
    var doneExercises = amplify.store('done_exercises');
    var doneIds = doneExercises.map(function(ex) { return ex._id; });
    for (var i = 0; i <= 2; i++) {
      var maxConceptNum = currentConcept['num'] + i;
      var lockedConcepts = Concepts.find({num: {$gt: maxConceptNum}});
      var lockedConceptNames = [];
      lockedConcepts.forEach(function(concept) {
        lockedConceptNames.push(concept['name']);
      });
      var nextExercise = Exercises.findOne({
        $and: [
          {_id: {$nin: doneIds}},
          {concepts: currentConcept['name']},
          {concepts: {$nin: lockedConceptNames}}
        ]
      },{
        sort: {num: 1}
      });
      if (nextExercise !== undefined) {
        break;
      }
    }
    if (nextExercise === undefined) {
      // TODO: instead of moving them on to the next concept here
      // we should have them repeat exercises. it's bad if we enter this
      // state because this means we don't have enough exercises
      var nextConcept = Concepts.findOne({num: currentConcept['num'] + 1});
      if (nextConcept !== undefined) {
        amplify.store('current_concept', nextConcept);
        chooseExercise();
      } else {
        console.log('All concepts learned!');
      }
      return;
    }
    resetExercise();
    Session.set('current_exercise', nextExercise);
  };

  var executeCode = function() {
    try {
      Session.set('code', editor.getValue().replace(/\t/g, '    '));
      runit();
      testit();
      checkOutput();
    } catch (err) {
      if (err.toString().trim() === "TypeError: Cannot read property 'constructor' of null") {
        Session.set('output', 'Error: Your function does not have return value. Your function needs a return value.');
      } else if (err.toString().trim() === "ImportError: No module named <stdin>") {
        Session.set('output', 'Error: You did not type any code. You must type some code.');
      } else {
        Session.set('output', err.toString());
      }
    }
  };

  var outf = function(text) {
    Session.set('output', Session.get('output') + text);
  };

  var runit = function() {
    Session.set('output', '');
    Sk.configure({output: outf});
    eval(Sk.importMainWithBody('<stdin>', false, Session.get('code')));
  };

  var genOutf = function(testObj) {
    return function(text) {
      testObj['run'] += text;
    };
  };

  var testit = function() {
    var testOutputs = Session.get('test_outputs');
    for (var i = 0; i < testOutputs.length; i++) {
      var testObj = testOutputs[i];
      if (testObj['test'] === 'Output') {
        testObj['run'] = Session.get('output');
      } else {
        var prog = Session.get('code') + '\nprint\nprint repr(' +
          testObj['test'] + ')';
        Sk.configure({output: genOutf(testObj)});
        eval(Sk.importMainWithBody("<stdin>", false, prog));
        var runLines = testObj['run'].split('\n');
        testObj['run'] = runLines[runLines.length - 2];
      }
      testObj['correct'] = (testObj['expected'] === testObj['run']) ? "True" : "False";
      testOutputs[i] = testObj;
    }
    Session.set('test_outputs', testOutputs);
  };

  var checkOutput = function() {
    var testOutputs = Session.get('test_outputs');
    if (testOutputs.length == 0) {
      return;
    }
    var correct = true;
    for (var i = 0; i < testOutputs.length; i++) {
      if (testOutputs[i]['correct'] !== "True") {
        correct = false;
      }
    }
    if (correct) {
      var currentExercise = Session.get('current_exercise');

      var doneExercises = amplify.store('done_exercises');
      doneExercises.push({
        _id: currentExercise['_id'],
        code: Session.get('code')
      });
      amplify.store('done_exercises', doneExercises)

      var conceptProgress = amplify.store('concept_progress');
      var concepts = currentExercise['concepts'];
      if (Session.get('hint_visible')) {
        for (var i = 0; i < concepts.length; i++) {
          if (conceptProgress[concepts[i]] === undefined) {
            conceptProgress[concepts[i]] = 1;
          }
        }
      } else {
        for (var i = 0; i < concepts.length; i++) {
          if (conceptProgress[concepts[i]] >= 3) {
            conceptProgress[concepts[i]] = 4;
          } else if (conceptProgress[concepts[i]] == 2) {
            conceptProgress[concepts[i]] = 3;
          } else {
            conceptProgress[concepts[i]] = 2;
          }
        }
      }
      amplify.store('concept_progress', conceptProgress);

      Session.set('next_visible', true);
      Session.set('output', Session.get('output') + "<h5>Great Job! Click the next button or hit 'Enter' to continue to the next exercise.</h5>");
    } else {
      Session.set('output', Session.get('output') + "<h5>Sorry wrong output. Try again! </h5>");
    }
  };

  Template.codeview.rendered = function() {
    $('body').off();
    $('body').on('keydown', function(e) {
      if ((e.ctrlKey || e.metaKey) && e.keyCode === 13) {
        executeCode();
      } else if (e.keyCode === 13 && Session.get('next_visible')) {
        chooseExercise();
      }
    });
    if (this.find('#code') && editor === undefined) {
      editor = CodeMirror.fromTextArea(this.find('#code'), {
        autofocus: true,
        theme: 'cobalt',
        lineNumbers: true,
        indentUnit: 4,
        mode: 'python'
      });
    }
  };
}

if (Meteor.isServer) {
  Meteor.publish('userData', function() {
    return Meteor.users.find({_id: this.userId},
                             {fields: {
                               'conceptProgress': 1,
                               'exercisesCompleted': 1,
                               'currentConceptIdx': 1
                             }});
  });

  Meteor.publish('exercises', function() {
    return Exercises.find();
  });

  Meteor.publish('concepts', function() {
    return Concepts.find();
  });

  Meteor.startup(function() {
    Exercises.remove({});
    for (var i = 0; i < exerciseObjs.length; i++) {
      exerciseObjs[i]['num'] = i;
      Exercises.insert(exerciseObjs[i]);
    }
    Concepts.remove({});
    for (var i = 0; i < conceptObjs.length; i++) {
      conceptObjs[i]['num'] = i
      Concepts.insert(conceptObjs[i]);
    }
  });

  Accounts.onCreateUser(function(options, user) {
    user['conceptProgress'] = {};
    user['exercisesCompleted'] = [];
    user['currentConceptIdx'] = 0;
    return user;
  });
}
