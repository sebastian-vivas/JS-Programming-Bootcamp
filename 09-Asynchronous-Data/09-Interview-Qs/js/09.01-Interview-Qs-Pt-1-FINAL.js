// Lesson 09.01 - FINAL
// Interview Challenges

// Q1: Explain what a callback function is and provide a simple example

// A callback function is a function that is passed to another function as an argument and is executed after some operation has been completed. Below is an example of a simple callback function that logs to the console after some operations have been completed.

function modifyArray(arr, callback) {
  // do something to arr here
  arr.push(100);
  // then execute the callback function that was passed
  callback();
}

var arr = [1, 2, 3, 4, 5];

modifyArray(arr, function () {
  console.log("array has been modified", arr);
});

/*
Q2: Given a string, reverse each word in the sentence
Junior 
Top 179 JavaScript Interview Questions  JavaScript  179  
Problem
For example Welcome to this Javascript Guide! should be become emocleW ot siht tpircsavaJ !ediuG

Answer
*/
function reverseWords(str) {
  let arry = str.split(" ");
  let reversed = arry.map((e) => {
    return e.split("").reverse().join().replaceAll(",", "");
  });
  let reversedStr = reversed.join().replaceAll(",", " ");
  return reversedStr;
}

let rev1 = reverseWords(str1);
console.log(rev1);

let rev2 = reverseWords(str2);
console.log(rev2);

var string = "Welcome to this Javascript Guide!";

// Output becomes !ediuG tpircsavaJ siht ot emocleW
var reverseEntireSentence = reverseBySeparator(string, "");

// Output becomes emocleW ot siht tpircsavaJ !ediuG
var reverseEachWord = reverseBySeparator(reverseEntireSentence, " ");

function reverseBySeparator(string, separator) {
  return string.split(separator).reverse().join(separator);
}

// Q3: How to check if an object is an array or not? Provide some code.

// Q7: Make this work
function duplicate(arr) {
  let dupArr = [...arr, ...arr];
  return dupArr;
}

let dup = duplicate([1, 2, 3, 4, 5]);
// [1,2,3,4,5,1,2,3,4,5]
console.log(dup);

// Q11: Given two strings, return true if they are anagrams of one another
// For example: Mary is an anagram of Army

let word1 = "players";
let word2 = "parsley";

function checkForAnagram(str1, str2) {
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();
  if (str1.length != str2.length) return false;
  for (let i = 0; i < str1.length; i++) {
    if (!str2.includes(str1[i])) return false;
  }
  return true;
}

let bool1 = checkForAnagram(word1, word2);
console.log("bool1", bool1);

// their solution
var firstWord = "Mary";
var secondWord = "Army";

isAnagram(firstWord, secondWord); // true

function isAnagram(first, second) {
  // For case insensitivity, change both words to lowercase.
  var a = first.toLowerCase();
  var b = second.toLowerCase();

  // Sort the strings, and join the resulting array to a string. Compare the results
  a = a.split("").sort().join("");
  b = b.split("").sort().join("");

  return a === b;
}

// Q12: How would you use a closure to create a private counter?

// You can create a function within an outer function (a closure) that allows you to update a private variable but the variable wouldn't be accessible from outside the function without the use of a helper function.

function counter() {
  var _counter = 0;
  // return an object with several functions that allow you
  // to modify the private _counter variable
  return {
    add: function (increment) {
      _counter += increment;
    },
    retrieve: function () {
      return "The counter is currently at: " + _counter;
    },
  };
}

// error if we try to access the private variable like below
// _counter;

// usage of our counter function
var c = counter();
c.add(5);
c.add(9);

// now we can access the private variable in the following way
c.retrieve(); // => The counter is currently at: 14
