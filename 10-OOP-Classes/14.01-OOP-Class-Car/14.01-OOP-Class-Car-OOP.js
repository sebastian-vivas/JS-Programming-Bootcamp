// Classes

// JS and many other languages are Object Oriented
// meaning that everything is an object belonging to a class. This programming paradigm is called OOP (Object Oriented Programming).

// Think of a class as a blueprint, from which any number of objects can be made. The objects made from a class inherit all the properties and methods of the class.

// To make a class, start with the keyword class, followed by the name of your class. Variable naming rules apply, although, by convention the all words a class name are capitalized.

// After that comes a pair of curly braces inside of which goes all its properties.

// When an object is made from a class, a "constructor" function always runs. This is called "instantiating" the object.

// the constructor method is the first thing defined inside the class curly braces. The construtor method's parentheses list out all the properties of the class. When the object is instantiated, all these properties need to be set by arguments passed into the "constructor function".

// Each property is preceded by this, so the syntax for the model property is this.model.

// A quick recap of this:
// - `this` in the global scope is the Window, the top-level object:

console.log(this); // Window

// - `this` in a function is the object that had the event attached to it that called the function. So, if a button click calls a function, inside the function itself, this refers to the button. In the function, this (the button), also goes by event.target.

// - `this` in an object is the object itself. So, `this.year` is the `year` property of the object

// Assign properties using `this.key` syntax. Set each equal to the parameter, the value of which is supplied when an object of the class is instantiated. All the properties go inside the constructor function.

// methods
// A method is a property whose value is a function with a return value. When the method is called on the object, the method returns the value. Add a property called listForSale which returns a FOR SALE message with many of the properties included in the string:

class Car {
  constructor(make, model, yr, color, miles, mpg, condition, cyl) {
    this.make = make;
    this.model = model;
    this.year = yr;
    this.color = color;
    this.miles = miles;
    this.mpg = mpg;
    this.condition = condition;
    this.cylinders = cyl;

    this.describe = function () {
      return `${this.year} ${this.color} ${this.make} ${this.model}`;
    };

    this.listForSale = function () {
      return `FOR SALE: ${this.color} ${this.year} ${this.make} ${this.model}, ${this.condition} condition. ${this.cylinders} cylinders. Gets ${this.mpg} mpg. Only ${this.miles} miles`;
    };
  }
}

// Instantiate objects of the Car class using the constructor method. This uses the new keyword, which should be familiar from our work with the Date object:

let car1 = new Car("Honda", "Accord", 2010, "red", 82345, 31, "good", 4);
let car2 = new Car(
  "Dodge",
  "Charger",
  2020,
  "black",
  12345,
  15,
  "excellent",
  8
);

// Output properites of the objects:
console.log(car1.make);
console.log(car1.mpg);
console.log(car1.cylinders);

console.log(car2.model);
console.log(car2.miles);
console.log(car2.color);

// Call the methods on each object.
console.log(car1.describe());
console.log(car2.describe());

console.log(car1.listForSale());
console.log(car2.listForSale());
