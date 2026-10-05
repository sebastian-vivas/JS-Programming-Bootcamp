// Lesson 03.08 - FINAL

// Keyboard Events to Set CSS

// 1. Get the DOM elements

// 2. Set the left position of the space ship

// 3. Set booleans to keep track of font (serif or not) and dark mode:

// 4. Have the document listen for `keyup` and call an inline anonymous function which outputs the `key` and its `keyCode`:

// 5. Have document listen for `keydown` event and call the `respondToKeyPress` function. The function checks if the key is `n`, `d`, `l`, `c` or left / right arrow, and if it is, it does the action assigned to that key:

// 6. Define the function `respondToKeyPress`, which runs on `keydown` (press). All functions take `event` object as its default argument, but pass in `event` explicitly, so that we can access its properties:

// 7. Inside the function, set up a scaffoling of a big if-else if block to check for each key: c, d, f, p and Left (37) / Right (39) arrows:

// Next, we will use conditinal logic to handle what to do (if anything) when a key is pressed:

// 8. If the `c` key is pressed, call the ` makeRandHexColor()` function that generates and returns a random hexadecimal color. Save the color to a local variable, `randHex`, and then set the body background to that color.

// 9. If the `d` key is pressed, toggle between dark and light mode by adding-removing their styles. Toggle the boolean each time, so that the behavior also toggles.

// 10. If the `f` key is pressed, toggle between serif and sans-serif font. Toggle the boolean each time, so that the behavior also toggles.

// 11. If the `p` or `n` key is pressed, generate and output a random 4-digit pin number. If r is less than 4 digits, add a leading 0; output the random pin

// 12. If the `ArrowLeft (37)` key is pressed, and if the space ship is not all the way to the left, move the ship 10px to the left:

// 13. If the `ArrowRight (39)` key is pressed, and if the space ship is not all the way to the right, move the ship 10px to the right:

// end function respondToKeyPress(event)

/*
* Random Hex Color
- A base 10 number uses the digits 0123456789 only
- A base-16 value uses the digits 0123456789ABCDEF only
- A hexadecimal color is a base 16 value
- toString() method converts a number to a string 
- toString(16) converts a base 10 number to a base 16 string 
- there exist 16,777216 RGB colors (256 x 256 x 256)
- call toString(16) on an int from 0-16777215 to get a hex color
- '#' before the number comletes the hex color
*/

function makeRandHexColor() {
  // A. Generate a random 16-digit float from 0-1
  // B. Multiply the random float by 16,777,216 (RGB range)
  // C. round down the random number:
  // D. convert the random number to a base-16 hexadecimal string
  // E. add the # to complete the hexadecimal color
  // F. return the hexadecimal color value
}
