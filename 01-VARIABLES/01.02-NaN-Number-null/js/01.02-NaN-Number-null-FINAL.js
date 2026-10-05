// Lesson 01.02 - FINAL

// number-like strings

// A "number-like string" is a number enclosed in quotes. So, whereas 5 is an actual number, "5" is a "number-like string".

// 1. Declare a variable with a "number-like string" for its value and try to do addition with it:

let bill = 50;
let tip = "10";
let total = bill + tip;
console.log(total); // 5010

// Addition with "number-like strings" fails, as the + defaults to concatenation. But for other operations (subtraction, multiplication, division), the math is done correctly.

// 2.Declare a "number-like string" and do division with it:

let pizzas = "4";
let people = 8;
let pizzasPP = pizzas / people;
console.log(pizzasPP); // 0.5

// NaN

// NaN (Not a Number) results from trying to do math with something besides a number or a "number-like string".

// 3. Try to do math with a price with a dollar sign:

let fullPrice = "$80";
let halfPrice = fullPrice * 0.5;
console.log("halfPrice", halfPrice); // NaN number
// NaN number

// '$50' cannot be converted to a number, so the attempt to multiply fails.

// Number() method

// The Number() method takes a variable as its argument and, where possible, returns a number. It works with "number-like strings".

// 4. A number in quotes such as "4"` is a "number-like string". Convert it to a number:

console.log("pizzas", pizzas, typeof pizzas);
// pizzas 4 string
pizzas = Number(pizzas);
console.log("pizzas", pizzas, typeof pizzas);
// pizzas 4 number// pizzas 4 string

// If a string cannot be converted to a number, `Number()` returns `NaN`.

// 5. Try to convert "banana" to a number:

let fruit = "banana";
let baNaNa = Number(fruit);
console.log("baNaNa", baNaNa, typeof baNaNa);
// baNaNa NaN number

// Despite its name, `NaN` has a data type of number.

// "Number-like strings" can't be used for addition, but you can convert them with the Number() method.

// 6. Convert "15" to an actual number, so that it can be used for addition:

bill = 70;
tip = "15";
total = bill + tip;
console.log(total); // 7015

total = bill + Number(tip);
console.log(total); // 85

// not defined vs undefined

// "not defined" means "variable does not exist". It is an error that usually arises from typos.

// 7. To see the difference between *undefined* and *not defined*, declare a variable with no value, and then misspell it:

let island;
console.log(island, typeof island); // undefined undefined
island = "Bali";
console.log(island, typeof island); // Bali string
// console.log(ixland); // error: ixland is not defined

// null

// null and undefined are both falsey (return false in a boolean context), but null is an actual value that is assigned to a variable. It has a data type of object. It’s just an empty object.

// 8. Declare a variable, set it to null, and log it:

let user = null;
console.log("user", user, typeof user);
// user null object

// string concatenation

// Variables and substrings can be joined together with `+` to make one bigger string. The process is known as `concatenation`:

// 9. Concatenate a substring and a variable:

let topic = "JavaScript";
let intro = "Let's learn " + topic + "!";
console.log(intro);
// Let's learn JavaScript!

// 10. Concatenate a substring with two variables:

let firstName = "Brian";
let lastName = "McClain";
let greeting = "Hello, class! My name is " + firstName + " " + lastName + ".";
console.log(greeting); // Hello, class! My name is Brian McClain.

// Concatenation is often used for making multiple, similar strings.

// 11. Concatenate an image file path with two variables and three substrings:

let car = "mazda";
let doors = 2;
imgPath = "images/" + doors + "-door-" + car + ".jpg";
console.log(imgPath); // images/2-door-mazda.jpg

// 12. Change the value of `car` and `doors` to get a new image path:

car = "chevy";
doors = 4;
imgPath = "images/" + doors + "-door-" + car + ".jpg";
console.log(imgPath); // images/4-door-chevy.jpg

// A plus-sign performs concatenation rather than addition if the expression includes a string.

// 13. Try to do add numbers where a dollar-sign is present. It reverts to string concatenation:

let food = 25;
let bev = 15;
tip = 8;
let tot = "$" + food + bev + tip;
console.log(tot); // $25158

// 14. Remove the dollar sign, and run it again. This time the math works. To keep the dollar sign, put it back after the math is done:

tot = food + bev + tip;
console.log(tot); // 48
tot = "$" + tot;
console.log(tot); // $48

// changing a variables's data type

// Changing the datatype of a variable declared is permitted, but it should make sense to do so, as it does in the above $48 example.

// 15. Change `pet` from a string to a number, although doing so makes no sense:

pet = 123;
console.log(pet); // 123

// 16. Change a three digit number to a 4-digit "PIN" by concatenating a leading zero. This resulting value is actually a string, but the reason for changing datatype does make sense:

let num = 582;
let pin = "0" + 582;
console.log(pin, typeof pin); // 0582 string

// END Lesson 01.02
// NEXT: Lab 01.02
// Lesson 01.03
