// Lesson 05.01 - FINAL

// for loops

// 1. Write a for loop with a counter, `i`, that starts at 0, goes up by one each time, and stops when `i` gets to 10:


// 2. Try to access `i` outside the loop. We get an error: "i is not defined":

// 3. Do another loop with `var` instead of `let` for a counter, and then verify that `i` still exists after the loop is done:

// 4. Change the condition to `i <= 10` to get the 10 inside the loop and 11 outside the loop.

// 5. Write a loop with a counter that decrements (counts backwards):


// 6. Change `var` to `let` and see that `i` ceases to exist once the loop ends:

// console.log(i) // ERROR: i is not defined

// infinite loop

// 7. Write but do not run this infinite loop, as doing so may freeze your browser. Just study it before commenting it out.

// infinite loop -- do not attempt
/*
for (let i = 10; i > 0; i++) {
    console.log(i);
}
*/

// 8. Run a loop where the counter starts at 0, goes up by 5 each time until it reaches 100 (inclusive):

// iterating (looping) arrays

// 10. Declare an array of fruits. (We'll do this one for you, though feel free to change it.)

const fruits = [
  "apple",
  "blueberry",
  "cherry",
  "kiwi",
  "lime",
  "orange",
  "plum",
];

// 11. Add a few more items to the end of the array:

// 12. Add a few items to the beginning of the array:

// 13. Output the array and its length:

// 14. Iterate the array of 13 items with a for loop. Each time through the loop, make a fruit jellybean.

// 17. Push in a few more fruits, and then sort the array:

console.log(fruits);
// ['apple', 'apricot', 'banana', 'blueberry', 'cherry', 'grape', 'grapefruit', 'kiwi', 'lemon', 'lime', 'mango', 'orange', 'papaya', 'peach', 'pear', 'pineapple', 'plum', 'tangerine', 'watermelon']

// 18. Run the loop again:


// The last three fruits ('plum', 'tangerine', 'watermelon') are not showing up. The problem is, the loop stops when `i=13`, but we now have 16 items.

// array.length as loop condition

// 19. Make a new loop with the dynamic condition `i < fruits.length`:

// string.length

// 20. Make jellybeans only if the fruit has no more than 5 letters. Btw, we don't really need the bean variable, so just log the string directly.

// adding to an array inside a loop

// 21. Do another loop that saves the jellybeans by pushing them into a new array, `jellybeans`, declared above the loop:

const jellybeans = [];

console.log("jellybeans", jellybeans);
// ['apple jellybean', 'grape jellybean', 'kiwi jellybean', 'lemon jellybean, 'lime jellybean', 'mango jellybean', 'peach jellybean', 'pear jellybean', 'plum jellybean']

// Let's try some if-else if-else logic in a loop:
/*
- `if` the fruit has a max of 5 letters, it goes into the `lilFruits` array.
- `else if` the fruit has 6-8 letters, it goes into the `medFruits` array.
- `else`, the fruit of 9 or more letters it goes into the `bigFruits` array
*/

// 22. Declare the three arrays, all empty:

// 23. Run the loop with the conditional logic inside. Each part pushes qualifying fruits into its respective array:

// console.log("lilFruits", lilFruits);
// ['apple', 'grape', 'kiwi', 'lemon', 'lime', 'mango', 'peach', 'pear', 'plum']

// console.log("medFruits", medFruits);
// ['apricot', 'banana', 'cherry', 'orange', 'papaya']

// console.log("bigFruits", bigFruits);
// ['blueberry', 'grapefruit', ' 'pineapple', 'tangerine', 'watermelon']
