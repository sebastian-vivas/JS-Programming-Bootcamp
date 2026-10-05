// Lesson 04.03 - START
// Array Methods

// Array methods review:

// 1. Declare an array of a few items, and use `push()` to add a couple of items at the end:

// ['kiwi', 'cherry', 'banana', 'orange', 'grape']

// 2. Remove the last item using `pop()`. The method returns the popped item, so save that to a variable:

let poppedItem;
// ['kiwi', 'cherry', 'banana', 'orange']

// 3. Arrange the items in alphabetical order with `sort()`. The method changes the array rather than returning a new one:

// shift() and unshift()
/*
- unshift() adds an item to the beginning of an array.
- shift() removes the first item and returns it. 
*/

// 4. Use unshift() to add an item to the beginning of the fruits array:

// ['apple', 'banana', 'cherry', 'kiwi', 'orange']

// 5. Use **shift()** to remove and return the first item, saving that to a variable:

let shiftedItem;
// ['banana', 'cherry', 'kiwi', 'orange']

// concat()
// concat() concatentates two or more arrays:

// 6. Declare three arrays, and then concat them into one:

// ['mango', 'kiwi', 'banana', 'pineappple', 'orange', 'lemon', 'lime', 'tangerine', 'apple', 'peach', 'cherry', 'plum']

// Sort the fruit cocktail array:

// ['apple', 'banana', 'cherry', 'kiwi', 'lemon', 'lime', 'mango', 'orange', 'peach', 'pineappple', 'plum', 'tangerine']

// slice()

// slice() method is called on an array and takes two arguments: a start and end index.
/*
- `slice()` returns a new array without affecting the original array. 

- `slice()` end index is exclusive, so *not* included in the new array.
*/

// 8. Starting at index 2 and ending at index 5 (exclusive), make a new array called `miniFruitCocktail`, consisting of 3 items.

let fruitSlices;

console.log(fruitSlices);
// ['strawberry', 'orange', 'papaya']

// If you omit the second argument, it slices from the start index (first argument) all the way to the end:

// 9. Starting at index 4, slice all the way to the end:

let slicedFruit;

console.log(slicedFruit);
// ['strawberry', 'orange', 'peach', 'plum', 'tangerine']

// includes()

// The includes() method is called on an array and returns true if its argument is found in the array, and false if it is not:

// 10. Call the `includes()` method to get one true and one false result:

// true

// false

// indexOf()

// The indexOf() method is called on an array and returns the index of the first instance of the argument. If it is not found, it returns -1.

// 11. Declare an array of reptiles and run the indexOf() method a few times:

// 1

// 2

// -1

// To specify a starting index, pass in a second argument. This skips earlier instances of the word:

// 12. Starting at index 2, get the position of the first snake after that:

// 3

// The lastIndexOf() method returns the index of the last occurrence of the argument. If it is not found, it returns -1:

// 4

// -1

// join()
// The join() method is called on an array and returns a string consisting of all the items, separated by commas. It does not change the array:

// 13. Join the reptiles into a long slithering string:

let reptilesStr;

console.log("reptilesStr", reptilesStr);
// iguana,snake,turtle,snake,gekko,snake,lizard

// The join method can take a *delimiter* argument--character(s) that will appear between the items in the resulting string.

// 14. Put an asterisk surrounded by spaces between each fruit in the string:

let reptilesStarStr;

console.log("reptilesStarStr", reptilesStarStr);
// iguana * snake * turtle * snake * gekko * snake * lizard

// reverse()

// The reverse() method reverses the order of the items in an array. It is often combined with sort() to flip the sorted order:

// 15. Sort and then reverse the animals array:

// ['zebra', 'rhinoceros', 'panda', 'ostrich', 'moose', 'leopard', 'giraffe', 'bison', 'baboon', 'aardvark']

// method chaining
// Methods can be called one after another, on the same line. This is known as methods chaining:

// 16. In one line of code, sort and then reverse the `animalsCopy` array:

// END Lesson 04.03
// NEXT Lesson 04.04
