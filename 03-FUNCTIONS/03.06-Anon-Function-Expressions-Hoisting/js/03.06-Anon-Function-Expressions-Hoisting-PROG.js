// Lesson 03.06
// Hoisting
// Function Expressions
// Anonymous Functions

// hoisting

// Hoisting refers to functions being lifted to the top of their scope, so that they are available everywhere in their scope. Since they are hoisted, functions can be called before their declaration appears in the code.

// 1. Declare a function and call it before and after:

// console.log(fruit);
let fruit = "kiwi";
console.log(fruit);

console.log(sayHello("Joe"));

function sayHello(name) {
  return `Hello, ${name}`;
}

console.log(sayHello("Joe"));
// Hello, Joe!

// Hoisting does not work for variables, however. To access a variable, it must have already been declared:

// 2. Try to use a variable before it is declared. You get an error:

// console.log(`Do you like ${froot}?`);
// ReferenceError: froot is not defined
let froot;
console.log(`Do you like ${froot}?`);
// Do you like apples?

// function experession

// A function expression is a variable with a function for a value. As a variable, it doesn't get hoisted. A function expression must be defined *before* it can be called.

// console.log(welcomeUser('John1'));

// 3. Write a function expression:
const welcomeUser = function (user) {
  return `Welcome, ${user}`;
};

console.log(welcomeUser("Jane2"));

// 4. Call the function above itself. We get an error:

// console.log(welcomeUser('Jane1'));
// ReferenceError: welcomeUser is not defined

// 5. Comment out the error line and call the function down below. It works:

// Welcome Janet456

// anonymous functions

// An anonymous function is a function that does not have a name. Anytime you see the word function followed by parentheses with no name in between, it's an anonymous function:

// named function:
function addNumbers(x, y) {
  return x + y;
}

// anonymous function:
/*
function(x, y) {
    return x, y;
}
*/
// The reason functions have names at all is so they can be called. It stands to reason then that anonymous functions do not need to be called. But if that's true, how do they run?

// function set equal to an event property

// An anonymous function may be set equal to the event property of an object. When that event happens, the function runs. First let's just look at a function that is called by a listener:

// 6. Get the elements where the function output goes:
const output1 = document.getElementById("output-1");
const output2 = document.getElementById("output-2");
const output3 = document.getElementById("output-3");
const output4 = document.getElementById("output-4");
const output5 = document.getElementById("output-5");
const output6 = document.getElementById("output-6");

// 7. Get the BTN 1 button and have it call a function when clicked:
const btn1 = document.getElementById("btn-1");
btn1.addEventListener("click", doSomething);

// 8. Define the function:
function doSomething() {
  output1.textContent = "You clicked btn1!";
}

// 9. Reload the page and click the button. We should get the message: *You clicked the button! That did something!*

// This review of addEventListener is just to set up the contrast between calling function with a name and running an anonymous function on click.

// 10. Get BTN 2:
const btn2 = document.getElementById("btn-2");

// onclick property
btn2.onclick = function () {
  output2.textContent = "You clicked the btn2!";
};

// Events that can be called on objects co-exist as properties. The 'click' event has its counterpart in the **onclick** property, which is called on the button and set equal to a function. When the click takes place, the function runs:

// 11. Access the button's onclick property and set it equal to an anonymous function:

// For that matter, an anonymous function can be used in a listener, rather than callng a function.

// inline anonymous functions

// Anonymous functions do not have to come to the right of an equal sign. An anonymous function can be written inline, such as inside the addEventListener method.

// 13. Get BTN 3 and have it listen for a click. Instead of calling a function by name, as we usually do, just run an inline anonymous function, right there on the spot:
const btn3 = document.getElementById("btn-3");

// Let's try one more example of a listener that calls a function by name vs. a listener that runs an anonymous function, inline:

// 14. Have the body listen for the 'load' event, which fires when the body, is fully loaded, and to call a function when the loading of the page is complete:

// 15. Refactor the listener to run an inline anonymous function instead of calling a function by name:
btn3.addEventListener("click", function () {
  output3.textContent = "You clicked btn3!";
});

// 16. Do away with the listener altogether, and instead use the onload event property to run the anonymous function:

// keyboard object and events

// The pressing of any key is also an event. These are typically also used in conjunction with anonymous functions

// The document can listen for a keyboard event and call a function when any key is pressed `keydown` or released `keyup`.

// The event properties for the keyboard are `event.key` which is the key that was pressed and `event.keyCode` which is the key's numeric code. The function takes `event` as its argument

// We will put an inline function in the listener that outputs these properties:

// 17. Have the document listen for a `keydown` event and call a function when any key is pressed. The function reports the `key` and its `keyCode`.

// 18. Refactor the above to use an inline anonymous function:

// 19. And finally, use the onkeyup property to call an anonymous function, which runs when the key is released (not pressed):

// END: Lesson 03.06

// NEXT: Lesson 03.07
