// Lesson 05.07 - FINAL
// Calculator

// Calculator Application
// Assigning Click Event Listeners on a Loop
// Working with Math Operator Buttons

// 5. Get the divs that have a class of **num-btns**. These are the digits from 0-9:
const numBtnsArr = document.querySelectorAll(".num-btns");

// 6. Loop through the numBtnsArr array and assign event listeners to the objects:
for (let i = 0; i < numBtnsArr.length; i++) {
  numBtnsArr[i].addEventListener("click", onNumberClick);
}

// 7. Get the operator divs (+,-,*,/), which have a class of oper-btns:
const operBtnsArr = document.querySelectorAll(".oper-btns");

// 8. Loop through the operBtnsArr arrays, adding listeners to each item:
for (let i = 0; i < operBtnsArr.length; i++) {
  operBtnsArr[i].addEventListener("click", onOperatorClick);
}

// 9. Get the other three "buttons" which call functions; these are the = (equals) and clear buttons:
const equalsBtn = document.querySelector(".equals-btn");
equalsBtn.addEventListener("click", calculateAnswer);

const clearBtn = document.querySelector(".clear-btn");
clearBtn.addEventListener("click", clearBox);

// 10. Get the **num-box**, which is the div for the output:
const numBox = document.getElementById("num-box");
numBox.textContent = "";

// 11. Next, declare several global variables for use by the functions:
let numStr = "";
let num = 0;
let nums = [];
let oper = "";
let answer = 0;

// 12. Write the onNumberClick() function, which runs on click of any digit from 0-9 or the decimal point.
function onNumberClick() {
  numStr += this.id; // concatenate the clicked digit
  numBox.textContent += this.id; // updates the output box
}

// 13. Write the onOperatorClick() function, which runs when an operator "button" is clicked:
function onOperatorClick() {
  oper = this.id;
  nums.push(numStr);
  numStr = "";
  numBox.textContent += " " + oper + " ";
}

// 14. Write the calculateAnswer() function, which:
function calculateAnswer() {
  nums.push(numStr);
  let num1 = Number(nums[0]);
  let num2 = Number(nums[1]);
  if (oper == "+") answer = num1 + num2;
  if (oper == "-") answer = num1 - num2;
  if (oper == "*") answer = num1 * num2;
  if (oper == "/") answer = num1 / num2;
  if (Number.isInteger(answer)) {
    numBox.textContent += " = " + answer;
  } else {
    // not an integer
    numBox.textContent += " = " + answer.toFixed(7);
  }
}

// 15. Write the **clearBox()** function, which empties the output box and resets the global variables. The calculator is ready for fresh input.

function clearBox() {
  numBox.textContent = "";
  nums = [];
  num = 0;
  oper = "";
  total = 0;
  numStr = "";
}

// NEXT: Lesson 06.01
