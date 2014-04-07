if (Meteor.isClient) {
  var adminEditor, hintEditor;

  Meteor.Router.add({
    '/admin': function() {
      if (adminEditor !== undefined) {
        adminEditor.setValue('');
      }
      if (hintEditor !== undefined) {
        hintEditor.setValue('');
      }
      Session.set('admin_code', '');
      Session.set('admin_output', '');
      Session.set('admin_test_outputs', []);
      Session.set('admin_problem_obj', {});
      return 'adminView';
    }
  });

  Template.adminView.hotKey = function() {
    return (navigator.platform.substring(0, 3) === "Mac") ? "(CMD + Enter)" : "(CTRL + Enter)";
  };

  Template.adminView.output = function() {
    return Session.get('admin_output');
  };

  Template.adminView.testOutputs = function() {
    var testOutputs = Session.get('admin_test_outputs');
    var res = '';
    for (var i = 0; i < testOutputs.length; i++) {
      var testOutput = testOutputs[i];
      var test = (testOutput['test'] === '') ? 'Output' : testOutput['test'];
      res += '<tr><td>' + test + '</td><td>' + testOutput['output'];
      res += '</td></tr>';
    }
    return res;
  };

  Template.adminView.problemObj = function() {
    var problemObj = Session.get('admin_problem_obj');
    var res = '{\n'
    for (var key in problemObj) {
      res += key + ': ' + EJSON.stringify(problemObj[key]) + ',\n';
    }
    res += '},'
    return res;
  };

  Template.adminView.events({
    'click #run_code': function() {
      adminExecuteCode();
    }
  });

  var adminExecuteCode = function() {
    try {
      Session.set('admin_code', adminEditor.getValue().trim().replace(/\t/g, '    '));
      adminRunit();
      adminTestit();
      adminGenObj();
    } catch (err) {
      if (err.toString().trim() === "TypeError: Cannot read property 'constructor' of null") {
        Session.set('admin_output', 'Error: Your function does not have return value. Your function needs a return value.');
      } else if (err.toString().trim() === "ImportError: No module named <stdin>") {
        Session.set('admin_output', 'Error: You did not type any code. You must type some code.');
      } else {
        Session.set('admin_output', err.toString());
      }
    }
  };

  var adminOutf = function(text) {
    Session.set('admin_output', Session.get('admin_output') + text);
  };

  var adminRunit = function() {
    Session.set('admin_output', '');
    Sk.configure({output: adminOutf});
    eval(Sk.importMainWithBody('<stdin>', false, Session.get('admin_code')));
  };

  Template.adminCodeView.rendered = function() {
    $('body').off();
    $('body').on('keydown', function(e) {
      if ((e.ctrlKey || e.metaKey) && e.keyCode === 13) {
        adminExecuteCode();
      }
    });
    if (this.find('#admin_code') && adminEditor === undefined) {
      adminEditor = CodeMirror.fromTextArea(this.find('#admin_code'), {
        theme: 'cobalt',
        lineNumbers: true,
        indentUnit: 4,
        mode: 'python'
      });
    }
  };

  Template.hintCodeView.rendered = function() {
    if (this.find('#hint_code') && hintEditor === undefined) {
      hintEditor = CodeMirror.fromTextArea(this.find('#hint_code'), {
        theme: 'cobalt',
        lineNumbers: true,
        indentUnit: 4,
        mode: 'python'
      });
    }
  };

  var adminGenOutf = function(testObj) {
    return function(text) {
      testObj['output'] += text;
    };
  };

  var adminTestit = function() {
    var tests = EJSON.parse($('#tests').val());
    var testOutputs = [];
    for (var i = 0; i < tests.length; i++) {
      var testObj = {test: tests[i], output: ''};
      Sk.configure({output: adminGenOutf(testObj)});
      if (testObj['test'] === '') {
        eval(Sk.importMainWithBody("<stdin>", false, Session.get('admin_code')));
      } else {
        var prog = Session.get('admin_code') + '\nprint\nprint repr(' +
          testObj['test'] + ')';
        eval(Sk.importMainWithBody("<stdin>", false, prog));
        var outputLines = testObj['output'].split('\n');
        testObj['output'] = outputLines[outputLines.length - 2];
      }
      testOutputs.push(testObj);
    }
    Session.set('admin_test_outputs', testOutputs);
  };

  var adminGenObj = function() {
    var hint = $('#hint').val();
    var hintCode = hintEditor.getValue().replace(/\t/g, '    ').trim();
    if (hintCode !== '') {
      hint += '<br><pre>' + hintCode + '</pre>';
    }
    var concepts = $('#concepts').val().split(',');
    concepts = concepts.map(function(concept) {
      return concept.trim();
    });
    var testOutputs = Session.get('admin_test_outputs');
    var tests = {};
    for (var i = 0; i < testOutputs.length; i++) {
      tests[testOutputs[i]['test']] = testOutputs[i]['output'];
    }
    Session.set('admin_problem_obj', {
      prompt: $('#prompt').val(),
      hint: hint,
      concepts: concepts,
      tests: tests,
      solution: Session.get('admin_code')
    });
  };
}
