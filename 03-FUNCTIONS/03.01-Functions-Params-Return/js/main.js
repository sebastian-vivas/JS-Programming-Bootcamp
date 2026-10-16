
// function sayHello() {
//     console.log("Hello!");
// }

// sayHello();

// if (x = 1) {
//     var y = 'something';
// }

// console.log(y)

// function welcomePlayer() {
//     var username = "Pikachubaca";
//     let highScore = "6234";
//     console.log(`Welcome back, ${username}! Your high score is ${highScore}`);
// }

// console.log(username);

// welcomePlayer();

// function greetPlayer(username, highScore) {
//     console.log(`Welcome, ${username}! Your high score is ${highScore}`)
// }

// greetPlayer("Brian88", 12345);
// greetPlayer("Bob", 12345);

// function greetPlayerScore(username, highScore = 1000) {
//     console.log(`Welcome, ${username}! Your high score is ${highScore}`)
// }

// greetPlayerScore("X12", 13240);
// greetPlayerScore("yMe");

let num1 = 10;
let num2 = 14;
let sum = 0;

function addNums(num1, num2) {
    sum = num1 + num2;
    console.log("sum", sum);
}

addNums(12, 18);
addNums(123, 184);

function multiplyNums(num1, num2) {
    let product = num1 * num2;
    console.log(product);
    return product;
}

let prod1 = multiplyNums(12, 15);
let prod2 = multiplyNums(24, 21);

console.log(prod1);
console.log(prod2);

function getGreeting(userName, highScore) {
    `Welcome, ${userName}! Your highscore is ${highScore}`;
}

let welcome1 = getGreeting("Viper", 73489);
console.log(welcome1);

// function squareNumber(num) {
//     console.log(num * num);
// }

function squareNum(num) {
    return num * num;
}

let sq = squareNum(5);
console.log(sq)

function cubeIt(num) {
    return num ** 3;
}

let cube = cubeIt(4);
console.log(cube)

function squareOrCubeNum(num) {
    if (num % 2 === 0) {
        return num * num; // square
    } else {
        return num ** 3; // cube
    }
}

function calcMoonWeight(earthWeight) {
    return earthWeight / 6;
}

let moonWeight = calcMoonWeight(180);
console.log(moonWeight)

// console.log(squareOrCubeNum(3));
// console.log(squareOrCubeNum(4));

function calcRestaurantBill(subTotal, tipPct = 15, taxRate = 4) {
    let tip = subTotal * tipPct / 100;
    let tax = subTotal * taxRate / 100;
    let total = subTotal + tax + tip;
    let bill = `
        Sub-total: $${subTotal}
        Tax Rate: ${taxRate}%
        Tip Pct: ${tipPct}%
        Tip: $${tip.toFixed(2)}
        Tax: $${tax.toFixed(2)}
        TOTAL: $${total.toFixed(2)}
        Thank you!`;
    return bill;
}

let bill1 = calcRestaurantBill(80, 20, 6);
console.log(bill1);

let bill2 = calcRestaurantBill(90, 18);
console.log(bill2);

let bill3 = calcRestaurantBill(65);
console.log(bill3)

function convertDistance(units, str) {
    if (str === "ft") {
        return units * 12 / 39.37 + "m";
    } 
    if (str === "m") {
        return 39.37 * units / 12 + "ft";
    }
    // let inches = feet * 12;
    // let meters = inches / 39.37;
    // return meters;
}

console.log(convertDistance(2, "ft"));

function introducePet(pet, name, age, sound) {
    return `${sound}! My name is ${name}! I am a ${age}-year-old ${pet}`
}

let petIntro1 = introducePet("cat", "Fluffy", 3, "Meow");
console.log(petIntro1);

function introduceSelf(name, city) {
    console.log(`Hi! My name is ${name}. I am from ${city}`);
}

introduceSelf("Jill", "Miami");