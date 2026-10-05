// pass <div id="app"></app> to a JS Obj
let kinds = [2, 3, 4, 5, 6, 7, 8, 9, 10, "Jack", "Queen", "King", "Ace"];
let suits = ["Diamonds", "Clubs", "Hearts", "Spades"];
const deck = makeDeckOfCards(); // method returns a 52-item array of card objects
let speed = 1250;

function makeDeckOfCards() {
  let deckOfCards = [];

  for (let i = 0; i < kinds.length; i++) {
    // run this 13x
    for (let j = 0; j < suits.length; j++) {
      // run this 4x

      let valu = 0;

      if (kinds[i] == "Ace") {
        // is it an Ace?
        valu = 11;
      } else if (kinds[i].length > 3) {
        // "Jack", "Queen", "King"
        valu = 10;
        valu;
      } else {
        // It is a number
        valu = kinds[i];
      }

      let card = {
        name: `${kinds[i]} of ${suits[j]}`,
        file: `${kinds[i]}-of-${suits[j]}.png`,
        valu: valu, // 2-11
        kind: kinds[i],
        suit: suits[i],
      };

      deckOfCards.push(card);
    } // j for loop
  } // i for loop

  return deckOfCards;
} // end makeDeckOfCards() function

function shuffleTwice(arr) {
  arr.sort((a, b) => Math.random() - 0.5); // 1. randomize w sort() method

  for (let i = 0; i < arr.length; i++) {
    // 2. Fisher-Yates shuffle
    let temp = arr[i]; // current item
    let r = Math.floor(Math.random() * arr.length);
    arr[i] = arr[r];
    arr[r] = temp;
  } // end for

  return arr;
} // end shuffleTwice() function

console.log("\nunshuffled deck:\n", deck);

let shuffledDeck = shuffleTwice(deck);
console.log("\nshuffledDeck:\n", shuffledDeck);

// Spread Operator for copying shuffledDeck array 6x to shoe
const shoe = [
  ...shuffledDeck,
  ...shuffledDeck,
  ...shuffledDeck,
  ...shuffledDeck,
  ...shuffledDeck,
  ...shuffledDeck,
];

let shuffledShoe = shuffleTwice(shoe);
console.log("\nshuffledShoe:\n", shuffledShoe);

const dealBtn = document.getElementById("deal-btn");
dealBtn.addEventListener("click", deal);

const hitBtn = document.getElementById("hit-btn");
hitBtn.addEventListener("click", hit);

const standBtn = document.getElementById("stand-btn");
standBtn.addEventListener("click", stand);

enableDealDisableHitStand();

const outputH2 = document.querySelector("h2");
outputH2.textContent = "Place BET and click DEAL (min: $15, max: $300) ";

const betMenu = document.getElementById("bet-menu");
betMenu.addEventListener("change", bet);

const chipsBetBox = document.getElementById("chips-bet-box");
const chipsWonBox = document.getElementById("chips-won-box");

const chipsH1 = document.querySelector("h1");
let chips = 500;
setTimeout(() => {
  chipsH1.textContent = "Chips: $" + chips;
}, speed * 3);

const playerScoreBox = document.getElementById("player-score-box");
const dealerScoreBox = document.getElementById("dealer-score-box");
const playerCardsBox = document.getElementById("player-cards-box");
const dealerCardsBox = document.getElementById("dealer-cards-box");

let playerHand = [];
let dealerHand = [];
let playerScore = 0;
let dealerScore = 0;
let pAceScore = 0;
let dAceScore = 0;
let dealCount = 0; // for counting the 4 deal cards
let betAmt = 0;

let baseUrl = "images/cards350px/";
bet();

function disableDealEnableHitStand() {
  dealBtn.disabled = true;
  dealBtn.style.opacity = "0.5";
  hitBtn.disabled = false;
  hitBtn.style.opacity = "1";
  standBtn.disabled = false;
  standBtn.style.opacity = "1";
} // end disableDealEnableHitStand() function

function enableDealDisableHitStand() {
  dealBtn.disabled = false;
  dealBtn.style.opacity = "1";
  hitBtn.disabled = true;
  hitBtn.style.opacity = "0.5";
  standBtn.disabled = true;
  standBtn.style.opacity = "0.5";
} // end enableDealDisableHitStand() function

function bet() {
  console.log("bet()");
  // alert('bet()');

  chipsBetBox.innerHTML = "";

  console.log("bet: $" + betMenu.value);

  betAmt = Number(betMenu.value);
  let chipImgPath;

  // get the data- from the chosen menu option:
  let indx = betMenu.selectedIndex;
  let optn = betMenu.options[indx];
  let chipsData = optn.dataset.chips; // "100&50" (150)
  let chipsArr = chipsData.split("&"); // str to arr: ['100', '50']
  // OR all of the above in one line:
  // let chipsArr = betMenu.options[betMenu.selectedIndex].dataset.chips.split("&");
  console.log(chipsArr);

  let leftPos = 0;
  let bottomPos = 0;
  let chipInt;
  // iterate the array, make images, and output them to the existing chip divs
  // chipsArr.forEach((e, i) => {
  let chipIndx = 0;
  chipInt = setInterval(() => {
    let chip$ = chipsArr[chipIndx];
    let chip = new Image();
    chip.src = `images/chips/chip-${chip$}.png`;
    chip.style.zIndex = chipIndx + "";
    chip.style.width = "115px";
    chip.style.height = "115px";
    chip.style.position = "absolute";
    chip.style.left = leftPos + "px";
    chip.style.bottom = bottomPos + "px";
    // chip.style.transform = "perspective(120px) rotateX(20deg)";
    leftPos += 75;
    bottomPos -= 10;
    chipsBetBox.appendChild(chip);
    console.log(chip$);
    chipIndx++;
    if (chipIndx == chipsArr.length) {
      clearInterval(chipInt);
    }
  }, 500);
  // });
}

// deal() method called on click of DEAL button
function deal() {
  playerHand = []; // zero out / empty vars
  dealerHand = [];
  playerScore = 0;
  dealerScore = 0;
  pAceScore = 0;
  dAceScore = 0;
  dealCount = 0;
  playerCardsBox.innerHTML = ""; // clear / reset boxes
  dealerCardsBox.innerHTML = "";
  playerScoreBox.innerHTML = "";
  dealerScoreBox.innerHTML = "";
  outputH2.innerHTML = "Good Luck..!";

  // disable the input so player can't change their bet once the dealing starts
  // betMenu.style.opacity = 0.5;
  betMenu.style.backgroundColor = "white";
  betMenu.style.color = "#000";
  betMenu.disabled = true;
  // enableBetMenu();

  let myInterval = setInterval(() => {
    // deal 4 cards
    dealCount++;

    if (dealCount == 4) clearInterval(myInterval);
    let card = shuffledShoe.pop();
    let pic = new Image();

    if (dealCount != 2) {
      pic.src = `${baseUrl}${card.file}`;
    } else {
      // card 2, the dealer's first card, is the hidden hole card
      pic.src = `${baseUrl}0-Back-of-Card-Red.png`;
    }

    if (dealCount % 2 == 1) {
      // odd cards (1,3) go to player
      playerCardsBox.appendChild(pic);
      playerScore += card.valu;
      playerHand.push(card);

      if (card.kind == "Ace") {
        if (pAceScore == 0) {
          // if it's the first Ace
          pAceScore = 11;
        } else {
          // if it's a second Ace
          pAceScore++;
          playerScore -= 10;
        }
      }
    } else {
      //even cards (2,4) go to dealer
      dealerCardsBox.appendChild(pic);
      dealerScore += card.valu;
      dealerHand.push(card);
      if (card.kind == "Ace") {
        if (dAceScore == 0) {
          // if it's the first Ace
          dAceScore = 11;
        } else {
          // if it's a second Ace
          dAceScore++;
          dealerScore -= 10;
        }
      }
    }
  }, speed);

  setTimeout(() => {
    // post player score and what dealer shows
    playerScoreBox.textContent = "Player Score: " + playerScore;
    dealerScoreBox.textContent = "Dealer Shows: " + dealerHand[1].valu;
  }, speed * 4);

  setTimeout(() => {
    if (playerScore == 21 && dealerScore == 21) {
      // if player AND dealer have Blackjack:
      outputH2.textContent = "You both have Blackjack! It's a PUSH..";
      dealerCardsBox.children[0].src = `${baseUrl}${dealerHand[0].file}`;
      dealerScoreBox.textContent = "0. Dealer Score: " + dealerScore;
      enableBetMenu();
    } else if (playerScore == 21) {
      // if player only has Blackjack
      outputH2.textContent = "You have Blackjack! You WIN!!";

      chips += Number(betAmt) * 1.5; // Blackjack pays 3 to 2
      chipsH1.textContent = "Chips: $" + chips;
      enableBetMenu();
    } else if (dealerScore == 21) {
      // if dealer only has Blackjack
      outputH2.textContent = "Dealer has Blackjack! You LOSE!";

      chips -= Number(betAmt);
      chipsH1.textContent = "Chips: $" + chips;

      dealerScoreBox.textContent = "0. Dealer Score: " + dealerScore;
      dealerCardsBox.children[0].src = `${baseUrl}${dealerHand[0].file}`;
      enableBetMenu();
    } else {
      // if no one has Blackjack
      outputH2.textContent = "You have " + playerScore + ". Hit or Stand..?"; // prompt player to click btn
      disableDealEnableHitStand();
    }

    console.log("\nDealer Hand:\n", dealerHand);
  }, speed * 5);
} // end deal() function

function hit() {
  let card = shuffledShoe.pop();
  let pic = new Image();
  pic.src = `${baseUrl}${card.file}`;
  playerCardsBox.appendChild(pic);
  playerHand.push(card);

  if (card.kind == "Ace") {
    // if hit card is an Ace

    if (playerScore < 11) {
      // Ace counts 11 or 1, depending on player score
      playerScore += 11; // Ace counts as 11
      pAceScore += 11;
    } else {
      // Ace counts as 1
      playerScore++;
      pAceScore++;
    }

    playerScoreBox.textContent = "Player Score: " + playerScore;

    // if after getting Ace hit, player score is exactly 21
    if (playerScore == 21) {
      setTimeout(() => {
        outputH2.textContent = "You have 21.. Dealer's Turn..";
        stand(); // call stand function which plays out dealer's hand
      }, speed);
    } else {
      // if after getting Ace hit, player score is still less than 21
      setTimeout(() => {
        outputH2.textContent = "You have " + playerScore + ". Hit or Stand..?";
      }, speed);
    }
  } else {
    // it's not an Ace, so add the card value
    playerScore += card.valu;

    if (playerScore > 21) {
      // if hit card busts the player

      if (pAceScore > 10) {
        // if there's an "Ace 11"
        pAceScore -= 10; // "un-bust" the player
        playerScore -= 10;
      } else {
        // there is no "Ace 11" to "un-bust" player

        setTimeout(() => {
          outputH2.textContent =
            "You're Busted (" + playerScore + ")! You LOSE!";
          chips -= Number(betMenu.value);
          chipsH1.textContent = "Chips: $" + chips;
          enableBetMenu();
          enableDealDisableHitStand();
        }, speed);
      }
    } else if (playerScore == 21) {
      // if player score is exactly 21

      setTimeout(() => {
        playerScoreBox.textContent = "Player Score: " + playerScore;
        outputH2.textContent = "You have 21.. Dealer's Turn..";
        stand(); // call stand function which plays out dealer's hand
      }, speed);
    } else {
      // after hit, player score is still less than 21

      setTimeout(() => {
        outputH2.textContent = "You have " + playerScore + ". Hit or Stand..?"; // prompt player to click btn
      }, speed);
    }

    playerScoreBox.textContent = "Player Score: " + playerScore;
  }
}

function stand() {
  enableDealDisableHitStand();
  dealBtn.disabled = true; // don't enable DEAL button quite yet
  dealBtn.style.opacity = "0.5";

  setTimeout(() => {
    outputH2.textContent = "Dealer's turn..";
    dealerCardsBox.children[0].src = `${baseUrl}${dealerHand[0].file}`;
    dealerScoreBox.textContent = "Dealer Score: " + dealerScore;
  }, speed * 1.25);

  setTimeout(() => {
    // if dealer score < 17 (or if dealer has soft 17), dealer gets a card

    if (dealerScore < 17 || (dealerScore == 17 && dAceScore >= 11)) {
      outputH2.textContent = "Dealer Hits on " + dealerScore + "..";
      let card = shuffledShoe.pop(); // dealer's new card obj
      let pic = new Image(); // make a card image
      pic.src = `${baseUrl}${card.file}`;
      dealerCardsBox.appendChild(pic);
      playerHand.push(card);
      // check if card is an Ace, and if so, score it 11 or 1
      // depending on whether or not an 11 would bust the hand

      if (card.kind == "Ace") {
        // if hit card is an Ace
        // does Ace count as 11 or 1..? (you can't bust on a hit Ace)

        if (dealerScore < 11) {
          // if dealer's score is less than 11
          dealerScore += 11; // Ace counts as 11
          dAceScore += 11;
        } else {
          // dealer score is 11+
          dealerScore++; // Ace counts as 1
          dAceScore++;
        }

        // after "un-busting, does dealer get another card?
        if (dealerScore < 17 || (dealerScore == 17 && dAceScore >= 11)) {
          outputH2.textContent = "Ace! Dealer gets another card..";
          stand();
        } else {
          outputH2.textContent = "Ace! Dealer stands!";
          declareWinner();
        }

        dealerScoreBox.textContent = "Dealer Score: " + dealerScore;
      } else {
        // it's not an Ace, so add the card value
        dealerScore += card.valu;

        if (dealerScore > 21) {
          // if hit card busts the player
          // see if there's an existing "Ace 11" to "un-bust" the player
          if (dAceScore > 10) {
            dAceScore -= 10;
            dealerScore -= 10;
            dealerScoreBox.textContent = "Dealer Score: " + dealerScore;
            // after "un-busting, does dealer get another card?
            if (dealerScore < 17 || (dealerScore == 17 && dAceScore >= 11)) {
              // outputH2.textContent = "2. stand()";
              stand();
            }
          } else {
            // there is no "Ace 11" to "un-bust" player
            dealerScoreBox.textContent = "Dealer Score: " + dealerScore;
            outputH2.textContent =
              "Dealer Busted (" + dealerScore + ")! You Win!";
            enableBetMenu();

            chips += Number(betMenu.value);
            chipsH1.textContent = "Chips: $" + chips;
            enableDealDisableHitStand();
          } // if dealer can unbust, else busted

          // if dealer gets another card
        } else if (dealerScore < 17 || (dealerScore == 17 && dAceScore >= 11)) {
          dealerScoreBox.textContent = "Dealer Score: " + dealerScore;
          // outputH2.textContent = "3. stand()";
          stand();
        } else {
          // dealer does not get another card

          dealerScoreBox.textContent = "Dealer Score: " + dealerScore;
          if (dealerScore == 21) {
            outputH2.textContent = "Dealer has " + dealerScore + "..";
          } else {
            outputH2.textContent = "Dealer stands on " + dealerScore;
          }
          declareWinner(); // dealer doesn't get another card, so declare winner
        }
      }
    } else {
      // dealer does not get another card, so assess winner
      dealerScoreBox.textContent = "Dealer Score: " + dealerScore;
      declareWinner(); // dealer dealt at least a hard 17, so declare winner
    }
  }, speed * 2);
} // end stand() function

function declareWinner() {
  setTimeout(() => {
    // dealer does not get another card, so see who won:

    if (playerScore > dealerScore) {
      // if player won
      outputH2.textContent = "Congrats! You WIN..!";

      chips += Number(betMenu.value);
      chipsH1.textContent = "Chips: $" + chips;
    } else if (playerScore < dealerScore && dealerScore < 22) {
      // if dealer won
      outputH2.textContent = "Sorry! You LOSE..!";

      chips -= Number(betMenu.value);
      chipsH1.textContent = "Chips: $" + chips;
    } else {
      // playerScore == dealerScore, so it's a push
      if (dealerScore < 22) outputH2.textContent = "It's a PUSH..!";
    }

    enableDealDisableHitStand();

    // re-enable bet input box ahead of next hand
    // betMenu.style.opacity = 1;
    enableBetMenu();
  }, speed * 1.25);
} // end declareWinner() function

function enableBetMenu() {
  betMenu.style.backgroundColor = "#FFF";
  betMenu.style.color = "#555";
  betMenu.disabled = false;
}
