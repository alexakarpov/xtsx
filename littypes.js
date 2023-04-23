// **********************************************
// ******************* PART 1 *******************
// **********************************************
// Create a variable called highScore that can be a number OR a boolean
var highscore;
// **********************************************
// ******************* PART 2 *******************
// **********************************************
// create an array called stuff
// it can be an array of numbers OR an array of strings
// it cannot be an array of numbers and strings (mixed together)
var stuff;
// Create an array called colors that can hold a mixture of RGB and HSL color types
// **********************************************
// ******************* PART 6 *******************
// **********************************************
// Write a function called greet that accepts a single string OR an array of strings
// It should print "Hello, <name>" for that single person OR greet each person in the array with the same format
var colors;
var greet = function (x) {
    if (typeof x === "string") {
        console.log("Hello, ".concat(x));
    }
    else {
        for (var _i = 0, x_1 = x; _i < x_1.length; _i++) {
            var z = x_1[_i];
            console.log("Hi ".concat(z));
        }
    }
};
greet("Alex");
greet(["Bob", "Alice", "Zeb"]);
