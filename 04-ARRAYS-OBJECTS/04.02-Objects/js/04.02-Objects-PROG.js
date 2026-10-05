// Lesson 04.02 - PROG
// Objects

// 1. Open 04.02-Objects.html and preview it in the browser. Switch the file being used from FINAL .js to START .js.

// 2. In the JS file, declare a new object variable, and assign it some properties in between its curly braces:
const car = {
  year: 1998,
  onRoad: true,
  model: "Mustang GT",
  make: "Ford",
  forSale: false,
  buzzwords: ["classic", "cool", "tough"],
  owner: {
    name: "Colin Jaffe",
    age: 43,
    eyeColor: "blue",
  },

  beep: function () {
    return "vroom vroom!";
  },

  printOwner: function () {
    return `This ${this.model} is owned by ${this.owner.name}.`;
  },
};

console.log(car.printOwner());

const carSound = car.beep();
console.log(carSound);

console.log(car.model);
console.log(car.buzzwords[1]);
console.log(car.owner);
console.log(car.owner.age);

// Properties of an object are available only to the object, and are referenced by dot-sytnax: `object.property`.

// 3. Log the whole object, as well as a few properties. In the console, open the arrow to see the properties.

console.log(car);
console.log(car.year);
console.log(car.make);
console.log(car.forSale);

// Properties are added to an existing object by dot syntax: `object.property = value`.
//

// adding a new property
car.color = "red";

// changing an existing property
car.forSale = true;

console.log(car);

// bracket notation

car["color"];

// 2 uses of bracket notation:

// 1. you've got characters in your key name that aren't allowable in variable names

car["miles per hour"] = 60;

console.log(car);

// 2. you have a dynamic key name

const userGivenProperty = "model";

console.log(car[userGivenProperty]);

console.log(`Welcome, ${car.owner.name}`);

// same as car.color

// nested objects: objects as object properties

// Object properties can be other objects, including arrays.

// 4. Add two more properties to the car object, one an array, the other a child object: and then access them using "dot.dot" and square bracket syntax

// add options (an array of options when you buy a car)

car.options = ["sun roof", "cd player", "leather seats"];

car.mpg = {
  city: 25,
  highway: 35,
};

console.log(car);
console.log(car.mpg.highway);

// 5. Access the new properties, using "dot.dot" for the child object and square brackets for array items:

// 6. Update some of the property values of the car object.

car.owner = { name: "Someone else", age: 25 };

// 7. Add three properties having to do with the engine::

// consolidating related properties into child objects

// Since `cyl` (cylinders), `hp` (horsepower) and `mpg` (miles per gallon) all have to do with the engine, we can bundle these into an `engine` property.

// 8. Retool the object by "bundling" `cyl`, `hp` and `mpg` into an `engine` property. This also lets us abbreviate propeterties without obscuring the meaning:

// 9. Log both versions of the duplicate engine properties:

// delete keyword

// 10. Delete `horsepower`, `cylinders` and `liters` and then log `car` to make sure they've been deleted:

// console.log(car);
// car.owner = undefined;
// console.log(car)
// delete car.owner;
// console.log(car);

// keys can have spaces

// While there is generally no upside to having spaces in keys, it is allowed. The key goes in quotes and is accessed with square brackets: `object[key]`.

// 11. Add two properties with spaces in the keys. Log the `car` object to confirm that they got added:

// toLocaleString()

// The `number.toLocaleString()` method is called on a number and returns the number with commas, which converts it to a string.

// 12. Convert a number with no commas to a "number-like string" with commas:

// object methods
// this keyword

// 13. Define a method called `listForSale`. Have it return a "FOR SALE" listing. Refer to various properties using the `this` keyword:

// calling an object's method:

// const carSound = car.beep();
// console.log(carSound);

// 13. Call the method in two ways; directly log it and also save it to a variable, and then log the variable:

// 14. Get the elements for displaying the car data:

// 15. Have the body `onload` event call an anonymous function when the document is fully loaded:

// 17. Open `animals.js` and have a look.
/* 
- It is an object called `animals` with 18 properties, each an individual animal. 
- Each `key` is an animal name, with the two-word keys in quotes.
- Each `value` is an object with four properties:
    - class (string)
    - herbivore (boolean)
    - continent (string)
    - legs (number)
*/

// looking up object property by dynamic key

// 18. Get the elements for displaying the animal data:

// 19. Have the menu call a function on 'change' (menu choice):

// 20. Write the function, starting with saving the menu choice to a variable:

// 21. Look up the animal in the `animals` object, using the variable as the key. For this dynamic property accessor, use square brackets, not dot-syntax:

// 22. Output the animal properties to their respective tags:

// 23. Set the souce of the animal image. That completes the function:

// END: Lesson 04.02
// NEXT: LAB 04.02,
// Lesson 04.03
