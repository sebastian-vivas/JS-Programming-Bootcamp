// Lesson 03.08 - FINAL

// Keyboard Events to Set CSS

// 1. Get the DOM elements
const container = document.querySelector(".container");
const keyBox = document.getElementById("key-box");
const spaceShip = document.getElementById("space-ship");
const randPinBox = document.getElementById("rand-pin-box");

// 2. Set the left position of the space ship to be approximately in the middle of the screen:
let leftPos = window.innerWidth / 2 - 150;
spaceShip.style.left = leftPos + "px";
let shipSpeed = 20;

// 3. Set booleans to keep track of font (serif or not) and dark mode:
let serif = true;
let dark = false;

// 4. Have the document listen for `keyup` and call an inline anonymous function which outputs the `key` and its `keyCode`:
document.addEventListener("keyup", function (event) {
  keyBox.textContent = `Key: ${event.key} Code: ${event.keyCode}`;
});

// 5. Have document listen for `keydown` event and call the `respondToKeyPress` function. The function checks if the key is `n`, `d`, `l`, `c` or left / right arrow, and if it is, it does the action assigned to that key:
document.addEventListener("keydown", respondToKeyPress);

// Next, we will use conditinal logic to handle what to do (if anything) when a key is pressed:

// 6. Define the function `respondToKeyPress`, which runs on `keydown` (press). All functions take `event` object as its default argument, but pass in `event` explicitly, so that we can access its properties:
function respondToKeyPress(event) {
  // 7. Inside the function, set up a scaffoling of a big if-else if block to check for each key: c, d, f, p and Left (37) / Right (39) arrows:

  // 8. If the `c` key or `Enter` (13) is pressed, call the `makeRandHexColor()` function that generates and returns a random hexadecimal color. Save the color to a local variable, `randHex`, and then set the body background to that color.

  if (event.key === "c" || event.keyCode === 13) {
    // 13 is Enter

    let randHex = makeRandHexColor();
    document.body.style.backgroundColor = randHex;
    keyBox.innerHTML += "<br>" + randHex;

    // 9. If the `d` key is pressed, toggle between dark and light mode by adding-removing their styles. Toggle the boolean each time, so that the behavior also toggles.
  } else if (event.key === "d") {
    if (dark) {
      container.classList.remove("dark-mode");
      container.classList.add("light-mode");
      dark = false;
    } else {
      container.classList.remove("light-mode");
      container.classList.add("dark-mode");
      dark = true;
    }

    // 10. If the `f` key is pressed, toggle between serif and sans-serif font. Toggle the boolean each time, so that the behavior also toggles.
  } else if (event.key === "f") {
    if (serif) {
      container.style.fontFamily = "sans-serif";
      serif = false;
    } else {
      container.style.fontFamily = "serif";
      serif = true;
    }

    // 11. If the `p` or `n` key is pressed, generate and output a random 4-digit pin number. If r is less than 4 digits, add leading zero(es) by means of if-statements with ranges; output the random pin
  } else if (event.key === "p" || event.key === "n") {
    let r = Math.floor(Math.random() * 10000);
    // add leading zero(es) if needed
    if (r < 1000 && r > 99) r = "0" + r; // 3 digits
    if (r < 100 && r > 9) r = "00" + r; // 2 digits
    if (r < 10) r = "000" + r; // 1 digit
    if (r === 0) r = "0000";
    randPinBox.textContent = "PIN:\n" + r;

    // 12. If the `ArrowLeft (37)` key is pressed, and if the space ship is not all the way to the left, move the ship `shipSpeed` pixels to the left:
  } else if (event.keyCode === 37) {
    // ArrowLeft = 37

    if (leftPos > 0) {
      leftPos -= shipSpeed;
      spaceShip.style.left = leftPos + "px";
    }

    // 13. If the `ArrowRight (39)` key is pressed, and if the space ship is not all the way to the right, move the ship `shipSpeed` pixels to the right:
  } else if (event.key === "ArrowRight") {
    // ArrowRight = 39

    if (leftPos < window.innerWidth - 300) {
      leftPos += shipSpeed;
      spaceShip.style.left = leftPos + "px";
    }
  }
} // end function respondToKeyPress(event)

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
  let rando = Math.random();

  // B. Multiply the random float by 16,777,216 (RGB range)
  rando *= 16777216;

  // C. round down the random number:
  rando = Math.floor(rando);

  // D. convert the random number to a base-16 hexadecimal string
  let hex = rando.toString(16);

  // E. add the # to complete the hexadecimal color
  hex = "#" + hex;

  // F. return the hexadecimal color value
  return hex;
}
