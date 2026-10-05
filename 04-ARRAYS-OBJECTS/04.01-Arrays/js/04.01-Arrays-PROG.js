//
//
const students = ["andi", "joshua", "carrel", "irina", "rob"];
const luckyNumbers = [3, 5, 7, -5];
const booleans = [true, false, false, false, true];
const mixed = ["andi", 5, [5, "colin"]]; // <--- baaad idea
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// Lesson 04.01 Arrays - FINAL

// Arrays
/*
Arrays are variables that can hold more than one value at a time. Arrays have a datatype of **object**. Here are some key things to know about arrays:

- array items exist as a list, surrounded by square brackets: 
`[item1, item2, item3]`
- each item is assigned a position number, or **index**, with the first item at index 0
- array items can be of any data type
- items of different data types can be in the same array:
`[ 'hola', 38, true, ['apple, 'banana'] ]`
*/

// 1. As a recap, declare a constant with `const`, and try to change it. Cannot be done:
const instructor = "colin";
// instructor = "dread pirate roberts";

// LITERS_PER_GALLON = 4; // ERROR: Assigment to constant variable

// const NY_CAP = "Albany";

// const for objects

// Arrays declared with `const` cannot be *mutated (changed) to a different datatype. So, with `const`, once an array, always an array.

// 2. Declare an array called `fruitsArr`, with three items:

const fruits = ["banana", "apple", "peach"];
console.log(fruits);
console.log("fruits at this point has this length: ", fruits.length);

// 3. Check the Console. Expand the arrow to see the numbered items, with 'apple' at index 0.

// index

// Array items are stored in a numeric order, called `index`.
// The first item in an array is at index 0

// 4. Get the first item at index 0 and the last item at index 2:
// Get the last of the three items, which is at index 2:
//
console.log(fruits[0]);
const lastFruit = fruits[2];
console.log("last fruit?", lastFruit);

// 5. Replace the first item, 'apple', with 'peach':

fruits[0] = "coconut";
console.log(fruits);

// One way to add an item at the end of the array is to assign a value after the last item:

// 6.  Add 'mango' to the end of the array, at index 3:

console.log(fruits[3]); // nothing yet!
fruits[3] = "mango";
console.log(fruits); // now has mango at the end!

console.log("fruits at this point has this length: ", fruits.length);

// ['peach', 'banana', 'cherry', 'mango']

// mutating an array (changing its datatype

// One downside of `let` for arrays is that it does not protect the data type. You could inadvertently change the array to a string or any other datatype. Use `const` to prevent such an accident from occurring.

// 7. Change *fruitsArr* to a string. Just like that, no more array:
//
// fruits = 4;

console.log(fruits[3]);

// 8. Declare another fruits array, this time with `const`. We need a new name, as `const` cannot redeclare an existing variable:

// 9. Try to mutate this `const` array into a string. You get an error:

// fruits = "ripe";
// console.log('fruits:', fruits);
// ERROR: Assignment to constant variable

// array.length property

// The `length` property of an array returns the number of items in the array.

// 10. Get the length of the array:

console.log(fruits.length);
const howManyFruitsYouGot = fruits.length;
console.log(howManyFruitsYouGot);

/*
- The first item in an array is at: **array[0]**.
- The last item is at: **array[array.length-1]**.
*/

// 11. Use `length-1` to access the last item in the array:
//
//
fruits[4] = "tomato";

const updatedLastFruit = fruits[fruits.length - 1];
console.log("dynamically updated last fruit!", updatedLastFruit);

// random array items

// To get a random item from an array, generate a random integer within the range of the array length, and pass that number to the array square brackets:

// 12. Get a random fruit from the *fruits* array.
//
console.log(fruits[Math.floor(Math.random() * fruits.length)]);
// or, if you want to break it down step by step:
// const randomNumber = Math.random() * fruits.length;
// const randomNumberRoundedDown = Math.floor(randomNumber);
// console.log(fruits[randomNumberRoundedDown]);

// 13. Run it a few times to see that the fruit keeps changing.

// array methods

// The array object has numerous methods, some of which we will learn about now:

// array.push(item)
fruits.push("apricot");
fruits.push("pear");
console.log(fruits);

// We used `fruits[3]` to add to the end of the array. But what if the length of the array is unknown? Better is to use the `push()` method, which adds an item to the end without needing to know how many items are in the array.

// 14. Using the **push()** method, add 'lime' to the end of the array.

// ['apricot', 'pear', 'kiwi', 'grape', 'lime'];

// ['apricot', 'pear', 'kiwi', 'grape', 'lime']

// declaring a new empty array

// 15. Use the **sort()** method to put the string items of an array in alphabetical order:

// ['apricot', 'grape', 'kiwi', 'lime', 'pear']
//
fruits.sort();
console.log("I sorted fruits and they are in order now: ", fruits);

// array.pop()
fruits.pop();
console.log(fruits);

// The **pop()** method removes the last item from the array and returns it, so the item can be saved by setting `pop()` equal to a variable.

// 16. Using the **pop()** method, remove the last item and save it to a variable, `popped`:
//
const popped = fruits.pop();
console.log(fruits);
console.log(popped);

// ['apricot', 'grape', 'kiwi', 'lime']

// An array can be declared with just a pair of empty square braces--no items.

// 17. Declare a new, empty array as a pair of square brackets:
//
const veggies = [];
console.log("you should eat some veggies because this array is empty", veggies);
// 18. Use the push() method to populate the array:
//
veggies.push("carrot");
veggies.push("celery");
console.log(veggies);

// ['carrot', 'celery']

// array of nums
// An array can have arrays for its items. The terms to describe such an array include: **matrix, 2D array** and **nested array**

// 19. Make a 3x3 matrix of three items, each an array of three items.
//
const classroom = [["Joshua", "Irina"], ["Rob", "Andi"], ["Carrel"]];

const row1 = classroom[0];
console.log(row1);
const row2 = classroom[1];
console.log(row2);
const row3 = classroom[2];
console.log(row3);

const firstPerson = row1[0];
console.log(firstPerson);

console.log(classroom[0][0]);
console.log(classroom[1][0]);
classroom[1].push("backpack");
console.log(classroom);

// Get the following:
// 20. Use double square brackets: the first to get the inner array, the second to get the inner array item:

// 21. Represent a tic-tac-toe board, where all 9 squares start out with a value of null:

// tttUL null object

// empID undefined undefined

// discountPrice NaN number

// 22. Then the game starts; "X" chooses the middle square, and "O" chooses the lower left square:

// 23. Log the result: it's a tic-tac-toe game in progress:

/*
(3) [Array(3), Array(3), Array(3)]
0: (3) [null, null, null]
1: (3) [null, 'X', null]
2: (3) ['O', null, null]
*/

// End Lesson 04.01

// Next: 04.01 Lab Exercises

// sorting

students.sort();
console.log(students);
const grades = [90, 85, 98, 93, 100];
grades.sort();
console.log(grades);

function byAscendingNumber(itemA, itemB) {
  return itemA - itemB;
}

grades.sort(byAscendingNumber);
console.log(grades);
