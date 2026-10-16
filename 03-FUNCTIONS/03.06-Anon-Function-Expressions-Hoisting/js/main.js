// const output1 = document.getElementById("output-1");
// const output2 = document.getElementById("output-2");
// const output3 = document.getElementById("output-3");
// const output4 = document.getElementById("output-4");
// const output5 = document.getElementById("output-5");
// const output6 = document.getElementById("output-6");

// const btn1 = document.getElementById("btn-1");
// const btn2 = document.getElementById("btn-2");

// btn1.addEventListener("click", doSomething);

// // function 1
// function doSomething() {
//   output1.textContent = "You clicked btn1!";
// }

// // Function 2
// btn2.onclick = function () {
//   output2.textContent = "You clicked the btn2!";
// };

// // Function 3
// const btn3 = document.getElementById("btn-3");

// btn3.addEventListener("click", function () {
//     output3.textContent = "btn3 addEventListener('click', inline anonymous function)"
// })

// document.addEventListener("DOMContentLoaded", onPageLoaded);

// // function 1
// function onPageLoaded() {
//     output4.textContent = "page loaded, says onPageLoaded function";
// }

// // function 2
// document.addEventListener("DOMContentLoaded", function () {
//     output5.textContent = "page loaded, says inline anonymous function";
// })

// //function 3
// document.body.onload = function () {
//     output6.textContent = "page loaded, says onload = anonymous function";
// }

// document.addEventListener("keydown", reportKey);

// function reportKey(event) {
//     output4.textContent = `keydown called reportKey(). Key: ${event.key} Code: ${event.keyCode}`
// }

// document.addEventListener("keydown", function (event) {
//     output5.textContent = `keydown ran inline function. Key: ${event.key} Code: ${event.keyCode}`
// });

// document.onkeyup = function (event) {
//     output6.textContent = `onkeyup = anonymous function. Key: ${event.key} Code: ${event.keyCode}`
// };

// When you click the button, show your weight on the Moon.

// 1. Use a calcMoonWeight(earthWeight) function that returns the moon weight (one-sixth).

// function calcMoonWeight(earthWeight) {
//       return earthWeight / 6;
//     }

// 2. The button uses an inline anonymous function in its listener.

// 3. If the box is empty, show "Please enter your weight." instead of an answer. 

// 4. Show the answer rounded to one decimal place: "On the Moon, you would weigh 30.0 lbs."

// 5. Bonus: pressing Enter in the box also calculates.

const numberInput = document.getElementById("earthWeight");
const btn = document.getElementById("btn-box");
const moonWeight = document.getElementById("result");

function calcMoonWeight() {

    if (!numberInput.value) {
        moonWeight.textContent = "Please enter your weight";
        return;
    }

    let result = (numberInput.value / 6).toFixed(1);
    moonWeight.textContent = `Your moon weight is ${result}`;
}

btn.addEventListener("click", function (event) {
    event.preventDefault();
    calcMoonWeight();
})

numberInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        calcMoonWeight()
    }
})