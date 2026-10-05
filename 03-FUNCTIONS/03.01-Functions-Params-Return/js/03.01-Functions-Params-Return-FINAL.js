/* Lesson 03.01 - FINAL

FUNCTIONS 
A function is a block of code that runs only when it is invoked (called). The function can be called in the code or by an event on the web page, such as a button click. A function usually (but not always) has a name to call it by.

How to declare a function.

Follow these steps:

1. Begin by writing the keyword: `function`

2. Give the function a name. Variable naming rules apply. A function DOES something, so it is customary for the name to begin with a verb: `function greetUser`

3. Next put a pair of parentheses: `function greetUser()`

  The parentheses are for passing data to the function, but this is not always necessary, so some functions have empty parentheses.
 
4. Next add a pair of curly braces: `function greetUser() {}`

5. Inside the braces put the code that will run when the function is called:
*/

// define a function:
function sayHello() {
  console.log("Hello!");
}

/*
6. Run this example and check the Console. Nothing happens. Where's the "Hello" message? 

Remember, a function must be called, but all we have done so far is to define it. 

7. We do not have a button to click to call the function, so's just call it directly in the code:
*/
sayHello();
// call the function

// 8. Run the code in the Console again; this time you get 'Hello!'

// variable scope

/* global variables are available everywhere in a script:
    - **var** declared outside of a function is global.
    - **let** declared outside of a code block is global. 
    - **const** (constants) follow the same scoping rule as let.
    
function scoped (local) variables
    - **var**, **let** declared inside a function is local to that function.
    - **let** declared inside a code block is available only to that code block. 
*/

// 9. Declare local variables inside the function:

function welcomePlayer() {
  var username = "Pikachubaca";
  let highScore = "6234";
  console.log(`Welcome back, ${username}! Your high score is ${highScore}`);
}

welcomePlayer();

// 10. Try to access the function variables in the global scope, outside the function:

// console.log(); // Error: username is not defined
// console.log(highScore); // Error: highScore is not defined

// parameters-arguments

// Parameters (params for short) are inputs of a function that go in the parentheses. Inside the function, parameters are local variables. When a function is called, the params are assigned values as arguments passed into the function call parentheses.

// 11. Write a function with two parameters:
function greetPlayer(username, highScore) {
  console.log(`Welcome, ${username}! Your high score is ${highScore}`);
}

// 12. Call the function twice with different arguments each time
greetPlayer("Brian88", 12345);
greetPlayer("Bob", 78967);

// If a function expects an argument, but none is provided, the missing value will be 'undefined'.

// 13. Call the function again, but this time omit the second argument:

greetPlayer("Sally123");
// Welcome, Sally123 undefined

// default parameter values
/*
A parameter can be assigned a value when the function is declared. That way, if no argument is supplied for it, it uses the default. 
*/

// 14. Write a new function, greetPlayerScore(). It is the same as greetPlayer, but with a default high score of 1000:

function greetPlayerScore(username, highScore = 1000) {
  console.log(`Welcome, ${username}! Your high score is ${highScore}`);
}

// 15. Call the function twice, but the second time, only pass in the username. The high score will default to 1000:

greetPlayerScore("X12", 13240);
// Welcome, X12! Your high score is 13240!
greetPlayerScore("yMe");
// Welcome, yMe! Your high score is undefined!

// Global variables are available everywhere, including to all functions:

// 16. Declare some global vars and use them in a function:
let num1 = 10;
let num2 = 14;
let sum = 0;

function addNums() {
  sum = num1 + num2;
  console.log("sum", sum);
}

addNums(); // addNums sum: 24

// A more self-contained approach would be to num1 and num2 to the funcition as parameters (unless num1 and num2 are needed elsewhere in the script).

// refactoring
// Refactoring code means changing it for the better.

// 17. Refactor addNums() as addNumbers() and give it parameters. The values of num1 and num2 will be passed in as the arguments when the function is called:

function addNumbers(num1, num2) {
  let sum = num1 + num2;
  console.log("sum", sum);
}

addNumbers(12, 18); // sum 30
addNumbers(123, 184); // sum 307

// return value

// So far, our output has consisted only of console.log. This is useful for tesing and debugging, but once the output is logged, that data is gone. The answer is for the output to be a "return value" which we can save in the script.

/*
To return a value from a function, put the keyword 'return' in front of a value. 

Save the return value by setting the function call equal to a variable.

A return not only returns a value, it exits the function. 
*/

// 18. Define a new function, that is similar to the previous one, but with one big exception: this one has a return value:

function multiplyNums(num1, num2) {
  let product = num1 * num2;
  return product;
}

// 19. Call the function, setting the function call itself equal to a variable to save the return value:

let prod1 = multiplyNums(12, 15);
console.log("prod1", prod1); // 180

let prod2 = multiplyNums(24, 21);
console.log("prod2", prod2); // 504

// 20. Refactor the greet function to return a value. Use a new name: getGreeting.
// - "get" in function names means it returns a value
// - replace the `console.log` with `return`
// - set the function calls equal to variables
// - log the variables to output the return values

function getGreeting(username, highScore) {
  return `Welcome, ${username}! Your high score is ${highScore}`;
}

let welcome1 = getGreeting("Viper", 73489);
console.log("welcome1:", welcome1);
// Welcome, Viper! Your high score is 73489!

let welcome2 = getGreeting("Ktrav26", 12345);
console.log("welcome2:", welcome2);
// Welcome, Ktrav26! Your high score is 12345!

// 21. Declare a function **calcRestaurantBill()**.
/*
- Give it three parameters: **subTotal**, **tipPct** and **taxRate**, the latter two with default values: **tipPct=15** and **taxRate=4**. This assigns a default 15% tip and default tax rate of 4% if no value(s) are provided for these.
*/

/* 
The function calculates the tax and tip and adds those amounts to the subtotal
- calculate tip:
    - **let tip = subTotal * tipPct / 100;**
- calculate tax:
    - **let tax = subTotal * taxRate / 100;**
- add tax and tip to subtotal to get total:
    - **let total = subTotal + tax + tip;**
*/

function calcRestaurantBill(subTotal, tipPct = 15, taxRate = 4) {
  // 22. Write the calculations. The tax and tip percents are divided by 100, because 15% is not 15, but rather 0.15:
  let tax = (subTotal * taxRate) / 100;
  let tip = (subTotal * tipPct) / 100;
  let total = subTotal + tax + tip;

  // 23. Concatenate the bill and return it:
  let bill = `Sub-total:  $ ${subTotal}
    Tax Rate:   ${taxRate} %
    Tip Pct:    ${tipPct} %
    Tip:        ${tip} %
    Tax:        $ ${tax}
    TOTAL:      $ ${total}
    Thank you!`;
  return bill;
} // end calcRestaurantBill function

// 24. Add toFixed(2) to round the cents to 2 decimal places:
/*
Tip:        ${tip.toFixed(2)} %
Tax:        $ ${tax.toFixed(2)}
TOTAL:      $ ${total.toFixed(2)}
*/

// 25. Call the function, and supply all three parameters. Make the tip 20 percent and the tax 6 percent. This overrides the default tipPct and taxRate.

// $80 subtotal, 20% tip, 6% tax
let bill1 = calcRestaurantBill(80, 20, 6);
console.log(bill1);

// 26. Call the function again, but this time omit the third argument (tax). The tax rate will therefore default to 4%:

// $90 subtotal, 18% tip, 4% tax
let bill2 = calcRestaurantBill(90, 18);
console.log(bill2);

// 27. Call the function, passing in only one parameter, understood to be subTotal. tipPct and taxRate will use the defaults:

// $65 subtotal, 15% tip, 4% tax
let bill3 = calcRestaurantBill(65);
console.log(bill3);

// End Lesson 03.01

// Next: Lab 03.01, Lesson: 03.02
