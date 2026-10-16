// Lesson 03.09 Start

// You click PLAY, the computer picks a secret number from 1 to 100, and you guess. It tells you too high or too low until you get it. Let's look at the page: right now you only see a PLAY button. The number box, the GUESS button, and the feedback are all hidden by the CSS with display none.

// Guess the Mystery Number

// In this lesson we will write a number guessing program:

// First we need a few global variables.

// Next, get the DOM elements used for the game.

// Have each button listen for its respective function  call when clicked.

// get the "guess box" (number input box), which is also hidden by CSS on page load :

// Get the h2 that displays the feedback:

// Declare the playGame function, which runs when the player clicks the PLAY button.

// The evalGuess function runs when the user clicks the GUESS button. This function gets the value from the input box and converts it to a real number using the Number() method.

/* 
- if the guess is too low, user gets feedback (too LOW) and guesses again
- else if the guess is too high, user gets feedback (too HIGH) and guesses again 
- else guess matches mystery number, so user is congratulated and GUESS button is replaced by PLAY AGAIN button
- user gets 7 guesses, which count down and are displayed with each guess
- when the user gets it right, the resetGame()
 function is called
 */

// The resetGame function is called when the user guesses correctly. The function restores all the settings as they are on page load.

// 1. If there are 0 guesses left, show "Out of guesses! The number was 42." Hide the guess button and instead show a reset button that resets the game when a player clicks on it.

// 2. If one guess is left, say "1 guess left" not "1 guesses left."

// 3. If the number input is empty, below 1, or above 100, show "Please enter a number from 1 to 100." and don't use up a guess.

// 4. A player should be able to press Enter for the number input to submit the guess.
____________________________________________________

// 5. You need two variables: one that keeps track of total number of guesses and one that keeps track of total amout of games played. They need to carry over from one game to the next.

// 6. Every time a game ends, add 1 to total games played and show it on the page.

// 7. Add the number of guesses per game to the total number of guesses. 

// 8. Use the total number of guesses and the total number of games to calculate the average by writing a small function, updateAverage(). Hint: Divide total guesses by total games. 

// 9. Call the function when a player wins or loses. Show the average to two decimal places on the page.

// JavaScript here -> https://coderfile.io/f/CZ30Fnq9MS