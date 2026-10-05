// Lesson 05.05
// Passing Arrays to Functions

// 1. Declare two arrays of strings:

const fruits = [
  "apple",
  "apricot",
  "banana",
  "blueberry",
  "blueberry",
  "cherry",
  "elderberry",
  "grape",
  "kiwi",
  "lemon",
  "lime",
  "mango",
  "orange",
  "papaya",
  "peach",
  "pear",
  "pineapple",
  "plum",
  "raspberry",
  "strawberry",
  "tangerine",
  "watermelon",
];

const cars = [
  "Acura",
  "Alfa Romeo",
  "Audi",
  "BMW",
  "Chevrolet",
  "Dodge",
  "Edsel",
  "Eagle",
  "Fiat",
  "Ford",
  "Honda",
  "Kia",
  "Infiniti",
  "Isuzu",
  "Mazda",
  "Nissan",
  "Opel",
  "Porsche",
  "Rolls Royce",
  "Tesla",
  "Toyota",
  "Volvo",
];

// 2. Declare the function and assign it a parameter, **arr**:

// 3. The function needs a few variables:
/*
    - an empty array to hold the results
    - a variable set equal to the article followed by a space
    - a variable for checking if a word starts with a, e, i, o
    */
let newArr;

// 4. The function needs to check each item in the array, so set up a loop that iterates the array:

// 5. Each time through the loop, save the current item, as well as the first letter of that item:
let word; // a

// 6. Add an if-statement that uses the string.includes() method to check if the first character, set to lowercase, is "a", "e", "i" or "u". If it is, set the value of article to "an":
/*
      if(vowels.includes(firstChar)) {
        article = 'an ';
      } else {
        article = 'a ';
      }
      */
// 7. Just for practice, comment out the if-else and switch to a ternary expression:

// 8. Concatenate article with the original word the original word, arr[i], which may be capitalized. Push it into newArr, and return it:

// 9. Call the function twice, passing in a different array of strings each time. Save the return values to variables and log them:

let fruitsArr;
console.log(fruitsArr);

let carsArr;
console.log(carsArr);

// function #2: find target number in array

// This next function has not just an array parameter, but also a number param. The function loops through the array, looking for the number.
/*
- If the number is found, the function returns the index. 
- If the number is NOT found, the function returns -1. 
*/

// 10. Declare an array of numbers, followed by a function:

const numsArr = [5, 7, 9, 12, 14, 16, 20, 25, 30, 40, 50];

// 11. Write the function with two parameters.

// 12. Iterate the array with a for loop:

// 13. Check if the current array item equals the target number, and if it does, return the index:

// 14. If the loop ends without finding the target number, return -1:

// 15. Call the function. The function returns a value, so set the call equal to a variable to "capture" the return value:

let find9;
console.log(find9); // 3

let find8;
console.log(find8); // -1

// 16. Instead of just returning the index, let's return a string, specifying the number being looked for and where it was found. Do this as a new function:

let find25;
console.log(find25); // 25 found at index 7

let find250;
console.log(find250); // 250 not found

// function #3: check array to see if all numbers are even
/*
Let's try one more function that takes an array for its argument. The function checks each number to see if it is odd or even. 
- If all numbers are even, the function returns true. 
- If an odd number or float are found, the function returns false.
*/

// 17. Declare three arrays of numbers:
let nums1 = [2, 4, 6, 8, 10];

// 18. Write a function that expects an array to be passed to it:

// 19. Have the function iterate over the array:

// 20. Each time through the loop, run an if statement that uses the modulo operator (%) to divide the current number by 2. If the reminder is not equal to (!=) 0, the number is *not* even, so return false:

// 21. If the loop ends without finding a non-even number, all numbers in the array must be even, so return true:

// 22. Call the function three times, once for each array; save the return value to a variable and log it:

let allEven1;
console.log("allEven1", allEven1); // true

// END Lesson 05.05
// NEXT: Lab 05.05
// Lesson 05.06
