// let fruitsArray = ["apple", "banana", "cherry"];

// fruitsArray[0] = "peach";

// fruitsArray[3] = "mango";

// fruitsArray = "fresh";
// console.log(fruitsArray);

// let randomNumber = Math.floor(Math.random() * fruits.length);
// let randomFruit = fruits[randomNumber];

const fruits = ["apricot", "pear", "kiwi", "grape", [1, 2, 3], "string", 7, 0];

fruits.push("lime"); // ["apricot", "pear", "kiwi", "grape", "lime"];
// console.log(fruits);

fruits.sort();

let popped = fruits.pop();
// console.log(popped);
// console.log(fruits);

const veggies = [];
veggies.push("carrot");
veggies.push("celery");
// console.log(veggies);

const nestedArray = [
    [1, 2, 3], // 0
    [4, 5, 6], // 1
    [7, 8, 9], // 2
];

console.log(nestedArray[2]); // [7, 8, 9]
console.log(nestedArray[2][1]); // 8
console.log(nestedArray[1][1]); // 5
console.log(nestedArray[0][2]); // 3

const ticTacToe = [
    [null, null, null], // 0
    [null, null, null], // 1
    [null, null, null], // 2
]

ticTacToe[1][1] = "X";
ticTacToe[2][0] = "O";

console.log(ticTacToe);