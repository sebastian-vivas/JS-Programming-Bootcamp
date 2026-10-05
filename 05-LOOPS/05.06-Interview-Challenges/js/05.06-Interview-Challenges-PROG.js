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
let remainder;
console.log("remainder", remainder); // 2

// And now for "Fizz-Buzz"...

// 1. Set up a for loop that goes from 1-100:
for (let i = 1; i <= 100; i++) {
  // If the number is evenly divisible by BOTH 3 and 5, output the number followed by ' Fizz-Buzz'.
  if (i % 3 === 0 && i % 5 === 0) {
    console.log(i + " Fizz-Buzz");
    // If the number is evenly divisible by 3 (but not 5), output the number followed by ' Fizz'.
  } else if (i % 3 === 0) {
    console.log(i + " Fizz");
    // If the number is evenly divisible by 5 (but not 3), output the number followed by ' Buzz'.
  } else if (i % 5 === 0) {
    console.log(i + " Buzz");
    // If the number is divisible by neither 3 nor 5, output just the number.
  } else {
    console.log(i);
  }
}
// 2. Use the **&&** (AND) operator to see if the current number returns a remainder of 0 when divided by 3 and 5:

// 3. If the number is not divisible by both 3 and 5, check if it's divisible by 3 only. If it is, log the number followed by 'Fizz':

// 4. Add another *else if* to see if the number is divisible by just 5. If it is, log the number followed by 'Buzz':

// 5. Finally, if the number is divisible by neither 3 nor 5, log just the number:

// B. find nth Fibonacci number**

// given array [0, 1], find the nth Fibonacci number
/* 
Another popular coding challenge is to produce a Fibonacci sequence.

"Find the 20th number in the Fibonacci sequence."

It is generally required that programming challenges be implemented as a function.

6. Start by declaring an array with the two starter values, and a number variable for the target. These givens may or may not be provided in code form, as variables:
*/
const fibos = [0, 1]; // start w array of first 2 fibos
let n = 20; // find the 20th fibo

function makeFibos(fibos, finalLen) {
  let fibosLen = fibos.length;
  let iterations = finalLen - fibosLen;
  for (let i = 0; i < iterations; i++) {
    let nextFibo = fibos[i] + fibos[i + 1];
    fibos.push(nextFibo);
  }
  return fibos[fibos.length - 1]; // return last item in fibos
}

let fibo20th = makeFibos(fibos, n);
console.log("fibo20th:", fibo20th);

// 14. Make a new starter array with a few more "fibos" in it:
// const fiveFibos = [0, 1, 1, 2, 3];

// 7. Set up the function that expects an array and a number.

// 13. Above the loop, save the target **n** minus the length of the array argument to a variable, **loopTimes**. This lets the starter array can have more than two items:
// let loopTimes;

// 8. Set up a loop that runs n-2 times. Again, the reason we use n-2 instead of n is because the starter array [0,1] gives us a two-item headstart:

// 9. Add the last two numbers together and push the sum into the array:
// let nextFibo;

// 10. Return the answer. Console log the full array inside the function as a test and return the last item, which is the 20th item, as stipulated by the challenge:

// 11. Call the function, saving the call to a variable which will capture the return value:

// let fibo20th;

// 12. Log the return value, which is the 20th fibo:
// console.log(fibo20th);

// 15. Call the function, passing in the five-item starter array, saving the return value to a new variable:
let twentiethFibo;
console.log(twentiethFibo);

// C. Find duplicate items in an array

// "Given an array of numbers or strings, find all duplicate items and return them as a new array. If there are no duplicates, return 'none'"

// 16. Assuming nums1 is given, declare three more arrays, to give us more testing scenarios:

const nums1 = [
  2, 4, 9, 5, 14, 7, 3, 8, 9, 8, 4, 17, 11, 6, 9, 8, 20, 7, 4, 9, 13, 11, 6, 7,
  4,
];
// dups = [7, 6, 11, 9, 4, 7, 8, 4, 8, 9]
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
  "kiwi",
];
const fruits2 = ["apple", "banana", "cherry", "mango"];
const symbols = ["$", "#", "$", "&", "@", "%", "^", "@", "!", "%", "?"];

// 17. Define a function that takes an array as its argument:
function findDups(arr) {
  const dups = [];
  while (arr.length > 1) {
    let popped = arr.pop(); // remove 1st item from arr
    console.log(popped);
    console.log(arr);
    // see if what's left in arr includes shifted
    if (arr.includes(popped)) {
      // if the removed item is still in arr
      if (!dups.includes(popped)) {
        dups.push(popped);
      }
    }
  }
  dups.sort((a, b) => a - b); // sort in asc order
  return dups.length > 0 ? dups : "none";
}

// const nums1 = [4, 5, 7, 8, 9, 4, 6, 6, 8, 7, 9, 6, 7];
console.log("nums1 non-unique values:", findDups(nums1)); // [4,6,7,8,9,11]
console.log("nums2 dups:", findDups(nums2)); // none
console.log("fruits1 dups:", findDups(fruits1)); // ['apple', 'banana', 'kiwi']
console.log("fruits2 dups:", findDups(fruits2)); // none
console.log("symbols dups:", findDups(symbols)); // ['$', '@', '%']

// 19. Define an object above the loop. Inside the loop, check if the current array item is not (!) already a key; if it is not, make a key for that item:
// let obj;
// let dups;

// 18. Iterate the array:

// 21. Above the if-else, save arr[i] to a variable:
// let item;

// 20. But if the current array item, **arr[i]** is already a key, we have a duplicate item, so push it into the array of duplicates. Also, declare a new empty array, dups, above the loop for storing the duplicates.

// 24. We are getting duplicates of duplicates, such as: ['apple', 'kiwi', 'banana', 'kiwi']). Let's add logic so that the duplicate gets pushed into the array only if it is *not* already there:

// 22. After the loop ends, check if the dups array has any items it it. If it doesn't, return the array. Else, return "none":

// 23. Call the function four times, once for each array. Save the function call to a variable so that we "capture" the return value. Log the results:

// let n1;
// console.log('duplicates:', n1);

// let n2;
// console.log('duplicates:', n2);

// let f1;
// console.log('duplicates:', f1);

// let f2;
// console.log('duplicates:', f2);

// given a string, write function to see if inputted string is a
// anagram or a palindrome or neither
// anagram: team mate
// palindrome: racecar racecar

function stringalize(a, b = "") {
  // check if words are identical
  if (a == b) {
    return `${a} and ${b} are identical`;
  }
  // make arrays of both strings
  let aArr = a.split(""); // ['t', 'e', 'a', 'm']
  let bArr = b.split(""); // ['m', 'a', 't', 'e']

  // palindrome check
  if (b == "") {
    // if only one word is passed in, check for palindrome
    aArrRev = aArr.reverse(); // ['k', 'a', 'y', 'a', 'k']
    aArrRevStr = aArrRev.join(""); // the original word, backwards
    if (a == aArrRevStr) {
      // does orig word equal itself backwards
      return `${a} is a palindrome!`;
    } else {
      return `${a} is not a palindrome`;
    }
  }
  // anagram check
  // are words anagrams, meaning they have identical char sets
  // break both string args into arrays
  let aArrSorted = aArr.sort(); // ['a', 'e', 'm', 't']
  let bArrSorted = bArr.sort(); // ['a', 'e', 'm', 't']
  let aStrSorted = aArrSorted.join(""); // 'aemt'
  let bStrSorted = bArrSorted.join(""); // 'aemt'
  if (aStrSorted == bStrSorted) {
    return `${a} and ${b} are anagrams`;
  } else {
    return `${a} and ${b} are not anagrams`;
  }
  // ternary:
  // return aStrSorted == bStrSorted ? "anagrams" : "not anagrams";
}

console.log(stringalize("cat", "cat")); // strings are identical
console.log(stringalize("cat", "dog")); // not anagrams
console.log(stringalize("team", "mate")); // ARE anagrams // 'aemt'
console.log(stringalize("racecar")); // is palindrome
console.log(stringalize("bunny")); // is NOT palindrome
console.log(stringalize("kayak")); // is palindrome
console.log(stringalize("dusty", "study")); // ARE anagrams // 'dstuy'
console.log(stringalize("radar")); // is palindrome
console.log(stringalize("night", "thing")); // ARE anagrams // 'ghint'

// END: Lesson 05.06
// NEXT: Lab 05.06
// Lesson 06.01
