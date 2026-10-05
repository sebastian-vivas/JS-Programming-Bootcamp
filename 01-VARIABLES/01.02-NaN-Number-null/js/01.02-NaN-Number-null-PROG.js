// Lesson 01.02 - PROG

// number-like strings

// A "number-like string" is a number enclosed in quotes. So, whereas 5 is an actual number, "5" is a "number-like string".

// 1. Declare a variable with a "number-like string" for its value and try to do addition with it:

let bill;

// Addition with "number-like strings" fails, as the + defaults to concatenation. But for other operations (subtraction, multiplication, division), the math is done correctly.

// 2.Declare a "number-like string" and do division with it:

let pizzas;

// NaN

// NaN (Not a Number) results from trying to do math with something besides a number or a "number-like string".

// 3. Try to do math with a price with a dollar sign:

let fullPrice; // NaN number
// NaN number

// '$50' cannot be converted to a number, so the attempt to multiply fails.

// Number() method

// The Number() method takes a variable as its argument and, where possible, returns a number. It works with "number-like strings".

// 4. `pizzas = "4"` is a "number-like string". Convert it to a number:

console.log("pizzas", pizzas, typeof pizzas);
// pizzas 4 string

// pizzas 4 number// pizzas 4 string

// If a string cannot be converted to a number, `Number()` returns `NaN`.

// 5. Try to convert "banana" to a number:

let fruit;
// baNaNa NaN number

// Despite its name, `NaN` has a data type of number.

// "Number-like strings" can't be used for addition, but you can convert them with the Number() method.

// 6. Convert "15" to an actual number, so that it can be used for addition:

bill;

// not defined vs undefined

// "not defined" means "variable does not exist". It is an error that usually arises from typos.

// 7. Declare a variable and then misspell it:

let island;
console.log(island, typeof island); // undefined undefined
// console.log(ixland); // error: ixland is not defined

// null

// null and undefined are both falsey (return false in a boolean context), but null is an actual value that is assigned to a variable. It has a data type of object. It’s just an empty object.

// 8. Declare a variable, set it to null, and log it:

let user;
// user null object

// string concatenation

// Variables and substrings can be joined together with `+` to make one bigger string. The process is known as `concatenation`:

// 9. Concatenate a substring and a variable:

let topic;
// Let's learn JavaScript!

// 10. Concatenate a substring with two variables:

let firstName;
// Hello, class! My name is Brian McClain.

// Concatenation is often used for making multiple, similar strings.

// 11. Concatenate an image file path with two variables and three substrings:

let car;
// images/2-door-mazda.jpg

// 12. Change the value of `car` and `doors` to get a new image path:

car; // images/4-door-chevy.jpg

// A plus-sign performs concatenation rather than addition if the expression includes a string.

// 13. Try to do add numbers where a dollar-sign is present. It reverts to string concatenation:

let food; // $25158

// 14. Remove the dollar sign, and run it again. This time the math works. To keep the dollar sign, put it back after the math is done:

tot; // $48

// changing a variables's data type

// Changing the datatype of a variable declared is permitted, but it should make sense to do so, as it does in the above $48 example.

// 15. Change `pet` from a string to a number. This makes no sense:

pet;

// 16. Change a three digit number to a 4-digit "PIN" by concatenating a leading zero. This resulting value is actually a string, but the reason for changing datatype does make sense:

let num;

// END Lesson 01.02
// NEXT: Lab 01.02, Lesson 01.03
