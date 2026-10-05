// Lesson 03.09 - PROG
// Guess the Mystery Number
// In this lesson we will write a number guessing program:

// First we need a few global variables.
let randNum = 0;
let playerGuess = 0;
let guessesLeft = 7;

// Next, get the DOM elements used for the game.
let playBtn = document.getElementById("play-btn");
// hide on page load, show on PLAY click
let guessBtn = document.getElementById("guess-btn");

// Have each button listen for its respective function to call when clicked.
playBtn.addEventListener("click", playGame);
guessBtn.addEventListener("click", evalGuess);

// get the "guess box" (number input box), which is also hidden by CSS on page load :
// hide on page load, show on PLAY click
let guessBox = document.querySelector("input");

// Get the h2 that displays the feedback:
let feedback = document.getElementById("feedback");

// Declare the playGame function, which runs when the player clicks the PLAY button.
function playGame() {
  randNum = Math.ceil(Math.random() * 100);
  this.style.display = "none";
  guessBox.style.display = "inline-block";
  guessBtn.style.display = "inline-block";
  feedback.style.display = "inline-block";
  guessBox.value = 0;
  feedback.textContent = "Guess the mystery number from 1-100!";
}

// The evalGuess function runs when the user clicks the GUESS button. This function gets the value from the input box and converts it to a real number using the Number() method.
function resetGame() {
  guessesLeft = 7;
  guessBtn.style.display = "none";
  guessBox.style.display = "none";
  playBtn.style.display = "block";
  playBtn.textContent = "PLAY AGAIN";
  guessBox.value = 0;
}
/* 
- if the guess is too low, user gets feedback (too LOW) and guesses again
- else if the guess is too high, user gets feedback (too HIGH) and guesses again 
- else guess matches mystery number, so user is congratulated and GUESS button is replaced by PLAY AGAIN button
- user gets 7 guesses, which count down and are displayed with each guess
- when the user gets it right, the resetGame()
 function is called
 */
function evalGuess() {
  playerGuess = Number(guessBox.value);

  if (playerGuess < randNum) {
    // Guess is too low
    guessesLeft--;
    feedback.innerHTML =
      "<p>Your guess is too low! <br>You have " +
      guessesLeft +
      " guesses left!</p>";
  } else if (playerGuess > randNum) {
    // Guess is too high
    guessesLeft--;
    feedback.innerHTML =
      "<p>Your guess is too high! <br>You have " +
      guessesLeft +
      " guesses left!</p>";
  } else {
    // Guess equals mystery number
    guessesLeft--;
    feedback.innerHTML = `<p>Congrats!<br>The mystery number is indeed ${randNum}<br>You got it in ${
      7 - guessesLeft
    } guesses!</p>`;
    resetGame();
  }
}

// The resetGame function is called when the user guesses correctly. The function restores all the settings as they are on page load.
function resetGame() {
  guessesLeft = 7;
  guessBtn.style.display = "none";
  guessBox.style.display = "none";
  playBtn.style.display = "block";
  playBtn.textContent = "PLAY AGAIN";
  guessBox.value = 0;
}

// The FINAL.js has the code for outputting Score and Avg Guesses
// BUT this is NOT in the README or the PDF -- so no how-to other than
// th solution code itself.
// HW Challenge: try to implement Score and Avg Guesses without
// looking at solution (too hard)
// after checking solution, try to BACKWARD ENGINEER how it was done
// by writing the missing README steps
