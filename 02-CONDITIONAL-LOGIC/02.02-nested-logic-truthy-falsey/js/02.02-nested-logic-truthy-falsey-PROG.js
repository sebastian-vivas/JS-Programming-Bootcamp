// Lesson 02.02

// nested if-else logic

// In the previous lesson we saw if-else logic involving choosing between going to the beach, park or musuem. The determining condition was the weather: sunny, rainy or cloudy.

// 1. Set up the basic, "non-nested" if-else logic, and add a new variable, windy, that we can use for "nested logic":
let weather = "cloudy";
let windy = true;

// if (weather == "rainy") {
//     console.log('Go to the museum!');
// } else if (weather == "sunny") {
//     console.log('Go to the beach!');
// } else {
//     console.log('Go to the park!');
// }

// 2. Wind conditions do not apply if we are at the museum. So, move on to the "else if", and add this nested logic that specifies what to do at the beach::
// if (weather == "rainy") {
//   console.log('Go to the museum!');
// } else if (weather == "sunny") {
//   console.log('Go to the beach!');
//   if (windy == true) {
//       console.log('Go windsurfing!');
//   } else {
//       console.log('Play frisbee!');
//   }
// } else {
//   console.log('Go to the park!');
// }
// 3. Moving on to the last part, specify what to do at the park:

weather = "rainy";
windy = false;

if (weather == "rainy") {
  console.log("Go to the museum!");
} else if (weather == "sunny") {
  console.log("Go to the beach!");
  if (windy == true) {
    console.log("Go windsurfing!");
  } else {
    console.log("Play frisbee!");
  }
} else {
  console.log("Go to the park!");
  if (windy) {
    console.log("Fly a kite!");
  } else {
    console.log("Have a picnic!");
  }
}

// 4. Change weather and windy to get different output.

// truthy and falsey values
/*
Truthy and falsey values are not literally true or false, but they return true or false in a boolean context, i.e. in an "if-statement". Here are the falsey values:

**falsey values**

    - NaN
    - undefined
    - null
    - 0
    - "", ''

All other values, including all strings and non-zero numbers, both positive and negative, are truthy.

A falsey resolves to false in an if-statement:
*/

// 5. Do a test to confirm that `NaN` is falsey:

let baNaNa = Number("banana");
console.log("baNaNa", baNaNa, typeof baNaNa);
// baNaNa NaN number

if (baNaNa) {
  console.log("NaN is truthy");
} else {
  console.log("NaN is falsey"); // runs
}
// baNaNa NaN number

// 6. Do a test to confirm that `undefined` is falsey:

let player1;
console.log("player1", player1, typeof player1);
// player1 undefined undefined

if (player1) {
  console.log("undefined is truthy");
} else {
  console.log("undefined is falsey"); // runs
}

// 7. Do a test to confirm that `null` is falsey:

let score = null;
console.log("score", score, typeof score);
// score null object

if (score) {
  console.log("null is truthy");
} else {
  console.log("null is falsey"); // runs
}

// 8. Do a test to confirm that `0` is falsey:

let x = 0;
console.log("x", x, typeof x);
// x 0 number

if (x) {
  console.log("0 is truthy");
} else {
  console.log("0 is falsey"); // runs
}
// x 0 number

// 9. Do a test to confirm that empty strings are falsey:

let zip = "";
console.log("zip", zip, typeof zip);
// zip  string

if (zip) {
  console.log("empty strings are truthy");
} else {
  console.log("empty strings are is falsey"); // runs
}
// zip  string

// End Lesson 02.02

// Go on to Labe 02.02
