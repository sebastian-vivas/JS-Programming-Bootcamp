// Lesson 03.09 Start
// Guess the Mystery Number
// In this lesson we will write a number guessing program:

// First we need a few global variables.

// Next, get the DOM elements used for the game.

// Have each button listen for its respective function to call when clicked.

// get the "guess box" (number input box), which is also hidden by CSS on page load :

// Get the h2 that displays the feedback:

// Declare the playGame function, which runs when the player clicks the PLAY button.

// The evalGuess function runs when the user clicks the GUESS button. This function gets the value from the input box and converts it to a real number using the Number() method.

/* 
- if the guess is too low, user gets feedback (too LOW) and guesses again
- else if the guess is too low, user gets feedback (too HIGH) and guesses again 
- else guess matches mystery number, so user is congratulated and GUESS button is replaced by PLAY AGAIN button
- user gets 7 guesses, which count down and are displayed with each guess
- when the user gets it right, the resetGame()
 function is called
 */

// The resetGame function is called when the user guesses correctly. The function restores all the settings as they are on page load.
