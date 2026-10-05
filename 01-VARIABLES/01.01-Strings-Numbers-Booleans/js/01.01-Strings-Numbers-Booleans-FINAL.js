// Lesson 01.01 - FINAL

// A variable is declared with `var` or `let`, altnough `let` is the more modern syntax and should be used instead of `var`:

// string variables

// Strings are text enclosed in either single or double quotes:

// 1. Declare a variable with `var` and assign it a string in double quotes:

var pet = "cat";
console.log(pet); // cat

// 2. Change the value to another string, this time in single quotes:

pet = "dog";
console.log(pet); // dog

// One difference between `var` and `let` is that a `var` can be redeclared.

// 3. Redeclare `pet`:

var pet = "bunny";
console.log(pet); // bunny (no error)

// A variable declared with `let` cannot be redeclared--it throws an error:

// 4. Declare a variable with `let` and then try to redeclare it:

let petSound = "Woof!";
console.log(petSound); // Woof!
// let petSound = "Grrr!";
// Error: Identifier 'petSound' has already been declared

// To change the value of an existing variable, don't redeclare it. Just set it equal to something else:

// 5. Comment out the second `let petSound`, and then change "Woof!" to "Grrr!" without redeclaring the variable:

petSound = "Grrr!";
console.log(petSound); // Grrr!

// Multiple values can be outputted in the same console.log:

// 6. Output both variables in one console.log:

console.log(pet, petSound); // dog  Grrr!

// 7. For added clarity, you can label the console output:

console.log("pet", pet, "petSound", petSound);
// pet dog petSound Grrr!

// number variables

// A number value can be an integer or a float (decimal). There are no commas in numbers.

// 8. Declare an integer, a float, and a 4-digit number:

let price1 = 35; // integer
let price2 = 3.5; // float
let price3 = 3500; // no comma
console.log(price1, price2, price3);

// Naturally, number variables can be used to do math. You can save the result to a variable or just directly console log the answer.

// 9. Take these basic math operators for a spin: `+`, `-`, `*`, `/`.

let totalPrice = price1 + price2 + price3;
console.log(totalPrice); // 3538.5
console.log(price1 - price2); // 31.5
console.log(price1 * price2); // 122.5
console.log(price1 / price2); // 10

// boolean variables

// A boolean is a variable the value of which can only be `true` or `false`.
// The names of booleans often begin with *is* to emphasize the either-or concept
// and to let you know at a glance that this is a boolean.

// 10. Declare a boolean variable with a value of *true*:
let online = true;
let isOnline = true;
console.log(online, isOnline); // true true

// Changing the value of  boolean is known as *toggling* or *flipping* it. This can be done by direct assignment, or by setting the variable equal to itself with `!` in front.

// 11. "Flip" the boolean from true to false, and then make it true again by putting `!` in front of it:

isOnline = false;
console.log("isOnline", isOnline); // false
isOnline = !isOnline;
console.log("isOnline", isOnline); // true

// undefined

// A variable can be declared without a value being assigned. The assumption is that a value will be assigned later. Until then, both the value and datatype are `undefined`.

// 12. Declare a variable, but don't assign it a value:

let player1;
console.log("player1", player1);
// player1 undefined

// typeof() method

// 13. Declare variables of each of the four major "primitive" types: string, number, boolean and undefined. Then log the variable name, value and data type:

let ketchup = "Heinz";
console.log("ketchup", ketchup, typeof ketchup);
// ketchup Heinz string

let varieties = 57;
console.log("varieties", varieties, typeof varieties);
// varieties 57 number

let fresh = true;
console.log(fresh); // true
console.log("fresh", fresh, typeof fresh);

let total;
console.log("total", total, typeof total);
// total undefined undefined

// Multiple variables can be delared in one line with a single keyword.

// 14. Declare three variables with just one instance of the `let` keyword:

let x = 1,
  y = 2,
  z = 3;
console.log(x + y * z); // 7

// Such "one-liner" variable declarations are more common when the vars that are not to be assiged an initial value.

// 15. Declare four variables with just one instance of the `let` keyword, leaving them all without an initial value, so *undefined*:

let day, date, month, year;
console.log(day, date, month, year);
// undefined undefined undefined undefined

// To avoid undefined variables, you can assign a starter value of `""` (empty string) or `0`.

// 16. Declare a string and a number, assigning them starter values of "" and 0, respectively:

let grade = "";
let score = 0;

// If you declare a variable and set its value equal to an existing
// variable, the copy becomes its own independent entity, which means
// that the copy is in no way "linked" to the original. If you change
// the value of the copy, the original is not aaffected.

// 17. Declare a variable, and set it equal to score from the previous step:

let myScore = score;
myScore = 98;
console.log(myScore); // 98
console.log(score); // 0

// END Lesson 01.01

// NEXT: Lab 01.01, Lesson 01.02
