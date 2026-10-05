// Lesson 08.01 - START

/*
- The setTimeout() method takes two arguments:
  - an inline, anonymous callback function
  - a delay in milliseconds before the function runs
- As a global **window** method, it can optionally be invoked as **window.setTimeout()**
*/

// 1. Call the setTimeout() method:

// 2. Pass in the first argument: the anonymous, inline callback function:

// 3. Write some code for the function. We'll just console.log a greeting:

// 4. Pass in the second argument:
// a five-second delay (5000 ms) before the function runs:

// 5. Refresh the browser. The greeting should appear after five seconds.

// 6. Run another setTimeout, but with the more concise arrow function syntax.
// Increase the delay, and change the message:

// 7. The callback can also call a function. Write a function,
// and then call it from inside the setTimeout callback.
// Again, increase the delay and change the message:

// 8. Write another function to call from the setTimeout callback,
// only this time give the function a parameter:

// 9. Try a set timeout with output to the web page.
// Get the h2 tag: <h2 id="output">output</h2>

// 10. On a 7-second delay, output a random integer from 1-100:

// setInterval(function()): calling a function repeatedly on a timer
// The setInterval() method executes a callback function repeatedly on a time delay.
/*
- the **setInterval()** method takes two arguments:
  - an inline, anonymous callback function
  - a delay in milliseconds between function calls
- as a global window method, it can optionally be invoked as window.setInterval()
- the setInterval() runs repeatedly
- to stop the setInterval() use clearInterval()
*/

// 11. Call the setInterval() method, and pass it its callback function:

// 12. Have the callback output a random integer from 1-100
// every 3 seconds:

// 13. Above the **setInterval()**, declare a counter variable, i:
let i = 0;

// 14. Inside the callback, increment the counter with **i++**:

// 15. Wrap the output line in an if-statement that only runs
// if i is less than or equal to 10:

// The if-statement will stop the output, but not the callback,
// which will keep running and incrementing the counter. To stop the
// callback function, we need to call the clearInterval() method.

// 16. Set the **setInterval()** method equal to a variable:

// 17. Add an else part that calls myInterval(), passing it the intrvl object:

// setInverval() for choosing items from an array at random on a timer

// In this next example, we start with an array of 13 animals.
// The setInterva() callback function will run 13 times,
// choosing an animal at random from the array each time

const animals = [
  "aardvark",
  "bunny",
  "cheetah",
  "deer",
  "elephant",
  "frog",
  "giraffe",
  "hippo",
  "iguana",
  "jaguar",
  "kangaroo",
  "lion",
  "moose",
];

// 18. Set up the **setInterval()** method with a callback that runs
// every 2 seconds:

// 19. Generate a random integer from 0-12, which is in the range
// of the 13-item **animals** array:

// 20. Get the other h2, the one with id of **animals**:

// 21. Output the animal whose index is the random number:

// 22. Specify a timer delay of 2 seconds, and check the browser:

// 23. It should work, but the interval has no way of stopping yet.
// Set the method equal to a variable:

// 24. Add a counter and increment it inside the callback function:

// 25. Add an if-else-statement, so that the interval is cleared
// after it has run 13 times, wthe length of the **animals** array:

// avoiding repeats when choosing array items at random
// The above should work, but better might be to not repeat animals.
// The most efficent way to avoid repeats is to remove the item from
// the array after it has been chosen. This is done with the splice()
// method, which takes two arguments: a start index and the number
// or items to remove:

// 26. Use the splice() method to remove the chosen item:

// The animals are being removed, but the process ends prematurely,
// when the incrmenting counter variable reaches the length of
// the dwindling array. The answer is to pass animals.length to
// the if-statement. Zero is a **falsey** value, so once
// animals.length reaches 0, the else part will run, which clears
// the interval.

// 26. Remove the counter everywhere, with animals.length
// becoming the new condition to evaluate.
// In the ouput, switch to +=, so that we see all the animals appear.
// In this way we will know if our algorithm and code are working.
// Also, in the else part, output the word "done" to confirm that the
// interval has been cleared--not merely that we have run out of animals.

// 27. Refresh the browser.
// All 13 animals should output, one at a time, in random order.

// 28. To visualize how the random number is always within the range
// of the dwindling array length, output the array length as well
// as the random number in the output for each animal.
// Add a <br> tag to separate each animal on its own line.
// The inclusion of html in the string requires switching
// from textContent to innerHTML.
// The output is too much for concatenation, so switch to backticks:

// END: Lesson 08.01
// NEXT: Lesson 08.02
