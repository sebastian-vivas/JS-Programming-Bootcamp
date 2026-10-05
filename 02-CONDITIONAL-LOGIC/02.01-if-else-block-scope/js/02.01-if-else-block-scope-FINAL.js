// Lesson 02.01 - FINAL
// conditional logic: if-else

// comparison operators revisited::**
/*
    > greater than      
    < less than
    >= greater than or equal to
    <= less than or equal to
    == equal in value
    != not equal to in value
    === equal in both value and data type
    !== unequal in value and data type
    ! not (opposite)
*/

// 1. Open the console and type these comparisons, hitting enter each time:

8 == 8; // true
8 == "8"; // true
8 === "8"; // false
8 >= "8"; // true

// 2. Make some comparisons using the inequality operators:

7 != 8; // true
7 != 7; // false
7 != "7"; // false
7 !== "7"; // true

// 3. Make some comparisons using the greater than less than equal to operators:

7 >= 8; // false
7 >= "7"; // true
7 <= 8; // true
7 <= "7"; // true

// conditional logic with if else

// 4. Do some comparisons inside if-statements:

if (7 == "7") {
  console.log("close enough");
}

if (7 === "7") {
  console.log("close but no cigar");
}

// A boolean is already true or false, so we don't need to explicitly compare it true or false.

// 5. Do two versions of an if-statement with a boolean, with and without parentheses:

let raining = true;

if (raining == true) {
  console.log("It's raining, so bring an umbrella!"); // runs
}

if (raining) {
  // also works
  console.log("It's raining, so bring an umbrella!"); // runs
}

// if else

// 6. Make raining *false* and add an *else*:

raining = false;

if (raining) {
  console.log("It's raining, so bring an umbrella!");
} else {
  console.log("It's not raining! Let's go to the beach!"); // runs
}

// Strings can also be evaluated with if-else logic.

// 7. Check if the weather is "sunny":

let weather = "sunny";

if (weather == "sunny") {
  // runs
  console.log("It's sunny! Don't forget your sunglasses!");
} else {
  console.log("It isn't sunny! Leave the sunglasses at home!");
}

// With "number-like strings", the digits are evaluated like individual letters. "50" is greater than "100", because 5 is greater than 1.

// 8. Compare two "number-like strings":

let full = "100";
let half = "50";

if (full > half) {
  console.log('"100" > "50"');
} else {
  console.log("because 5 > 1"); // runs
}

// 9. Convert the "number-like strings" to actual numbers and try again:

full = Number("100");
half = Number("50");

if (full > half) {
  console.log("100 > 50"); // runs
} else {
  console.log("50 > 100");
}

// if-else if-else logic

// else if adds another condition to evaluate if `if` returns false:

// 10. Try this `else if`:

let highScore = 15000;
let myScore = 10000;

if (highScore > myScore) {
  console.log("You did not beat the high score!");
} else if (highScore < myScore) {
  console.log("You beat the high score!");
} else {
  console.log("You tied the high score!");
}

// 11. Try different values of `myScore` to get all three outcomes.

// 12. Check the weather with `else if` logic:

weather = "cloudy";

if (weather == "rainy") {
  console.log("Go to the museum!");
} else if (weather == "sunny") {
  console.log("Go to the beach!");
} else {
  console.log("Go to the park!");
}

// 13. Try different values of `weather` to get all three outcomes.

// There can be any number of **else if** blocks between the opening **if** and the closing **else**.

// 14. Run this code with its three `else if` clauses. The best approach is to go higher to lower by ranges (90-100, 80-89, 70-79, 65-69, 0-64):

let score = 77;
let grade = "";

if (score >= 90) {
  grade = "A";
} else if (score >= 80) {
  grade = "B";
} else if (score >= 70) {
  grade = "C";
} else if (score >= 65) {
  grade = "D";
} else {
  grade = "F";
}
let reportCard = `Your score: ${score}. 
Your grade: ${grade}.`;
console.log(reportCard);

// block scope

// 15. Write an "if-statement" with a `let` variable declared inside its curly braces. Declare the variable inside and outside the code block:

let meal = "lunch";

if (meal == "lunch") {
  let special = "Burritos";
  console.log(special); // Burritos
}

console.log(meal); // lunch
console.log(special); // ERROR: special is not defined

// 16. Run the same test, but with var:

if (meal == "lunch") {
  var special = "Burritos";
  console.log(special); // Burritos
}
console.log(special); // Burritos

// End Lesson 02.01

// Next: Lab 02.01
// Lesson 02.02
