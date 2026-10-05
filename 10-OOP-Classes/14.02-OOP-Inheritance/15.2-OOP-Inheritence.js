// A recap of Car class with a slightly different version. 

// Also, let's not forget that we can use an arrow function for the method. The advantage here is that it makes the syntax more concise. Because the return value is implicit and there's only one line of logic, we can omit the curly braces and return keyword:

// Class default properties
// A class can have properties which are not set by parameters. In this case they have default values assigned in the constructor
// Give Car an additional property, 'onRoad', which is a boolean, with a default value of true. 
// Like any property, the value can be changed later.

class Car {
  constructor(make, model, year, color) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.color = color;
    this.onRoad = true;
    this.brag = () => `Check out my awesome ${this.year} ${this.make} ${this.model}!`;
  }
}

// A method of the class does not have to be defined in the constructor. We could have it separate from the constructor. 
// Differences:
// - method name not attached to this. 
// - function keyword does not come before the name of the method.

/*
this.brag = () => {
  return `Check out my awesome ${this.year} ${this.make} ${this.model}!`;
*/

class Car {

  constructor(make, model, year, color) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.color = color;
    this.onRoad = true;
  }

  brag() {
    return `Check out my awesome ${this.year} ${this.make} ${this.model}!`;
  }

}

// Make sure that this other way of writing methods works by instantiating a car object and then a few properties, including  the brag method:

let myCar = new Car('Porsche', '356C', 1964, 'red');
console.log(myCar.make);
console.log(myCar.model);
console.log(myCar.onRoad);
console.log(myCar.brag());

// Check out my awesome 1964 Porsche 356C!

// Inheritance: 
// A Class can be declared that inherits all the methods and properties of another, parent, class, the extends keyword is used to express this relationship. In addition to the constructor method, the child class has a super() method that takes all the parameters of the parent. 

// Let's start with a class, Player, with two properties, name and energy. Only name has a parameter to set. The energy property had a default value of 100, so no parameter to set.

// Give the class two methods: introducePlayer that returns a string and restPlayer that sets the energy level and returns a string that announces the update. 

class Player {
    
  constructor(name) {
    this.name = name;
    this.energy = 100;
  }

  introducePlayer() {
    return `Player name: ${this.name}\nGame on!`;
  }

  restPlayer() {
    let energy = this.energy;
    this.energy += 10;
    return `Player rested..\nEnergy increased from ${energy} to ${this.energy}.`;
  }
    
}

// Instantiate an object of the Player class and test out its properties and methods:

let player = new Player('Wezzul');

console.log(player.name);
console.log(player.energy);
console.log(player.introducePlayer());
console.log(player.restPlayer());

// Now for the inheritance part. We'll make a new class called Warrior which extends Player. This means, Warrior will start off with all the properites and methods of Player, and then, on top of that, will have additional properites and methods unique to the Warrior class.

// Declare Warrior extends Player

// The constructor will assign just one property: weapon.

// The inherited properties, name and energy go in both the constructor and in a super() method.

// Give the Warrior class its own method, attack(). Based on the energy level, it returns a message announcing an attack, or it says that it doesn't have enough energy to attack.

// The attack() method also decrements the energy level by 10 before announcing the new energy level.

class Warrior extends Player {
    
  constructor(name, weapon) {
    super(name);
    this.weapon = weapon;
  }

  attack() {
      
    let msg = "";
    if (this.energy <= 0) {
      msg = `Not enough energy to wield the ${this.weapon}!`;
    } else {
      msg = `Warrior attacked with the ${this.weapon}!`;
    }
      
    let energy = this.energy;
    this.energy -= 10;
    msg += `\nEnergy decreased from ${energy} to ${this.energy}.`;
    return msg;
  }
    
}

// Instantiate an instance of the Warrior class, passing in two arguments: name and weapon.

const warrior = new Warrior("Konan", "Battle Ax");

console.log(warrior.name);
console.log(warrior.energy);
console.log(warrior.weapon);
console.log(warrior.introducePlayer());
console.log(warrior.restPlayer());
console.log(warrior.attack());

// A class can extend a class that extends a class.
// Let's make another class, SuperHero that extends Warrior.
// SuperHero will start out with everything the Warrior class has, which includes everything from the Player class.

// On top of that we will give the SuperHero class its own property, superPower and its own method useSuperPower.

// The useSuperPower() method uses the same logic as the attack() method: if there is enough energy to use the super power, this fact is announced. Else, it says that it doesn't have enough energy to use the super power. Also, like attack(), useSuperPower() costs 10 units of energy every time it is called.

// The super() method now has two parameters, name and weapon, which it inherits from Player and Warrior classes, respectively.

class SuperHero extends Warrior {
    
  constructor(name, weapon, superPower) {
    super(name, weapon);
    this.superPower = superPower;
  }

  useSuperPower() {

    let msg = "";
    if (this.energy <= 0) {
      msg = `Not enough energy to use ${this.superPower}!`;
    } else {
      msg = `Super Hero used ${this.superPower}!`;
    }

    let energy = this.energy;
    this.energy -= 10;
    msg += `\nEnergy decreased from ${energy} to ${this.energy}.`;
    return msg;
  }

}

// Instantiate an instance of the SuperHero class, passing in the three arguments: name, weapon and superPower:

const superhero = new SuperHero("Magami", "Battle Ax", "Super-Strength");

console.log(superhero.introducePlayer());
console.log(superhero.attack());
console.log(superhero.restPlayer());
console.log(superhero.superPower);
console.log(superhero.useSuperPower());

// Prototype
// The prototype keyword is used to add properties to a class.

// Let's add a new property to superhero, a boolean called: wearsCape:

SuperHero.prototype.wearsCape = true;

// Also add a method called introduceSuperHero:

// using properties added w prototype, update methods
SuperHero.prototype.introduceSuperHero = function() {
  return `Behold! I am ${this.name}! I wield a fearsome ${this.weapon}, and I possess the incredible superpower of ${this.superPower}!`;
}

// Instantiate a new object, which will have the new method.
const superhero3 = new SuperHero("Zogg", "Laser Gun", "X-Ray Vision");

// Log the whole object to see if energy and hasCape are in
console.log(superhero3);

console.log(superhero3.introducePlayer());
console.log(superhero3.attack());
console.log(superhero3.restPlayer());
console.log(superhero3.useSuperPower());
console.log(superhero3.introduceSuperHero());
console.log(superhero3.wearsCape);


/*

OOP CLASS LAB EXERCISES: 

/* 
Complete these classes, Mammal and HouseCat, by filling in the missing data. You need to look at all the code to get clues.

// See the output of the desribe method to know how to make it.

class Mammal {
    
  constructor(name, legs, ???, ???) {
    this.name = name;
    // ???
    this.continent = continent;
    // ???
  }

  describe() {
    // ???
  }
    
}

let animal1 = new Mammal('???');
console.log(animal1.name); // zebra
console.log(animal1.legs); // 4
console.log(animal1.continent); // Africa
console.log(animal1.herbivore); // true
console.log(animal1.describe); 
// The zebra is a 4-legged herbivore native to Africa.

let animal2 = new Mammal('???');
console.log(animal2.name); // tiger
console.log(animal2.legs); // 4
console.log(animal2.continent); // Asia
console.log(animal2.herbivore); // false
// The tiger is a 4-legged carnivore native to Asia.

let animal3 = new Mammal('???');
console.log(animal3.name); // kangaroo
console.log(animal2.legs); // 2
console.log(animal2.continent); // Australia
console.log(animal2.herbivore); // true
// The kangaroo is a 2-legged herbivore native to Australia.

let animal4 = new Mammal('???');
console.log(animal4.name); // llama
console.log(animal4.legs); // 4
console.log(animal4.continent); // South America
console.log(animal4.herbivore); // true
// The llama is a 4-legged herbivore native to South America.

// Make a class HouseCat that extends Animal.
// In addition to its inherited properties, it has 3 new ones: 
// age, toys and owner.
// toys is an array with at three items, all strings
// owner is an object with properties of name, age and job

// Give the HouseCat class a method called meow, as shown. It takes a name as argument, concatenates a personalized greeting and returns it. See the outputted greeting for clues as to how to make it.

class HouseCat extends Animal {
    
    constructor(name, legs, ???, ???, ???, ???, ???) {

        super(name, legs, ???, ???);
        this.age = age;
        this.toys = toys;
        this.owner = owner;

    }

    meow(name) {
        return `Meow, ${name}! My name is ${this.name}! I am a ${this.age}-year-old cat! My favorite toy is my ${this.toys[0]}! My human's name is ${this.owner.name}!`;
    }

}

const toys = ['Floppy Fish', 'tennis ball', 'catnip'];
const catOwner = {name: 'Sue', age: 42, job: 'teacher'};

let cat = new HouseCat('Fluffy', 4, '???', '???', '???', '???', '???');

console.log(cat.legs); // 4
console.log(cat.name); // Fluffy
console.log(cat.herbivore); // true
console.log(cat.continent); // North America
console.log(cat.owner.name); // Sue
console.log(cat.toys[1]); // tennis ball
console.log(cat.toys[toys.length-1]); // catnip
console.log(cat.job); // undefined
console.log(cat.owner.job); // teacher

console.log(cat.greet('Bob')); 
// Meow, Bob! My name is Fluffy! I am a 3-year-old cat! My favorite toy is my Floppy Fish! My human's name is Sue!



  Using above as a template

  Create a Magician class that has the following properties and methods

  properties:
    name,health, magicPower

  methods:
    sayName()
    getHealth()
    playerRest()

  Create a subclass called Wizard that inherits from Magician and has the follow properties and methods

  properties:
    magicStaff

  methods:
    useMagic()
    maigcDrement()
    manaIncrement()
    checkMana()

*/


/* OOP CLASS LAB EXERCISE SOLUTION:

Complete these classes by filling in the missing data. You need to look at all the code to get clues.

class Animal {
    
  constructor(name, legs, continent, isHerbivore {
    this.name = name;
    this.legs = legs;
    this.continent = continent;
    this.isHerbivore = isHerbivore;
  }

  describe() {
    // ???
  }
    
}

let animal1 = new Animal('???');
console.log(animal1.name); // zebra
console.log(animal1.legs); // 4
console.log(animal1.continent); // Africa
console.log(animal1.isHerbivore); // true

let animal2 = new Animal('???');
console.log(animal2.name); // tiger
console.log(animal2.legs); // 4
console.log(animal2.continent); // Asia
console.log(animal2.herbivore); // false

let animal3 = new Animal('???');
console.log(animal3.name); // kangaroo
console.log(animal2.legs); // 2
console.log(animal2.continent); // Australia
console.log(animal2.herbivore); // true

let animal4 = new Animal('???');
console.log(animal4.name); // llama
console.log(animal4.legs); // 4
console.log(animal4.continent); // South America
console.log(animal4.herbivore); // true

// Make a class HouseCat that extends Animal.
// In addition to its inherited properties, it has 3 new ones: 
// age, toys and owner.
// toys is an array with at least two items as strings
// owner is an object with properties of name, age and job

// Give the HouseCat class a method called greet, as shown. It takes a name as argument, so that the greeting can be personalized.

class HouseCat extends Animal {
    
    constructor(name, legs, continent isHerbivore, age, toys, owner) {

        super(name, legs, ???, ???);
        this.age = age;
        this.toys = toys;
        this.owner = owner;

    }

    greet(name) {
        return `Meow, ${name}! My name is ${this.name}! I am a ${this.age}-year-old cat! My favorite toy is my ${this.toys[0]}! My human's name is ${this.owner.name}!`;
    }

}

let cat = new HouseCat('Fluffy', 4, '???', ???, ???, ['Floppy Fish', 'tennis ball', 'catnip'], {name: 'Sue', age: 42, job: 'teacher'});

console.log(cat.legs); // 4
console.log(cat.name); // Fluffy
console.log(cat.isHerbivore); // true
console.log(cat.continent); // North America
console.log(cat.owner.name); // Sue
console.log(cat.toys[1]); // tennis ball
console.log(cat.toys[toys.length-1]); // catnip
console.log(cat.job); // undefined
console.log(cat.owner.job); // teacher

console.log(cat.greet('Bob')); 
// `Meow, Bob! My name is Fluffy! I am a 3-year-old cat! My favorite toy is my Floppy Fish! My human's name is Sue!

// let cat = new HouseCat('Fluffy', 4, 'North America', false, 3, ['Floppy Fish', 'ball', 'catnip'], {name: 'Sue', age: 42, job: 'teacher'});