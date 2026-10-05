// Lesson 05.06 - FINAL
// Calculator

// user clicks num btn (div) to enter a num into the calculator
// num btn click calls a function that stores the value as num1
// user clicks an operator btn (+, -, *, /)
// oper btn click calls function that stores operator
// user clicks another num btn
// num btn click calls a function that stores the value as num2
// user clicks C to clear

// get all the digits, and assign them the same listener to call same function
const numBtnsArr = document.querySelectorAll(".num-btns");
const operBtnsArr = document.querySelectorAll(".oper-btns");

// loop through the arrays, adding listeners to each object:
for (let i = 0; i < numBtnsArr.length; i++) {
  numBtnsArr[i].addEventListener("click", onNumberClick);
}

for (let i = 0; i < operBtnsArr.length; i++) {
  operBtnsArr[i].addEventListener("click", onOperatorClick);
}

const equalsBtn = document.querySelector(".equals-btn");
equalsBtn.addEventListener("click", calculateAnswer);

const clearBtn = document.querySelector(".clear-btn");
clearBtn.addEventListener("click", clearBox);

const numBox = document.getElementById("num-box");
numBox.textContent = "";

// get all the operators, and assign them the same listener to call same function

let numStr = ""; // to concate the numbers clicked
let num = 0; // to store the concat num-like str after it has been converted to an actual number
let nums = [];
let oper = "";
let answer = 0;

// runs when a number button 0-9 is clicked
function onNumberClick() {
  // this.id is the id of the btn, as 'number-like string'
  // for multi-digit numbers we have to concat nums then convert to string
  numStr += this.id; // concat the clicked number
  // so, if user clicks 1, 2, 3, the num-like string is '123'
  numBox.textContent += this.id; // output the clicked number
}

// when an operator is clicked, the numStr is done, so convert it to a real Number, pass it to num variable, and push it into nums array:
function onOperatorClick() {
  oper = this.id; // save the operator (+,-,*,/)
  num = Number(numStr); // convert string to number
  numStr = ""; // reset (make way for second number)
  nums.push(num); // save the number in the array
  numBox.textContent += " " + this.id + " "; // output
}

// runs when equal siqn button is clicked
function calculateAnswer() {
  // save the most recent number to the array
  num = Number(numStr);
  nums.push(num);
  numStr = "";
  if (oper == "+") answer = nums[0] + nums[1];
  if (oper == "-") answer = nums[0] - nums[1];
  if (oper == "*") answer = nums[0] * nums[1];
  if (oper == "/") answer = nums[0] / nums[1];
  // if answer is not integer, round to 7 decimals
  if (Number.isInteger(answer)) {
    numBox.textContent += " = " + answer;
  } else {
    // not an integer
    numBox.textContent += " = " + answer.toFixed(7);
  }
}

// reset all the vars and clear the output
function clearBox() {
  numBox.textContent = "";
  nums = [];
  num = 0;
  oper = "";
  total = 0;
}

// NEXT: Lesson 06.01
