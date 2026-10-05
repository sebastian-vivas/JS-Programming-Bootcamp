// Lesson 05.06
// Classic Programming Job Interview Challenges:
// A. Fizz-Buzz
// B. Find nth Fibonacci Number
// C. Check for duplicates in array

// A. Fizz-Buzz

// Output to the console all integers from 1-100 along with "Fizz" and/or "Buzz" according to the following rules:
/*
- If the number is evenly divisible by both 3 and 5, output the number followed by ' Fizz-Buzz'.
- If the number is evenly divisible by 3 (but not 5), output the number followed by ' Fizz'.
- If the number is evenly divisible by 5 (but not 3), output the number followed by ' Buzz'.
- If the number is divisible by neither 3 nor 5, output just the number.

Before tackling "Fizz-Buzz", let's try an example of modulo (%), which returns the remainder of the first number divided by the second number:
*/
let remainder = 17 % 5;
console.log("remainder", remainder); // 2

// And now for "Fizz-Buzz"...

// 1. Set up a for loop that goes from 1-100:

for (var i = 1; i <= 100; i++) {}

// 2. Use the **&&** (AND) operator to see if the current number returns a remainder of 0 when divided by 3 and 5:

for (let i = 1; i <= 100; i++) {
  if (i % 3 == 0 && i % 5 == 0) {
    console.log(i + " Fizz BUzz");
    // 3. If the number is not divisible by both 3 and 5, check if it's divisible by 3 only. If it is, log the number followed by 'Fizz':
  } else if (i % 3 == 0) {
    console.log(i + " Fizz");
    // 4. Add another *else if* to see if the number is divisible by just 5. If it is, log the number followed by 'Buzz':
  } else if (i % 5 == 0) {
    console.log(i + " Buzz");
    // 5. Finally, if the number is divisible by neither 3 nor 5, log just the number:
  } else {
    console.log(i);
  }
}

// B. find nth Fibonacci number**

// given array [0, 1], find the nth Fibonacci number
/* 
Another popular coding challenge is to produce a Fibonacci sequence.

"Find the 20th number in the Fibonacci sequence."

It is generally required that programming challenges be implemented as a function.

6. Start by declaring an array with the two starter values, and a number variable for the target. These givens may or may not be provided in code form, as variables:
*/
const fibosArr = [0, 1];
let n = 20;

// 14. Make a new starter array with a few more "fibos" in it:
const fiveFibos = [0, 1, 1, 2, 3];

// 7. Set up the function that expects an array and a number.
function makeFibos(fibos, n) {
  // 13. Above the loop, save the target **n** minus the length of the array argument to a variable, **loopTimes**. This lets the starter array can have more than two items:
  let loopTimes = n - fibos.length;

  // 8. Set up a loop that runs n-2 times. Again, the reason we use n-2 instead of n is because the starter array [0,1] gives us a two-item headstart:
  for (let i = 0; i < n - 2; i++) {
    // 9. Add the last two numbers together and push the sum into the array:
    let nextFibo = fibos[i] + fibos[i + 1];
    fibos.push(nextFibo);
  }
  // 10. Return the answer. Console log the full array inside the function as a test and return the last item, which is the 20th item, as stipulated by the challenge:
  console.log(fibos);
  return fibos[fibos.length - 1];
}

// 11. Call the function, saving the call to a variable which will capture the return value:

let fibo20th = makeFibos(fibosArr, n);

// 12. Log the return value, which is the 20th fibo:
console.log(fibo20th);

// 15. Call the function, passing in the five-item starter array, saving the return value to a new variable:
let twentiethFibo = makeFibos(fiveFibos, n);
console.log(twentiethFibo);

// C. Find duplicate items in an array

// "Given an array of numbers or strings, find all duplicate items and return them as a new array. If there are no duplicates, return 'none'"

// 16. Assuming nums1 is given, declare three more arrays, to give us more testing scenarios:

const nums1 = [2, 4, 5, 7, 8, 9, 4, 11, 6, 8, 7, 9, 11, 6, 7];
const nums2 = [2, 4, 5, 7, 1, 9, 11, 3, 6, 8, 10];
const fruits1 = [
  "apple",
  "banana",
  "apple",
  "cherry",
  "kiwi",
  "banana",
  "mango",
  "pear",
  "peach",
  "kiwi",
  "grape",
];
const fruits2 = ["apple", "banana", "cherry", "mango"];

// 17. Define a function that takes an array as its argument:

function findDuplicates(arr) {
  // 19. Define an object above the loop. Inside the loop, check if the current array item is not (!) already a key; if it is not, make a key for that item:
  let obj = {};
  let dups = [];

  // 18. Iterate the array:
  for (let i = 0; i < arr.length; i++) {
    // 21. Above the if-else, save arr[i] to a variable:
    let item = arr[i];

    if (!obj[item]) {
      obj[item] = item;

      // 20. But if the current array item, **arr[i]** is already a key, we have a duplicate item, so push it into the array of duplicates. Also, declare a new empty array, dups, above the loop for storing the duplicates.

      // 24. We are getting duplicates of duplicates, such as: ['apple', 'kiwi', 'banana', 'kiwi']). Let's add logic so that the duplicate gets pushed into the array only if it is *not* already there:
    } else {
      if (!dups.includes(item)) {
        dups.push(item);
      }
    }
  }

  // 22. After the loop ends, check if the **dups** array has any items it it. If it doesn't, return the array. Else, return "none":
  if (dups.length > 0) {
    return dups;
  } else {
    return "none";
  }
}

// 19. Call the function four times, once for each array. Save the function call to a variable so that we "capture" the return value. Log the results:

let n1 = findDuplicates(nums1);
console.log("duplicates:", n1);

let n2 = findDuplicates(nums2);
console.log("duplicates:", n2);

let f1 = findDuplicates(fruits1);
console.log("duplicates:", f1);

let f2 = findDuplicates(fruits2);
console.log("duplicates:", f2);

// END: Lesson 05.06
// NEXT: Lab 05.06
// Lesson 06.01
