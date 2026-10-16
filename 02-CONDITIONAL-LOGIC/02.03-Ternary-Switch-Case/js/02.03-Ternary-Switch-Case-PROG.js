// Lesson 02.03 - START
/* 
ternary expressions
&& (AND) operator 
|| (OR) operator 
*/

// ternary expression

// A ternary expression is a concise alternative to an if-else statement. What takes an if-else five lines of code to accomplish, a ternary expression gets done in one.

// Let's start with an if-else statement.

// 1. Declare three number variables and do some conditional math.
// If x is less than y, add them; othewise (else) multiply them:
let x = 5;
let y = 8;
let z = 0;

if (x < y) {
    z = x + y;
} else {
    z = x * y;
}

console.log(z); // 13

// Now to convert the if-else to a ternary:

// 2. Add a question mark right inside the if-block:
/*
if(x < y) {  
    ? z = x * y;
} else {
    z = x + y;
}
*/
// 3. Add a colon right inside the else-block:
/*
if(x < y) {  
    ? z = x * y;
} else {
    : z = x + y;
}
*/
// 4. Delete the if() and else, including parentheses:
/*
x < y {  
    ? z = x * y;
} {
    : z = x + y;
}
*/
// 5. Delete all the curly braces:

//   x < y
//     ? z = x * y;
//     : z = x + y;

// 6. This is all one line now, so get rid of the first semi-colon and back everything up onto the same line:

if (x < y) {
    z = x + y;
} else {
    z = x * y;
}

z = x < y ? x + y : x * y;

console.log(z);

// 7. You can even get rid of the second "z=" since it is assumed by the first one:

console.log(z);

// CHALLENGE:

// 8. Convert this if-else into a ternary:

let n = 5;

if (n == 7) { // n == 7
    n = 0; // n = 0
} else {
    n++ // n++
}

n = n == 7 ? 0 : n++;

console.log(n); // 6

// 9. Convert this if-else into a ternary:

let num = 20;
let color = "blue";

if (num == 20 || color == "green") {
    num++
} else {
    num--
}

num == 20 ? num++ : num--;

console.log(num);

// multiple conditions

// Multiple conditions can be evaluated with the && (AND) and || (OR) operators:

// The && (AND) operator requires at least two conditions to be true.

// 10. Do an if statement with `&&` where two conditions must be true.



// && (AND) operator

console.log(msg); // Welcome to Texarkana, Texas

// 11. Do an if statement with `||` where only one condition must be true.

// || (OR) opertor

let city = "Houston";
let state = "California";
let msg = "";

if (city == "Houston" && state == "Texas") {
    msg = `Welcome to ${city}, ${state}`;
} else {
    msg = 'Not Houston/Texas';
}

console.log(msg); // Welcome to Texarkana

// 12. Change city to 'Dallas'`, and run it again. The else part will run both times.

// There can be more than two **&&** conditions.

// 13. Try one with three conditons; if *any* of them are false, the **else** part runs:

let R = 101;
let G = 98;
let B = 34;

if (R > 100 && G > 100 && B > 100) {
    msg = "All RGB values are greater than 100";
} else {
    msg = "At least one RGB value is 100 or less";
}

console.log(msg); // All RBG values greater than 100

// 14. Set any R, G, B values to below 100, and run it again. Now you get the else part.

// 15. Try using more than two `||` operators:

let car = "green";

if (car == "black" || car == "silver" || car == "blue") {
    msg = "car is black, silver, or blue";
} else {
    msg = "car is not black, silver, or blue";
}

console.log(msg);

// 16. Change the car color to red so that the else part runs.

let moneySymbol = "JPY";
let currency = "";

if (moneySymbol === "USD") {
    currency = "US Dollar";
} else if (moneySymbol === "JPY") {
    currency = "Japanese Yen";
} else if (moneySymbol === "GBP") {
    currency = "British Pound";
} else {
    currency = "Unknown";
}

switch (moneySymbol) {
    case "USD":
        currency = "US Dollar";
        break;
    case "JPY":
        currency = "Japanese Yen";
        break;
    case "GBP":
        currency = "British Pound";
        break;
    default: 
        currency = "Unknown";
        break;
}

// END Lesson 02.03

// NEXT Lab 02.03
// NEXT Lesson 02.04
