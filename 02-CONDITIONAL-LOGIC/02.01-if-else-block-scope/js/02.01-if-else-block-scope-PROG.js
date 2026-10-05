// Lesson 02.01 - START
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

// A boolean is already true or false, so we don't need to explicitly compare it true or false.

// 5. Do two versions of an if-statement with a boolean, with and without parentheses:

let raining;

// if else

// 6. Make raining *false* and add an *else*:

raining;

// Strings can also be evaluated with if-else logic.

// 7. Check if the weather is "sunny":

let weather;

// With "number-like strings", the digits are evaluated like individual letters. "50" is greater than "100", because 5 is greater than 1.

// 8. Compare two "number-like strings":

let full;

// 9. Convert the "number-like strings" to actual numbers and try again:

full;
half = Number("50");

// if-else if-else logic

// else if adds another condition to evaluate if `if` returns false:

// 10. Try this `else if`:

let highScore;

// 11. Try different values of `myScore` to get all three outcomes.

// 12. Check the weather with `else if` logic:

weather;

// 13. Try different values of `weather` to get all three outcomes.

// There can be any number of **else if** blocks between the opening **if** and the closing **else**.

// 14. Run this code with its three `else if` clauses. The best approach is to go higher to lower by ranges (90-100, 80-89, 70-79, 65-69, 0-64):

let score;

// block scope

// 15. Write an "if-statement" with a `let` variable declared inside its curly braces. Declare the variable inside and outside the code block:

let meal;
// ERROR: special is not defined

// 16. Run the same test, but with var:

// Burritos

// End Lesson 02.01

// Next: Lab 02.01
// Lesson 02.02
