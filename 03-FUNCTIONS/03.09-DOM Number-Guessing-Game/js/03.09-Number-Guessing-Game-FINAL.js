// Lesson 03.09 Final
// Guess the Mystery Number
// In this lesson we will write a number guessing program:

// First we need a few global variables.
let randNum = 0; // to store the "mystery number"
let playerGuess = 0;
let guessesAllowed = 7;
let guessesLeft = 7;
let guessOrGuesses = "guesses";
let penalty = 0;

// Next, get the DOM elements used for the game.
let playBtn = document.getElementById("play-btn");
let guessBtn = document.getElementById("guess-btn");

// Have each button listen for its respective function to call when clicked.
playBtn.addEventListener("click", playGame);
guessBtn.addEventListener("click", evalGuess);

// get the "guess box" (number input box), which is also hidden by CSS on page load :
let guessBox = document.querySelector("input");

// Get the h2 that displays the feedback:
let feedback = document.getElementById("feedback");
let totGamesSpan = document.getElementById("tot-games-span");
let guessAvgSpan = document.getElementById("guess-avg-span");
let totGames = Number(totGamesSpan.innerHTML);
let guessAvg = Number(guessAvgSpan.innerHTML);

// OPTIONAL: SCORE BOX
let scoreBox = document.getElementById("score-box");

// Declare the playGame function, which runs when the player clicks the PLAY button.
function playGame() {
  randNum = Math.ceil(Math.random() * 100);
  // alert(randNum); // testing
  this.style.display = "none";
  guessBox.style.display = "inline-block";
  guessBtn.style.display = "inline-block";
  feedback.style.display = "block";
  guessBox.value = 0;
  feedback.innerHTML = `Guess the mystery number from 1-100! <br>You have ${guessesAllowed} guesses. 2 guess penalty if you don't get it in 7 guesses.`;

  //optional:
  scoreBox.style.opacity = 1;
}

// The evalGuess function runs when the user clicks the GUESS button. This function gets the value from the input box and converts it to a real number using the Number() method.

/* 
- if the guess is too low, user gets feedback (too LOW) and guesses again
- else if the guess is too low, user gets feedback (too HIGH) and guesses again 
- else guess matches mystery number, so user is congratulated and GUESS button is replaced by PLAY AGAIN button
- user gets 7 guesses, which count down and are displayed with each guess
- when the user gets it right, the resetGame()
 function is called
 */
function evalGuess() {
  playerGuess = Number(guessBox.value); // get the guess from the input box
  guessesLeft--; // that's one less guess left

  if (guessesLeft == 1) {
    // if there's only one guess left
    guessOrGuesses = "guess"; // make it "1 guess left" not "1 guesses"
  }

  // evaluate the guess
  if (playerGuess < randNum) {
    feedback.innerHTML = `<p>Your guess is too low! <br>You have ${guessesLeft} ${guessOrGuesses} left!</p>`;
  } else if (playerGuess > randNum) {
    feedback.innerHTML = `<p>Your guess is too high! <br>You have ${guessesLeft} ${guessOrGuesses} left!</p>`;
  } else {
    if (guessesLeft == 6) {
      // if they got it on the first guess
      feedback.innerHTML = `<p>Amazing!!!<br>You got it on your first guess!<br>You mystery number is indeed ${randNum}! </p>`;
    } else {
      feedback.innerHTML = `<p>Congrats! The mystery number is ${randNum}! <br>You got it in ${
        7 - guessesLeft
      } guesses</p>`;
    }

    updateScoreResetGame();
    return;
  }

  if (guessesLeft == 0) {
    // if out of guesses, game over
    feedback.innerHTML =
      "<p>Nope! You are out of guesses!<br>GAME OVER! 2 guess penalty!</p>";
    penalty = 2;
    resetGame();
    // updateScoreResetGame();
    return; // exit function
  }
}

function resetGame() {
  guessesLeft = 7;
  guessBtn.style.display = "none";
  guessBox.style.display = "none";
  playBtn.style.display = "block";
  playBtn.textContent = "PLAY AGAIN";
  guessBox.value = 0;
}

// The updateScoreResetGame function is called when the player guesses correctly or when the player runs out of guesses. The function updates the score and resets all the values.
function updateScoreResetGame() {
  scoreBox.style.opacity = 1; // reveal score box

  let guessesAvg = Number(guessAvgSpan.innerHTML); // get the avg and convert to number
  let totGuesses =
    guessesAvg * totGames + guessesAllowed - guessesLeft + penalty;
  totGames++; // increment tot games played
  guessesAvg = totGuesses / totGames; // divite avg by tot games
  totGamesSpan.innerHTML = totGames;
  guessAvgSpan.innerHTML = guessesAvg.toFixed(3);

  // reset
  guessesLeft = 7;
  guessBtn.style.display = "none";
  guessBox.style.display = "none";
  playBtn.style.display = "inline-block";
  playBtn.textContent = "PLAY AGAIN";
  guessBox.value = 0;
  guessOrGuesses = "guesses";
  penalty = 0;
}
