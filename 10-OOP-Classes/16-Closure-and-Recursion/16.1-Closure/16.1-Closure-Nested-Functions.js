/*
  1. a closure is a function that allows you to have access to variables even after the scope is closed.
  It also keep tracks of the data

  2. A closure is a combination of a function and lexical environment

  // "JavaScript variables can belong to the local or global scope. Global variables can be made local (private) with closures... JavaScript supports nested functions. Nested functions have access to the scope 'above' them."
*/

// Closure with Nested Functions, where the inner function gets a value from the outer function

// Declare a function outerFunc, with a parameter num1.
function outerFunc(num1) {}

// Inside outerFunc, declare another function, innerFunc. This nested function has num2 as its parameter:
function outerFunc(num1) {
  function innerFunc(num2) {}
}

// Have innerFunc return the sum of the numbers:
function outerFunc(num1) {
  function innerFunc(num2) {
    return num1 + num2;
  }
}

// Have the outerFunc return innerFunc, which will have num1 pre-set by whatever value was passed to outerFunc. So, if num1 is 5, outerFunc will return innerFunc, with the 5 already in there:

function outerFunc(num1) {
  function innerFunc(num2) {
    return num1 + num2;
  }

  return innerFunc;
}

// Save the return value as inFunc, which is itself a function equal to:
// function innerFunc(num2) {
//    return 5 + num2;
// }
let inFunc = outerFunc(5);

// Now, when inFunc is called, it just needs num2 passed in, so that it can add it to the pre-set 5.
// Call inFunc, and pass a number argument

let sum = inFunc(8);

// The innerFunc returns the sum of num1 + num2, so we saved that to a variable, sum. Now just output the sum:
console.log(sum); // 13

// Let's try a closure with strings. It has the same nested function as the previous example. It's just that it concatenates a string, rather than adds mumbers.

function exteriorFunc(str1) {
  function interiorFunc(str2) {
    return str1 + " " + str2;
  }

  return interiorFunc;
}

let intFunc = exteriorFunc("Hello");
let str = intFunc("World");
console.log(str); // Hello World

// Let's try a closure with arrays. The process will concatenate two arrays and then sort them (A-Z).

const citrusFruits = ["lemon", "tangerine", "orange", "grapefruit", "lime"];

const tropicalFruits = ["pineapple", "banana", "mango", "papaya", "kiwi"];

function outsideFunc(arr1) {
  function insideFunc(arr2) {
    // concatenate the two arrays and then sort them
    return arr1.concat(arr2).sort();
  }

  return insideFunc;
}

let insiderFunc = outsideFunc(citrusFruits);
let comboArr = insiderFunc(tropicalFruits);
console.log(comboArr);

/*
  Closure exercises:
  
  1. Make a function/closure (nested functions), where each function has 1 parameter, both numbers. 
  - The outer function's params is squared (multiplied by itself). 
  - The outer function returns the inner function.
  - The inner function also squares its param.
  - The inner function returns the difference of the squares, that is, the outer function square minus the inner function square.
  - Return the absloute value. So, if the difference is negative, make it positive. To get the absolute value of a number, pass it to the Math.abs() method.

  create a function/closure that returns two functions
    - in this function it has a variable called totalScore
      let totalScore = 0

  1. scores - each time this function is called it adds to the totalScore and return
      `Kobe scores 5 points`

  2. totalScore - this function returns the name and the total scores
      `Kobe's total score: 50`
*/

/*
  Closure exercises:

  SOLUTION:
  
 1. Make a function/closure (nested functions), where each function has 1 parameter, both numbers. 
  - The outer function's params is squared (multiplied by itself). 
  - The outer function returns the inner function.
  - The inner function also squares its param.
  - The inner function returns the difference of the squares, that is, the outer function square minus the inner function square.
  - Return the absloute value. So, if the difference is negative, make it positive. To get the absolute value of a number, pass it to the Math.abs() method.
  
*/

function outerFunction(n1) {
  function innerFunction(n2) {
    return Math.abs(n1 * n1 - n2 * n2);
  }

  return innerFunction;
}

let outFunction = outerFunction(12);
let diffSq = outFunction(5);
console.log(diffSq); // 144 - 25 = 119

let outFunct = outerFunction(4);
let diffSqu = outFunct(11);
console.log(diffSqu); // 16 - 121 = -105 = 105
