// 04.03 Lab Exercises

// console.log each step to verify the result.

// 0. Given this empty array:
const pets = [];

// 1. add 'cat', 'dog' and 'hamster' to the array.
console.log(pets);
// ['cat', 'dog', 'hamster']

// array.push() adds item to end of array:
// 2. Push 'iguana' into the array.
// 3. Push 'parrot' into the array.
// 4. Push 'snake' into the array.
console.log(pets);
// ['cat', 'dog', 'hamster', 'iguana', 'parrot', 'snake']

// array.pop() removes item from end of array:
// 5. remove (pop) the last item, which is 'snake'
console.log(pets);
// ['cat', 'dog', 'hamster', 'iguana', 'parrot']
// 6. put (push) back 'snake'
// 7. pop it again, BUT this time save the return value

// array.unshift() adds item to beginning of array:
// 8. Add 'bunny' to the beginning of pets array
console.log(pets);
// ['bunny', 'cat', 'dog', 'hamster', 'iguana', 'parrot']

// array.shift() method removes first item of array
// 9. Remove 'bunny'
console.log(pets);
// ['cat', 'dog', 'hamster', 'iguana', 'parrot']

// array1.concat(array2) combines 2 or more arrays
// 10. Combine pets and morePets into the petsGalore array
const morePets = ["canary", "gerbil", "kitten", "python", "turtle"];
const petsGalore = [];

console.log(petsGalore);
// ['cat', 'dog', 'hamster', 'iguana', 'parrot', 'canary', 'gerbil', 'kitten', 'python', 'turtle']

// array.sort() from A-Z
// 11. Sort the petsGalore array:
// ['canary', 'cat', 'dog', 'gerbil', 'hamster', 'iguana', 'kitten', 'parrot', 'python', 'turtle']

// array.splice(index, count)
// 12. get rid of the first two items but save them to a var called twoSplicedPets
const twoSplicedPets = [];

console.log(twoSplicedPets); // ['canary', 'cat']

console.log(petsGalore); // ['dog', 'gerbil', 'hamster', 'iguana', 'kitten', 'parrot', 'python', 'turtle']

// 13. starting at the 4th item in petsGalore, splice 3 items in a row; save the items as threeSplicedPets
// console log threeSplicedPets and petsGalore; refer to above example for step-by-step how-to
const threeSplicedPets = [];

console.log(threeSplicedPets);
// ['iguana', 'kiten', 'parrot']

console.log(petsGalore);
// ['dog', 'gerbil', 'hamster', 'python', 'turtle']

// 14. Using concat(), restore petsGalore to its original state of 10 pets and sort it from A-Z
console.log(petsGalore);
// ['canary', 'cat', 'dog', 'gerbil', 'hamster', 'iguana', 'kitten', 'parrot', 'python', 'turtle']

console.log(petsGalore);

var petsStr = petsGalore.join(); // array.join() is called on an array and returns a string of all items
console.log("petsStr:", petsStr);

const reptiles = ["snake", "iguana", "turtle", "snake", "gekko"];
