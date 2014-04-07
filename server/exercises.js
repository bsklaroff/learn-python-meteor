var exerciseObjs = [{
  prompt: "Print the string \"hey\"",
  hint: "The syntax to print the string \"Hello, world!\" is<br><pre>print \"Hello, world!\"</pre>",
  concepts: ["print","str"],
  tests: {"":"hey\n"},
  solution: "print \"What's up, world?\"",
},{
  prompt: "Print the string \"Power to the people!\"",
  hint: "The syntax to print the string \"Hello, world!\" is<br><pre>print \"Hello, world!\"</pre>",
  concepts: ["print","str"],
  tests: {"":"Power to the people!\n"},
  solution: "print \"Power to the people!\"",
},{
  prompt: "Print the string \"Flying monkeys\"",
  hint: "The syntax to print the string \"Hello, world!\" is<br><pre>print \"Hello, world!\"</pre>",
  concepts: ["print","str"],
  tests: {"":"Flying monkeys\n"},
  solution: "print \"Flying monkeys\"",
},{
  prompt: "Print the string \"Lighthouses rule!!!\"",
  hint: "The syntax to print the string \"Hello, world!\" is<br><pre>print \"Hello, world!\"</pre>",
  concepts: ["print","str"],
  tests: {"":"Lighthouses rule!!!\n"},
  solution: "print \"Lighthouses rule!!!\"",
},{
  prompt: "Print the string \"Don't eat the yellow snow\"",
  hint: "The syntax to print the string \"Hello, world!\" is<br><pre>print \"Hello, world!\"</pre>",
  concepts: ["print","str"],
  tests: {"":"Don't eat the yellow snow\n"},
  solution: "print \"Don't eat the yellow snow\"",
},{
  prompt: "Print the number 5",
  hint: "The syntax to print the number 23 is<br><pre>print 23</pre>",
  concepts: ["print","num"],
  tests: {"":"5\n"},
  solution: "print 5",
},{
  prompt: "Print the number 47",
  hint: "The syntax to print the number 23 is<br><pre>print 23</pre>",
  concepts: ["print","num"],
  tests: {"":"47\n"},
  solution: "print 47",
},{
  prompt: "Print the number -7",
  hint: "The syntax to print the number 23 is<br><pre>print 23</pre>",
  concepts: ["print","num"],
  tests: {"":"-7\n"},
  solution: "print -7",
},{
  prompt: "Print the number 101",
  hint: "The syntax to print the number 23 is<br><pre>print 23</pre>",
  concepts: ["print","num"],
  tests: {"":"101\n"},
  solution: "print 101",
},{
  prompt: "Print the number 9001",
  hint: "The syntax to print the number 23 is<br><pre>print 23</pre>",
  concepts: ["print","num"],
  tests: {"":"9001\n"},
  solution: "print 9001",
},{
  prompt: "Print the number 6 and then the number 7 on the next line",
  hint: "The syntax to print the string \"Hello, world!\" and then the number 23 on the next line is<br><pre>print \"Hello, world!\"\nprint 23</pre>",
  concepts: ["print","num","print-mult"],
  tests: {"":"6\n7\n"},
  solution: "print 6\nprint 7",
},{
  prompt: "Print the string \"Can you dig it?\" and then the string \"Oh yeah\" on the next line",
  hint: "The syntax to print the string \"Hello, world!\" and then the number 23 on the next line is<br><pre>print \"Hello, world!\"\nprint 23</pre>",
  concepts: ["print","str","print-mult"],
  tests: {"":"Can you dig it?\nOh yeah\n"},
  solution: "print \"Can you dig it?\"\nprint \"Oh yeah\"",
},{
  prompt: "Print the number 100 and then the string \"bottles of beer on the wall\" on the next line",
  hint: "The syntax to print the string \"Hello, world!\" and then the number 23 on the next line is<br><pre>print \"Hello, world!\"\nprint 23</pre>",
  concepts: ["print","num","str","print-mult"],
  tests: {"":"100\nbottles of beer on the wall\n"},
  solution: "print 100\nprint \"bottles of beer on the wall\"",
},{
  prompt: "Print the strings \"Hi\", \"Nice to meet you\", and \"Bye\" on consecutive lines",
  hint: "The syntax to print the string \"Hello, world!\" and then the number 23 on the next line is<br><pre>print \"Hello, world!\"\nprint 23</pre>",
  concepts: ["print","str","print-mult"],
  tests: {"":"Hi\nNice to meet you\nBye\n"},
  solution: "print \"Hi\"\nprint \"Nice to meet you\"\nprint \"Bye\"",
},{
  prompt: "Print the numbers 11, 21, and 1211 on consecutive lines",
  hint: "The syntax to print the string \"Hello, world!\" and then the number 23 on the next line is<br><pre>print \"Hello, world!\"\nprint 23</pre>",
  concepts: ["print","num","print-mult"],
  tests: {"":"11\n21\n1211\n"},
  solution: "print 11\nprint 21\nprint 1211",
},{
  prompt: "Print (7 times (24 plus 81) minus 9) divided by 11",
  hint: "The syntax to print 47 minus ((3 plus 3) times 7 divided by 2) is<br><pre>print 47 - ((3 + 3) * 7 / 2)</pre>",
  concepts: ["print","num","num-ops"],
  tests: {"":"66\n"},
  solution: "print (7 * (24 + 81) - 9) / 11",
},{
  prompt: "Print 1111 plus ((22 times 33) divided by 121) minus 50",
  hint: "The syntax to print 47 minus ((3 plus 3) times 7 divided by 2) is<br><pre>print 47 - ((3 + 3) * 7 / 2)</pre>",
  concepts: ["print","num","num-ops"],
  tests: {"":"1067\n"},
  solution: "print 1111 + 22 * 33 / 121 - 50",
},{
  prompt: "Print ((1234 plus negative 5678) divided by 1111) times (66 minus 50)",
  hint: "The syntax to print 47 minus ((3 plus 3) times 7 divided by 2) is<br><pre>print 47 - ((3 + 3) * 7 / 2)</pre>",
  concepts: ["print","num","num-ops"],
  tests: {"":"-64\n"},
  solution: "print (1234 + -5678) / 1111 * (66 - 50)",
},{
  prompt: "Print 3 times (((358 plus 126) divided by 11) minus 21)",
  hint: "The syntax to print 47 minus ((3 plus 3) times 7 divided by 2) is<br><pre>print 47 - ((3 + 3) * 7 / 2)</pre>",
  concepts: ["print","num","num-ops"],
  tests: {"":"69\n"},
  solution: "print 3 * ((358 + 126) / 11 - 21)",
},{
  prompt: "Print 4 plus ((4 times 4) divided by 4) minus 4",
  hint: "The syntax to print 47 minus ((3 plus 3) times 7 divided by 2) is<br><pre>print 47 - ((3 + 3) * 7 / 2)</pre>",
  concepts: ["print","num","num-ops"],
  tests: {"":"4\n"},
  solution: "print 4 + 4 * 4 / 4 - 4",
},{
  prompt: "Print the string \"sub\" concatenated with the string \"liminal\"",
  hint: "The syntax to print the string \"happy\" concatenated with the string \"ness\" is<br><pre>print \"happy\" + \"ness\"</pre>",
  concepts: ["print","str","add-str"],
  tests: {"":"subliminal\n"},
  solution: "print \"sub\" + \"liminal\"",
},{
  prompt: "Print the strings \"book\", \"keep\", and \"er\" concatenated together",
  hint: "The syntax to print the string \"happy\" concatenated with the string \"ness\" is<br><pre>print \"happy\" + \"ness\"</pre>",
  concepts: ["print","str","add-str"],
  tests: {"":"bookkeeper\n"},
  solution: "print \"book\" + \"keep\" + \"er\"",
},{
  prompt: "Print the string \"daily \" concatenated with the string \"practice\"",
  hint: "The syntax to print the string \"happy\" concatenated with the string \"ness\" is<br><pre>print \"happy\" + \"ness\"</pre>",
  concepts: ["print","str","add-str"],
  tests: {"":"daily practice\n"},
  solution: "print \"daily \" + \"practice\"",
},{
  prompt: "Print the string \"Hello, \" concatenated with the string \"world!\"",
  hint: "The syntax to print the string \"happy\" concatenated with the string \"ness\" is<br><pre>print \"happy\" + \"ness\"</pre>",
  concepts: ["print","str","add-str"],
  tests: {"":"Hello, world!\n"},
  solution: "print \"Hello, \" + \"world!\"",
},{
  prompt: "Print the string \"egg\" concatenated with the string \"nog\"",
  hint: "The syntax to print the string \"happy\" concatenated with the string \"ness\" is<br><pre>print \"happy\" + \"ness\"</pre>",
  concepts: ["print","str","add-str"],
  tests: {"":"eggnog\n"},
  solution: "print \"egg\" + \"nog\"",
},{
  prompt: "Print the string \"hey!\" repeated 5 times",
  hint: "The syntax to print the string \"hello\" repeated 4 times is<br><pre>print \"hello\" * 4</pre>",
  concepts: ["print","str","mul-str","num"],
  tests: {"":"hey!hey!hey!hey!hey!\n"},
  solution: "print \"hey!\" * 5",
},{
  prompt: "Print the string \"racecar\" repeated 3 times",
  hint: "The syntax to print the string \"hello\" repeated 4 times is<br><pre>print \"hello\" * 4</pre>",
  concepts: ["print","str","mul-str","num"],
  tests: {"":"racecarracecarracecar\n"},
  solution: "print \"racecar\" * 3",
},{
  prompt: "Print the string \"thb\" repeated 6 times",
  hint: "The syntax to print the string \"hello\" repeated 4 times is<br><pre>print \"hello\" * 4</pre>",
  concepts: ["print","str","mul-str","num"],
  tests: {"":"thbthbthbthbthbthb\n"},
  solution: "print \"thb\" * 6",
},{
  prompt: "Print the string \"al\" repeated 10 times",
  hint: "The syntax to print the string \"hello\" repeated 4 times is<br><pre>print \"hello\" * 4</pre>",
  concepts: ["print","str","mul-str","num"],
  tests: {"":"alalalalalalalalalal\n"},
  solution: "print \"al\" * 10",
},{
  prompt: "Print the string \"ex\" repeated 10 times",
  hint: "The syntax to print the string \"hello\" repeated 4 times is<br><pre>print \"hello\" * 4</pre>",
  concepts: ["print","str","mul-str","num"],
  tests: {"":"exexexexexexexexexex\n"},
  solution: "print \"ex\" * 10",
},{
  prompt: "Set the variable 'cups' equal to the number 6 and then print the value of 'cups' times 23",
  hint: "The syntax to set the variable 'spam' equal to the number 5 and then print the value of 'spam' plus 10 is<br><pre>spam = 5\nprint spam + 10</pre>",
  concepts: ["print","var","num","num-ops"],
  tests: {"cups":"6","":"138\n"},
  solution: "cups = 6\nprint cups * 23",
},{
  prompt: "Set the variable 'miracle_berries' equal to the string \"limes are delicious\" and print the value of 'miracle_berries'. Then, reassign 'miracle_berries' to \"oranges are even more delicious\" and print the value of 'miracle_berries' again.",
  hint: "The syntax to set the variable 'my_variable' equal to the string \"not your variable!\", print the value of 'my_variable', reassign 'my_variable' to \"still not your variable!\", and print 'my_variable' again is <br><pre>my_variable = \"not your variable!\"\nprint my_variable\nmy_variable = \"still not your variable!\"\nprint my_variable</pre>",
  concepts: ["print","var","str","print-mult"],
  tests: {"miracle_berries":"'oranges are even more delicious'","":"limes are delicious\noranges are even more delicious\n"},
  solution: "miracle_berries = \"limes are delicious\"\nprint miracle_berries\nmiracle_berries = \"oranges are even more delicious\"\nprint miracle_berries",
},{
  prompt: "Set the variable 'duck' equal to the number 85 and 'goose' equal to the number 9001. Print the value of 'duck' plus 'duck' plus 'goose' and then print the value of 'duck' times 'duck' times 'goose' on the next line.",
  hint: "The syntax to set the variable 'spam' equal to the number 5 and then print the value of 'spam' plus 10 is<br><pre>spam = 5\nprint spam + 10</pre>",
  concepts: ["print","var","num","num-ops","print-mult"],
  tests: {"duck":"85","goose":"9001","":"9171\n65032225\n"},
  solution: "duck = 85\ngoose = 9001\nprint duck + duck + goose\nprint duck * duck * goose",
},{
  prompt: "Set the variables 'red' equal to 31, 'green' equal to 203, and 'blue' equal to 147. Print the mean (average) of 'red', 'green', and 'blue'",
  hint: "The syntax to set the variable 'spam' equal to 5 and 'my_variable' equal to 11, and then print the mean of 'spam' and 'my_variable' is<br><pre>spam = 5\nmy_variable = 11\nprint (spam + my_variable) / 2</pre>",
  concepts: ["print","var","num","num-ops"],
  tests: {"red":"31","green":"203","blue":"147","":"127\n"},
  solution: "red = 31\ngreen = 203\nblue = 147\nprint (red + green + blue) / 3",
},{
  prompt: "Set the variable 'setup' equal to \"Lobster?? \" and the variable 'punch_line' equal to \"But I hardly know her!\". Print the concatenation of 'setup' and 'punch_line'.",
  hint: "The syntax to set the variable 'q' equal to \"What? \" and 'a' equal to \"YEAH!\", and then print the concatenation of 'q' and 'a' is<br><pre>q = \"What? \"\na = \"YEAH!\"\nprint q + a</pre>",
  concepts: ["print","var","str","add-str"],
  tests: {"setup":"'Lobster?? '","punch_line":"'But I hardly know her!'","":"Lobster?? But I hardly know her!\n"},
  solution: "setup = \"Lobster?? \"\npunch_line = \"But I hardly know her!\"\nprint setup + punch_line",
},{
  prompt: "Write a function called get_one_hundred that returns the number 100",
  hint: "Here's a function called get_two_hundred that returns the number 200<br><pre>def get_two_hundred():\n    return 200</pre>",
  concepts: ["func-def","func-return","num"],
  tests: {"get_one_hundred()":"100"},
  solution: "def get_one_hundred():\n    return 100",
},{
  prompt: "Write a function called say_hello that returns the string \"hello\"",
  hint: "Here's a function called say_goodbye that returns the string \"goodbye\"<br><pre>def say_goodbye():\n    return \"goodbye\"</pre>",
  concepts: ["func-def","func-return","str"],
  tests: {"say_hello()":"'hello'"},
  solution: "def say_hello():\n    return \"hello\"",
},{
  prompt: "Write a function called bananas that returns the string \"Stop monkeying around!\"",
  hint: "Here's a function called oranges that returns the string \"Orange you glad I didn't say banana?\"<br><pre>def oranges():\n    return \"Orange you glad I didn't say banana?\"</pre>",
  concepts: ["func-def","func-return","str"],
  tests: {"bananas()":"'Stop monkeying around!'"},
  solution: "def bananas():\n    return \"Stop monkeying around!\"",
},{
  prompt: "Write a function called find_product that returns the product of 151 and 57",
  hint: "Here's a function called find_sum that returns the sum of 12 and 81<br><pre>def find_sum():\n    return 12 + 81</pre>",
  concepts: ["func-def","func-return","num","num-ops"],
  tests: {"find_product()":"8607"},
  solution: "def find_product():\n    return 151 * 57",
},{
  prompt: "Write a function called build_abs that returns the string \"ab\" repeated 6 times",
  hint: "Here's a function called build_glutes that returns the string \"glute\" repeated 2 times<br><pre>def build_glutes():\n    return \"glute\" * 2</pre>",
  concepts: ["func-def","func-return","str","mul-str","num"],
  tests: {"build_abs()":"'abababababab'"},
  solution: "def build_abs():\n    return \"ab\" * 6",
},{
  prompt: "Write a function called multiply_by_10 that takes a number as an argument and returns the number multiplied by 10",
  hint: "Here's a function called divide_by_10 that takes a number as an argument and returns the number divided by 10<br><pre>def divide_by_10(x):\n    return x / 10</pre>",
  concepts: ["func-def","func-return","num","num-ops","func-args"],
  tests: {"multiply_by_10(198)":"1980","multiply_by_10(-7)":"-70","multiply_by_10(0)":"0"},
  solution: "def multiply_by_10(x):\n    return x * 10",
},{
  prompt: "Write a function called add_three_nums that takes three numbers as arguments and returns their sum",
  hint: "Here's a function called multiply_three_nums that takes three numbers as arguments are returns their product<br><pre>def multiply_three_nums(x, y, z):\n    return x * y * z</pre>",
  concepts: ["func-def","func-return","num","num-ops","func-args"],
  tests: {"add_three_nums(2, -4, 10)":"8","add_three_nums(-12, 83, -111)":"-40","add_three_nums(0, 999, -999)":"0"},
  solution: "def add_three_nums(x, y, z):\n    return x + y + z",
},{
  prompt: "Write a function called concat_three_strings that takes three strings as arguments and returns them concatenated together",
  hint: "Here's a function called concat_two_strings that takes two strings as arguments are returns them concatenated together<br><pre>def concat_two_strings(x, y):\n    return x + y</pre>",
  concepts: ["func-def","func-return","func-args","str"],
  tests: {"concat_three_strings('green ', ' eggs', ' and ham')":"'green  eggs and ham'","concat_three_strings('a', 'b', 'c')":"'abc'","concat_three_strings('1', '2', '3')":"'123'"},
  solution: "def concat_three_strings(x, y, z):\n    return x + y + z",
},{
  prompt: "Write a function called mul_string that takes a string and number as arguments and returns the string repeated the number times",
  hint: "Here's a function called concat_two_strings that takes two strings as arguments are returns them concatenated together<br><pre>def concat_two_strings(x, y):\n    return x + y</pre>",
  concepts: ["func-def","func-return","func-args","str","num","mul-str"],
  tests: {"mul_string('art', 3)":"'artartart'","mul_string('doo', 4)":"'doodoodoodoo'","mul_string('da', 5)":"'dadadadada'"},
  solution: "def mul_string(base_str, num):\n    return base_str * num",
},{
  prompt: "Write a function called calc_eq that takes four numbers a, b, c, d as arguments and returns (a plus b) times (c minus d)",
  hint: "Here's a function called calc_eq that takes three numbers a, b, c as arguments and returns (a plus b) times c<br><pre>def calc_eq(a, b, c):\n    return (a + b) * c</pre>",
  concepts: ["func-def","func-return","func-args","num","num-ops"],
  tests: {"calc_eq(1, 2, 3, 4)":"-3","calc_eq(-5, 10, 102, -4)":"530","calc_eq(23, 47, 15, 57)":"-2940"},
  solution: "def calc_eq(a, b, c, d):\n    return (a + b) * (c - d)",
},{
  prompt: "Write a function called bark that returns the string \"woof\". Then call bark and print the result.",
  hint: "Here we first define the say_hello function, then call it and print the result<br><pre>def say_hello():\n    return \"hello\"\n    \nprint say_hello()</pre>",
  concepts: ["func-def","func-return","print","func-call","str"],
  tests: {"bark()":"'woof'","":"woof\n"},
  solution: "def bark():\n    return \"woof\"\n\nprint bark()",
},{
  prompt: "Write a function called add_5 that takes a number as an argument and returns the number added to 5. Then call add_5 three times, with arguments 3, 150, and -15, and print the result each time.",
  hint: "Here we first define the subtract_5 function, then call it three times with arguments 2, 40, and -10 and print the result each time<br><pre>def subtract_5(x):\n    return x - 5\n    \nprint subtract_5(2)\nprint subtract_5(40)\nprint subtract_5(-7)</pre>",
  concepts: ["func-def","func-return","print","func-call","func-args","num","num-ops"],
  tests: {"add_5(0)":"5","":"8\n155\n-10\n"},
  solution: "def add_5(x):\n    return x + 5\n\nprint add_5(3)\nprint add_5(150)\nprint add_5(-15)",
},{
  prompt: "Write a function is_above_10 that takes a number as an argument and returns True only if the number is greater then ten, otherwise False.",
  hint: "Here's a function that tests if a function is less than 4: <br><pre>def is_below_4(x):\n\tif x < 4:\n\t\treturn True\n\telse:\n\t\treturn False\n\t</pre>",
  concepts: ["func-def", "func-return", "func-args", "if", "cmp", "num", "bool", "var"],
  tests: {"is_above_10(10)": "False", "is_above_10(11)": "True"}
},{
  prompt: "Create a list and name it my_list. Using append add 1, 2, 3, 4, 5 to my_list in that order.",
  hint: "To help you get started. <br><pre>my_list = []\nmy_list.append(1)\nmy_list.append(2)</pre>",
  concepts: ["list", "list-append", "num", "var"],
  tests: {"my_list": "[1, 2, 3, 4, 5]"}
},{
  prompt: "Create a list and name it my_list2. Using a for loop add the numbers 1 through 100 to my_list2",
  hint: "This would add the numbers 1 through 9 to a_list. <br><pre>a_list = []\nfor number in range(1, 10):\n\ta_list.append(number)</pre>",
  concepts: ["list", "list-append", "for", "range", "num", "var"],
  tests: {"my_list2": "[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100]"}
},{
  prompt: "You don't actually need a for loop in the previous assignment. How would you make my_list2 contain all the number 1 through 100 in just one line?",
  hint: "This code is equivalent to my_list2 = [1, 2, 3, 4, 5] <br><pre>my_list2 = range(1, 6)</pre>",
  concepts: ["list", "range", "num", "var"],
  tests: {"my_list2": "[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100]"}
},{
  prompt: "Write a function called return_nums that takes in a number x as an argument and returns a list with all of the numbers from 0 to x.",
  hint: "The syntax for writing a for loop that prints out the numbers 0 through 9 line by line is <br> <pre>for number in range(0, 10):\n\tprint x</pre> Now create a list outside of the for loop and use append inside the for loop. If you're clever about it you can even avoid using a for loop!<br><br>",
  concepts: ["func-def", "func-return", "func-args", "list", "for", "list-append", "range", "num", "var"],
  tests: {"return_nums(5)": "[0, 1, 2, 3, 4, 5]"}
},{
  prompt: "Write a function called return_fifth that takes in a list as an argument and returns the fifth element of the list.",
  hint: "This function takes a list as an argument and returns the fourth element: <br><pre>def return_fourth(lst):\n\treturn lst[3]</pre>",
  concepts: ["func-def", "func-return", "func-args", "list", "list-idx", "num", "var"],
  tests: {"return_fifth([3, 2, 4, 4, 37])": "37"}
},{
  prompt: "Write a function called append_hello that takes a list as an argument and returns the list with the string 'hello' appended",
  hint: "The syntax for writing a function that takes a list as an argument and appends the number 10 to it is <br><pre> def append_10(x):\n\tx.append(10)\n\treturn x</pre>",
  concepts: ["func-def", "func-return", "func-args", "list", "list-append", "num", "var"],
  tests: {"append_hello(['goodbye'])": "['goodbye', 'hello']"}
},{
  prompt: "Write a function called return_longer that takes in two lists as argument and returns the one that's longer.",
  hint: "This code takes two lists as arguments and returns the one that's shorter: <br><pre>def return_shorter(a, b):\n\tif len(a) >= len(b):\n\t\treturn b\n\telse:\n\t\treturn a</pre>",
  concepts: ["func-def", "func-return", "func-args", "list", "len", "if", "num", "cmp", "var"],
  tests: {"return_longer([3, 37], [23])": "[3, 37]", "return_longer([2], [4, 47])": "[4, 47]"}
},{
  prompt: "Write a function called concat_nums that takes two numbers as arguments are returns them concatenated as strings. For example, concat_nums(3, 46) should return '346'.",
  hint: "This code concatenates the numbers 2 and 45 as strings:<br><pre>str(2) + str(45)</pre>",
  concepts: ["func-def", "func-return", "func-args", "int-to-str", "add-str", "num", "str", "var"],
  tests: {"concat_nums(22, 78)": "'2278'"}
},{
  prompt: "Write a function called add_strings that takes two strings as arguments are returns them added as numbers. For example, add_strings('3', '46') should return 49.",
  hint: "This code adds the strings '2' and '45' as integers:<br><pre>int('2') + int('45')</pre>",
  concepts: ["func-def", "func-return", "func-args", "str-to-int", "add-int", "num", "str", "var"],
  tests: {"add_strings('23', '78')": "101"}
},{
  prompt: "Create an empty dictionary and call it num_legs. Then add the key 'cat' mapped to the value 4, and the key 'baboon' mapped to the value 2.",
  hint: "This code creates an empty dictionary called my_dict and adds the key 'name' mapped to the value 'methuselah':<br><pre>my_dict = {}\nmy_dict['name'] = 'methuselah'</pre>",
  concepts: ["dict", "dict-assign", "str", "var"],
  tests: {"num_legs": "{'cat': 4, 'baboon': 2}"}
},{
  prompt: "Write a function called get_carrot that takes a dictionary as an argument and returns whatever is mapped to by the key 'carrot'",
  hint: "This function returns whatever is mapped to by 'eggplant' in its input dictionary:<br><pre>def get_eggplant(d):\n\treturn d['eggplant']</pre>",
  concepts: ["func-def", "func-return", "func-args", "dict", "dict-get", "str", "var"],
  tests: {"get_carrot({'carrot': 'stick'})": "'stick'", "get_carrot({'carrot': 'orange'})": "'orange'"}
},{
  prompt: "Write a function called add_ice_cream that takes a dictionary as an argument, maps 'ice_cream' to 'sweet' in the dictionary, and returns it.",
  hint: "This function takes a dictionary as an arguments and maps 'salsa' to 'spicy' in it:<br><pre>def add_salsa(d):\n\td['salsa'] = 'spicy'\n\treturn d</pre>",
  concepts: ["func-def", "func-return", "func-args", "dict", "dict-assign", "str", "var"],
  tests: {"add_ice_cream({})": "{'ice_cream': 'sweet'}", "add_ice_cream({'bacon': 'greasy'})": "{'bacon': 'greasy', 'ice_cream': 'sweet'}"}
},{
  prompt: "Write a function called map_true that takes a list as an argument and returns a dictionary with each item in the list mapped to True",
  hint: "This function takes a list as an argument and returns a dictionary with each item in it mapped to False:<br><pre>def map_false(lst):\n\td = {}\n\tfor item in lst:\n\t\td[item] = False\n\treturn d</pre>",
  concepts: ["func-def", "func-return", "func-args", "dict", "dict-assign", "list", "for", "bool", "var"],
  tests: {"map_true(['a', 'b', 'c'])": "{'a': True, 'b': True, 'c': True}"}
},{
  prompt: "Write a function called map_indices that takes a list as an argument and returns a dictionary with each item in the list mapped to its list index",
  hint: "This function takes a list as an argument and returns a dictionary with each item in it mapped to its negative index:<br><pre>def map_neg_indices(lst):\n\td = {}\n\tfor i in range(len(lst)):\n\t\td[lst[i]] = -i\n\treturn d</pre>",
  concepts: ["func-def", "func-return", "func-args", "dict", "dict-assign", "list", "for", "range", "len", "list-idx", "num", "var"],
  tests: {"map_indices(['a', 'b', 'c'])": "{'a': 0, 'b': 1, 'c': 2}"}
},{
  prompt: "Write a function called switch_dict that takes a dictionary as an argument and returns a new dictionary mapping all its values to their keys. For example, switch_dict({'a': 'x', 'b': 'y'}) should return {'x': 'a', 'y': 'b'}",
  hint: "This function takes a dictionary as an argument and prints out all its keys and values:<br><pre>def print_dict(d):\n\tfor k,v in d.items():\n\t\tprint k, v</pre>",
  concepts: ["func-def", "func-return", "func-args", "dict", "dict-assign", "dict-get", "for", "dict-items", "var"],
  tests: {"switch_dict({'aa': 'zz', 'er': 'c'})": "{'zz': 'aa', 'c': 'er'}"}
},{
  prompt: "Write a function called map_lists that takes two lists as arguments and returns a dictionary with each item in first list mapped the corresponding item in the second",
  hint: "This function takes two lists as arguments and returns a dictionary with each item in the second list mapped to the corresponding item in the first<br><pre>def map_lists2(a, b):\n\td = {}\n\tfor i in range(len(b)):\n\t\td[b[i]] = a[i]\n\treturn d</pre>",
  concepts: ["func-def", "func-return", "func-args", "dict", "dict-assign", "list", "for", "range", "len", "list-idx", "var"],
  tests: {"map_lists(['a', 'b', 'c'], ['z', 'x', 'd'])": "{'a': 'z', 'b': 'x', 'c': 'd'}"}
},{
  prompt: "Write a while loop that prints out every square number less than 300",
  hint: "Here's a loop that prints out every cube number less than 100:<br><pre>i = 1\ncube = 1\nwhile cube < 100:\n\tprint cube\n\ti += 1\n\tcube = i * i * i</pre>",
  concepts: ["print", "while", "cmp", "num-ops", "num", "var"],
  tests: {"": "1\n4\n9\n16\n25\n36\n49\n64\n81\n100\n121\n144\n169\n196\n225\n256\n289\n"}
},{
  prompt: "Congratulations! You've finished all the exercises. What next? Check the hint.",
  hint: "Use this terminal to play around a bit. Then click <a href=\"/exercises/1\">here</a> to go back and do all the exercises without looking at any of the hints! This is how you get good.<br><br>",
  concepts: [],
  tests: {}
}]
