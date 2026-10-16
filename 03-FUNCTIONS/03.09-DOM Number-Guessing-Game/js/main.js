let randomNumber = 0;
let guessNumber = 0;
let guessCount = 7;
let totalGuesses = 0;
let totalGames = 0;

let playButton = document.getElementById("play-btn");
let guessButton = document.getElementById("guess-btn");
let resetButton = document.getElementById("reset-btn");
let guessInput = document.getElementById("num");
let feedback = document.getElementById("feedback");
let totalGamesSpan = document.getElementById("tot-games-span");
let guessAvgSpan = document.getElementById("guess-avg-span");

playButton.addEventListener("click", playGame);
guessButton.addEventListener("click", evalGuess);
resetButton.addEventListener("click", resetGame);
guessInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        evalGuess();
    }
});

function playGame() {
    randomNumber = Math.round(Math.random() * 100);
    console.log(randomNumber);
    guessInput.style.display = "inline-block";
    guessButton.style.display = "inline-block";
    feedback.style.display = "block";
    playButton.style.display = "none";
    feedback.textContent = "Guess the mystery number from 1-100!"
}

function evalGuess() {
    guessNumber = Number(guessInput.value);

    if (!guessNumber || guessNumber < 1 || guessNumber > 100) {
        feedback.textContent = "Please enter a number from 1 to 100.";
        return;
    }
    
    totalGuesses++
    guessCount--

    if (guessNumber < randomNumber) {
        if (guessCount === 1) {
            feedback.innerHTML = `Your guess is too low! <br> You have ${guessCount} guess left!`;
        } else {
            feedback.innerHTML = `Your guess is too low! <br> You have ${guessCount} guesses left!`;
        }
    } else if (guessNumber > randomNumber) {
        if (guessCount === 1) { 
            feedback.innerHTML = `Your guess is too high! <br> You have ${guessCount} guess left!`;
        } else {
            feedback.innerHTML = `Your guess is too high! <br> You have ${guessCount} guesses left!`;
        }
    } else {
        // Player wins
        feedback.innerHTML = `Congrats! The mystery number is ${randomNumber}`;
        guessButton.style.display = "none";
        resetButton.style.display = "inline-block";
        updateScores();
    }

    // Player loses
    if (guessCount <= 0) {
        guessButton.style.display = "none";
        resetButton.style.display = "inline-block";
        feedback.innerHTML = `Out of guesses! <br> The number was ${randomNumber}.`;
        updateScores();
    }
}

function resetGame() {
        guessCount = 7;
        guessInput.style.display = "none";
        guessButton.style.display = "none";
        feedback.style.display = "none";
        resetButton.style.display = "none";
        playButton.style.display = "inline-block";
        guessInput.value = "";
}

function updateScores() {
    totalGames++;
    totalGamesSpan.textContent = totalGames; 
    guessAvgSpan.textContent = (totalGuesses / totalGames).toFixed(2)
}