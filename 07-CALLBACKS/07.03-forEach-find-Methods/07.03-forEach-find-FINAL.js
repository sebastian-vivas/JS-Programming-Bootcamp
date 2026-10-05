// array.forEach(function(item))
// The forEach() method is called on an array.
// It runs a function on each item in an array, one by one.
// The current item is passed in as the argument of the function.
// The forEach method may be used instead of a for loop to perform an operation on each item of an array.

// Refactor the above using forEach. The method is called on the array and takes the current array item as its argument:

fruits.forEach(function (item) {
  console.log(item + " jellybean");
});

// setTImeout w arrow func to output each fruit all at once after 10 sec delay:
setTimeout(() => {
  fruits.forEach((froot) => {
    console.log(froot + " roll-up");
  });
}, 10000);

// each fruit one at a time on a delay -- no forEach
var myInterval;
var i = 0;
myInterval = setInterval(() => {
  console.log(fruits[i] + " smoothie");
  i++;
  if (i == fruits.length) {
    clearInterval(myInterval);
  }
}, 1000);

const movies = [
  { name: "The Wizard of Oz", year: 1939, mins: 101 },
  { name: "Casablanca", year: 1942, mins: 102 },
  { name: "Roman Holiday", year: 1953, mins: 118 },
  { name: "Lawrence of Arabia", year: 1962, mins: 227 },
  { name: "Lilies of the Field", year: 1963, mins: 94 },
  { name: "The Godfather, Part II", year: 1974, mins: 202 },
  { name: "The Shining", year: 1980, mins: 144 },
  { name: "Beverly Hills Cop", year: 1984, mins: 105 },
  { name: "Ghost", year: 1990, mins: 127 },
  { name: "Forrest Gump", year: 1994, mins: 142 },
  { name: "Ali", year: 2001, mins: 157 },
  { name: "Due Date", year: 2010, mins: 95 },
  { name: "Black Panther", year: 2018, mins: 134 },
  { name: "Avengers: Endgame", year: 2019, mins: 181 },
];

// can also be done using array.forEach(function())
movies.forEach((movie) => {
  let mins = movie.mins;

  // get hours by dividing mins by 60 and rounding down (floor)
  let hr = Math.floor(mins / 60);

  // use modulo (%) to get the remainder of mins divided by 60
  let m = mins % 60;

  // add leading zero if mins is less than 10
  if (m < 10) {
    m = "0" + m;
  }

  // add the new hrMin property to the current object
  movie.hrMin = `${hr}:${m}`;
});

console.log(movies);
