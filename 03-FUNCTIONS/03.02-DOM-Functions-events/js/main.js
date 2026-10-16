const btn1 = document.getElementById("btn-1");
const output = document.getElementById("output");

function greetWorld() {
  // alert("Hello World");
  output.innerHTML = '<a href="#">Hello World</a>';
}

btn1.addEventListener("click", greetWorld);

const btn2 = document.getElementById("btn-2");
btn2.addEventListener("click", greetByName);

function greetByName() {
    let fName = document.getElementById("firstName").value;
    let lName = document.getElementById("lastName").value;
    output.textContent = `Hey, ${fName} ${lName}`;
}

const fruitMenu = document.getElementById("fruit-menu");
fruitMenu.addEventListener("change", pickFruit);

function pickFruit() {
    let fruit = fruitMenu.value.toUpperCase();
    let indx = 4;
    let optn = fruitMenu.options[4];
    let food = optn.dataset.food;
    output.textContent = `Your chosen fruit is: ${fruit}! Do you like ${food}?`
}

const btn3 = document.getElementById("btn-3");
btn3.addEventListener("click", addNumbers);

function addNumbers() {
    let num1 = document.getElementById("num1-box").value;
    let num2 = document.getElementById("num2-box").value;
    // num1 = Number(num1);
    // num2 = Number(num2);
    let sum = Number(num1) + Number(num2);
    output.textContent = sum;
}

const btn4 = document.getElementById("btn-4");
btn4.addEventListener("click", multiplyNums);

function multiplyNums() {
    let num1 = document.getElementById("num1-box").value;
    let num2 = document.getElementById("num2-box").value;
    let product = num1 * num2;
    output.textContent = product;
}
