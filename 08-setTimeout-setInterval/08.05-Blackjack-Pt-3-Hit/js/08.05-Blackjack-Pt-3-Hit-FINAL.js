// Lesson 08.05 - FINAL

// Blackjack - Pt. 3: Hit
// implementing the HIT button functionality
// evaluating Aces as worth either 11 or 1

// 1. Given: Arrays for making and storing the cards:
const kinds = [2, 3, 4, 5, 6, 7, 8, 9, 10, "Jack", "Queen", "King", "Ace"];
const suits = ["Diamonds", "Hearts", "Spades", "Clubs"];
const deck = [];

// 2. Review: Set up a nested for loop that iterates over
// the kinds and suits arrays:
for (let i = 0; i < kinds.length; i++) {
  for (let j = 0; j < suits.length; j++) {
    // 3. Simplify the current array items by passing them to variables:
    let kind = kinds[i];
    let suit = suits[j];

    // 4. Concatenate the card name and image file names:
    // - name "Queen of Diamonds" corresponds to file "Queen-of-Diamonds.png"
    let name = `${kind} of ${suit}`;
    let file = `${kind}-of-${suit}.png`;

    // 5. Declare a variable, valu, with an inital value of 0;
    // - valu is for storing the numeric value of the card
    let valu = 0;

    // 6. Set the valu property based on the kind of card
    // - the length of the kind string reveals if it is a face card
    // as only "Jack", "Queen", "King" have more than 3 characters
    if (kind.length > 3) {
      valu = 10;
    } else if (kind == "Ace") {
      valu = 11;
    } else {
      valu = kind;
    }

    // Review: Each card is an object with 5 properties:
    /* 
            - name: the name of the card: "Jack of Hearts"
            - file: the card file name: "Jack-of-Hearts.png"
            - kind: 2-10, 'Jack', 'Queen', 'King', 'Ace'
            - suit: 'Diamonds', 'Hearts', 'Spades', 'Clubs'
            - valu: numeric value; face card = 10, Ace = 11
        */

    // 7. Declare a card object with the 5properties, the values of which are
    // the 5 corresponding variables
    let card = { name: name, file: file, kind: kind, suit: suit, valu: valu };

    // 8. Push the card object into the deck array:
    deck.push(card);
  }
}

// 9. Review: Shuffle (randomize) the deck:
deck.sort((a, b) => {
  return Math.random() - 0.5;
});
console.log("shuffled deck: ", deck);

// 10. Review: Make a shoe consisting of 6 decks of cards, using the spread ... operator
const shoe = [...deck, ...deck, ...deck, ...deck, ...deck, ...deck];

// 11. Review: Shuffle (randomize) the shoe:
shoe.sort((a, b) => {
  return Math.random() - 0.5;
});
console.log("shuffled shoe: ", shoe);

// 12. Get the DOM elements:
// - Get the DEAL button and assign a listener for calling the deal function when clicked
// - Get the HIT and STAND buttons and assign them listeners to call their respective functions
// - Get the h2, which will be used for outputting prompts ("HIT or STAND?", etc.)
const dealBtn = document.getElementById("deal-btn");
dealBtn.addEventListener("click", deal);

const hitBtn = document.getElementById("hit-btn");
// 08.05 1. add HIT button listener
hitBtn.addEventListener("click", hit);

const standBtn = document.getElementById("stand-btn");
// 08.05 18. add STAND button listener
// standBtn.addEventListener('click', stand);
standBtn.addEventListener("click", stand2);

const outputH2 = document.querySelector("h2");

// 13. Get the divs that hold the player and dealer hands and
// that display the player and dealer scores
const playerCardsDiv = document.getElementById("player-cards-div");
const dealerCardsDiv = document.getElementById("dealer-cards-div");
const playerScoreDiv = document.getElementById("player-score-div");
const dealerScoreDiv = document.getElementById("dealer-score-div");

// 14. Declare global vars need for keeping track of the deal
// - arrays for holding player and dealer cards
// variables for keeping score:
// - dealCounter keeps track of total cards dealt
let dealCounter = 0;
let playerHand = [];
let dealerHand = [];
let playerScore = 0;
let dealerScore = 0;

// DEAL
// Now, that we have the shoe, let's deal a hand of Blackjack. We dealt a hand of
// poker in the earlier lesson where we made the deck of cards, BUT this will be
// different: to better emulate game play, we will use setInterval to deal on a
// 1-second delay between cards
// the deal consists of 2 hands -- player and dealer -- each of whom get 2 cards
// the dealer's first card is dealt face down -- the "hole card"

// 7. NEW Above the **deal()** function, declare these two variables,
// **pAceScore** (player Ace score) and **dAceScore** (dealer Ace score):
let pAceScore = 0; // player Ace score
let dAceScore = 0; // dealer Ace score

// 22. NEW Declare a variable called **holeCardPic**, but don't give it a
// value. This will be set equal to an Image object later.
let holeCardPic;

// 15. Define the deal function:
function deal() {
  // 16. Since this is a new hand, reset the scores and "clear the table"
  pAceScore = 0; // reset player Ace score
  dAceScore = 0; // reset dealer Ace score
  // - reset the counter variable that keeps track of cards dealt
  // = reset the player and dealer scores
  // - empty the divs that display the cards
  // - clear the arrays that store the player and dealer hands
  dealCounter = 0;
  playerScore = 0;
  dealerScore = 0;
  playerScoreDiv.innerHTML = "Player Score: 0";
  dealerScoreDiv.innerHTML = "Dealer Shows: 0";
  playerCardsDiv.innerHTML = "";
  dealerCardsDiv.innerHTML = "";
  outputH2.innerHTML = "";
  playerHand = [];
  dealerHand = [];

  // 17. Call the setInterval method with its callback function, set equal to a variable,
  // myInterval, which will be used to clear the interval (stop deal)
  let myInterval = setInterval(() => {
    // 18. Increment the counter that keeps track of how many card have been dealt
    dealCounter++;

    // 19. If this is the 4th card being dealt, clear the interval (stop the deal)
    if (dealCounter == 4) clearInterval(myInterval);

    // 20. Instantiate a new image object to hold the card image
    let pic = new Image();

    // 21. Pop a card object off the shoe array and save it as a new card
    let card = shoe.pop();
    // let card;

    /* Testing player-only blackjack */
    /*
        if(dealCounter == 1) { 
            card = {
                file: "Ace-of-Hearts.png",
                kind: "Ace",
                name: "Ace of Hearts",
                suit: "Hearts",
                valu: 11
            };
        // make dealer's second card, the visible card, a Queen
        } else if(dealCounter == 3) {
           card = {
                file: "Queen-of-Diamonds.png",
                kind: "Queen",
                name: "Queen of Diamonds",
                suit: "Diamonds",
                valu: 10
            };
        // make player's cards whatever gets popped off the shoe
        } else {
            card = shoe.pop();
        }
        */

    /* Testing dealer-only blackjack */
    // make dealer's hole card an Ace
    /*
        if(dealCounter == 2) { 
            card = {
                file: "Ace-of-Hearts.png",
                kind: "Ace",
                name: "Ace of Hearts",
                suit: "Hearts",
                valu: 11
            };
        // make dealer's second card, the visible card, a Queen
        } else if(dealCounter == 4) {
           card = {
                file: "Queen-of-Diamonds.png",
                kind: "Queen",
                name: "Queen of Diamonds",
                suit: "Diamonds",
                valu: 10
            };
        // make player's cards whatever gets popped off the shoe
        } else {
            card = shoe.pop();
        }
        */

    /* Testing both player and dealer blackjack */
    /*
        if(dealCounter < 3) {
            card = {
                file: "Ace-of-Hearts.png",
                kind: "Ace",
                name: "Ace of Hearts",
                suit: "Hearts",
                valu: 11
            };
        } else {
            card = {
                file: "Queen-of-Diamonds.png",
                kind: "Queen",
                name: "Queen of Diamonds",
                suit: "Diamonds",
                valu: 10
            };
        }
        */

    // 22. If this is not the 2nd card / 1st dealer card, set the image
    // source equal to the card image file path:
    if (dealCounter != 2) {
      pic.src = `images/cards350px/${card.file}`;

      // 23. ELSE if this IS the 1st dealer card; deal the "hole card"
      // face-down by setting its source equal to the back of the card image
    } else {
      pic.src = "images/cards350px/0-Back-of-Card-Red.png";
      holeCardPic = pic;
    }

    // 24. Set up an if-else statement to handle the logic for dealing two cards
    // each to player and dealer, starting with the player.
    // Th if condition uses the % mod operator to check the remainder
    // when the counter is divided by 2. If the remainder is 1, this is
    // the 1st or 3rd card, which goes to the player
    if (dealCounter % 2 == 1) {
      // 25. Output the card to the player's div
      playerCardsDiv.appendChild(pic);
      // 26. Push the card into the player's hand
      playerHand.push(card);

      // 12 NEW. If the **pAceScore** is *not* currently 0,
      // the player already has an Ace. A hand cannot have two "Ace 11's",
      // so this second Ace counts 1. Therefore, increase the **pAceScore**
      // to 12 AND decrease the value of the card to 1. This must be done
      // before "old step 27" which updates the player's score by adding
      // **card.valu** to it:
      if (card.kind == "Ace") {
        if (pAceScore == 0) {
          pAceScore = 11;
        } else {
          pAceScore = 12;
          card.valu = 1;
        }
      }
      console.log("pAceScore:", pAceScore);

      // 27. Increment the player's score
      playerScore += card.valu;
      playerScoreDiv.innerHTML = "Player Score: " + playerScore;

      // 28. Add the else part to handle cards dealt to the dealer
    } else {
      // 29. Make the dealer cards a bit smaller, to make them appear farther away
      // pic.style.width = "105px";
      // pic.style.height = "auto";
      // 30. Output the card to the dealer's div
      dealerCardsDiv.appendChild(pic);
      // 31. Push the card into the dealer's hand
      dealerHand.push(card);

      // 13 NEW: 13. The **else** part handles dealer Aces in the same way.
      // Add the if-else form the previous step between "old steps" 31 and 32.
      if (card.kind == "Ace") {
        if (dAceScore == 0) {
          dAceScore = 11;
        } else {
          dAceScore = 12;
          card.valu = 1;
        }
      }
      console.log("dAceScore:", dAceScore);

      // 32. Update the dealer's score
      dealerScore += card.valu;
    }

    // 33. Update "Dealer Show"s" once the deal ends--this is not
    // the dealer's score, just the value of the ONE card that IS showing
    // this value equals the dealer's score minus the value of the the hole card
    if (dealerHand.length == 2) {
      dealerScoreDiv.innerHTML =
        "Dealer Shows: " + (dealerScore - dealerHand[0].valu);
      // 34. Log the dealer's hidden hand and secret score to the console
      console.log("dealer hand: ", dealerHand, "dealer score: ", dealerScore);
      // 35. If no one has blackjack, deactivate the DEAL button so that it cannot be clicked again
      if (dealerScore != 21 && playerScore != 21) {
        // dealBtn.disabled = true;
        // 36. Mute the color of the DEAL button so that it looks unclickable
        // dealBtn.classList.add('disabled-btn');
        // 37. Un-mute the HIT and STAND buttons and set their disabled to false
        // the buttons appearance is handled by removing and adding classes
        // enableHitStandDisableDeal();
      }
      // 38. Prompt the player to "HIT or STAND?"..for better game play pacing,
      // do the prompt on a 15-second delay with setTimeout
      setTimeout(() => {
        if (playerScore != 21 && dealerScore != 21) {
          outputH2.innerHTML = "HIT or STAND?";
          // enableDealDisableHitStand();
        }
      }, 1500);
    }

    //40. Set the setInterval timer for the card dealing to repeat every 1 second:
  }, 1000);

  // 39. Check to see if either the player or dealer have Blackjack
  // Announce Blackjack on 1 second delay; if no one has Blackjack,
  // prompt player to HIT or STAND:
  setTimeout(() => {
    if (playerScore == 21 && dealerScore == 21) {
      outputH2.innerHTML = "You BOTH have Blackjack--It's a Push!";
      showHoleCard();
      enableDealDisableHitStand();
    } else if (playerScore == 21) {
      outputH2.innerHTML = "Blackjack! You Win!";
      enableDealDisableHitStand();
    } else if (dealerScore == 21) {
      outputH2.innerHTML = "Dealer has Blackjack! You Lose!";
      showHoleCard();
      enableDealDisableHitStand();
    } else {
      // no one has Blackjack
      outputH2.innerHTML = "Hit / Stand?";
      enableHitStandDisableDeal();
    }
  }, 6000);
} // end deal();

function showHoleCard() {
  setTimeout(() => {
    holeCardPic.src = `images/cards350px/${dealerHand[0].file}`;
  }, 1000);
}

// NEW for Lesson 08.05, the hit() function !!!

// 08.05 2. Define the hit() function:
function hit() {
  // 08.05 3. Pop a card off the shoe, and pass it to a local card object:
  let card = shoe.pop();
  // 08.05 4. The hit card needs to go on the table, so declare a new image object:
  let pic = new Image();
  // 08.05 5. Set the image source to the file property of the card object:
  pic.src = `images/cards350px/${card.file}`;
  // 08.05 6. Output the pic to the "table" (the player cards div):
  playerCardsDiv.appendChild(pic);

  playerScore += card.valu;

  // 08.05 7. Check if the Hit card is an Ace:
  if (card.kind == "Ace") {
    // 08.05 8. Check if the player score is less than 11;
    // if it is, increase pAceScore and playerScore by 11:
    if (playerScore < 11) {
      pAceScore += 11;
      // 08.05 9. else the player score was at least 11*before the hit,
      // so the "Hit Ace" value is 1. Increment pAceScore and playerScore by 1:
    } else {
      playerScore -= 10; // subtract 10 from player's score
      pAceScore++;
    }
  }

  // 08.05 10. Check if the hit card has busted the player.
  // This will only be possible if the hit card is not an Ace.
  if (playerScore > 21) {
    // 08.05 11. If the player's score is over 21 (busted), see
    // if the player has an "Ace 11" to "bail them out":
    if (pAceScore >= 11) {
      // 08.05 12. Inside the inner if, "un-bust" the player
      // by converting their "Ace 11" to a 1:
      pAceScore -= 10;
      playerScore -= 10;
    }

    // 08.05 16. where the player with Hit Ace has "un-busted",
    // handle a player score of 21 vs. less than 21
    if (playerScore == 21) {
      outputH2.innerHTML = "You have 21! Dealer's turn.";
      disableHitStand();
    } else {
      // player score is less than 21
      outputH2.innerHTML = "HIT or STAND..?";
      enableHitStandDisableDeal();
    }

    // 08.05 14. else if the player's score is exactly 21 following a
    // hit, announce the Dealer's turn and call the stand() function:
  } else if (playerScore == 21) {
    outputH2.innerHTML = "You have 21! Dealer's turn.";
    disableHitStand();
    stand2();
    // 08.05 15. else player still has less than 21 after having hit:
  } else {
    outputH2.innerHTML = "HIT or STAND..?";
    enableHitStandDisableDeal();
  }

  // 08.05 17. update the player's score display:
  playerScoreDiv.innerHTML = "Player Score: " + playerScore;
} // end hit() function

// 08.05 19. Define the stand() function:

function stand() {
  setTimeout(() => {
    outputH2.innerHTML = "Standing on " + playerScore + ". .. Dealer's turn..";
  }, 500);

  setTimeout(() => {
    // 08.05 20. reveal the hole card:
    outputH2.innerHTML = "Hole card is.. ";
  }, 2000);

  setTimeout(() => {
    // 08.05 20. reveal the hole card:
    outputH2.innerHTML += dealerHand[0].name + " .. Dealer has " + dealerScore;
    holeCardPic.src = `images/cards350px/${dealerHand[0].file}`;
    // 21. replace "Dealer Shows" with "Dealer Score"; also say it's the dealer's turn:
    dealerScoreDiv.innerHTML = "Dealer Score: " + dealerScore;
  }, 3000);

  setTimeout(() => {
    if (dealerScore < 17) {
      outputH2.innerHTML = "Dealer Must Hit on " + dealerScore;
    } else if (dealerScore == 17) {
      if (dAceScore >= 11) {
        dAceScore -= 10;
        dealerScore -= 10;
        outputH2.innerHTML = "Dealer Must Hit on Soft 17";
      } else {
        outputH2.innerHTML = "Dealer Stands on " + dealerScore;
        declareWinner(); // see who won
      }
    } else {
      outputH2.innerHTML = "Dealer Must hit on " + dealerScore;
    }
  }, 4000);
}

function declareWinner() {
  setTimeout(() => {
    if (playerScore > dealerScore) {
      outputH2.innerHTML = "You Win! Congrats!";
    } else if (playerScore < dealerScore) {
      outputH2.innerHTML = "Sorry! You Lose!";
    } else {
      // the scores are equal
      outputH2.innerHTML = "It's a Push..!";
    }
  }, 2000);
}

// 22. test the game; hit() and stand() should both be working, as expected

// END: Lesson 08.05
// NEXT: Lesson 08.06

function stand2() {
  // standing
  disableHitStand();

  // give dealer card IF dealerScore < 17 or if has soft 17
  setTimeout(() => {
    // start by revealing the hole card
    dealerCardsDiv.children[0].src = `images/cards350px/${dealerHand[0].file}`;
    dealerScoreDiv.innerHTML = "Dealer: " + dealerScore;
  }, 1250);

  setTimeout(() => {
    // if dealer has less than 17 or Soft 17, dealer gets another card
    if (dealerScore < 17 || (this.dealerScore == 17 && dAceScore >= 11)) {
      card = shoe.pop(); // dealer's new card obj
      let pic = new Image(); // make a card image
      pic.src = `images/cards350px/${card.file}`;

      // output the card pic to the dealer card box
      dealerCardsDiv.appendChild(pic);

      // check if card is an Ace, and if so, score it 11 or 1
      // if dealer card is an Ace
      if (card.kind == "Ace") {
        // check to see if Ace needs to be 11 or 1
        if (dealerScore < 11) {
          // make it an Ace 11
          dealerScore += 11;
          dAceScore += 11;
        } else {
          // score is too high for an Ace 11

          // make it an Ace 1
          dealerScore++;
          dAceScore++;
        }

        dealerScoreDiv.innerHTML = "Dealer: " + dealerScore;
      } else {
        // not an ace, so add num value,
        // but if dealer busts, check if dealer has an Ace 11 to reassign as Ace 1

        dealerScore += card.valu;

        // does the new card put the dealer's score over 21 (bust)?
        if (dealerScore > 21) {
          // if dealer has Ace 11, reassign it as Ace 1 to avoid busting
          if (dAceScore > 10) {
            dealerScore -= 10;
            dAceScore -= 10;

            // dealer has no Ace-11 to reassign and dealerScore > 21,
          } else {
            // dealer BUSTS
            outputH2.innerHTML = "Dealer Busted! You Win!";
            // this.myMoney += 10
            // this.moneyBox.innerHTML = '$' + this.myMoney
            dealerScoreDiv.innerHTML = "Dealer: " + dealerScore;
          }
        }

        dealerScoreDiv.innerHTML = "Dealer: " + dealerScore;
      } // not an Ace

      dealerScoreDiv.innerHTML = "Dealer: " + dealerScore;
    } // if dealer gets a card

    // dealer did not bust, but is done getting cards
    // this OR comparison says if dealer has more than 16 without an Ace 11
    // or if dealer has more than 17 with an Ace 11
    if (
      (dealerScore > 16 && dAceScore < 11) ||
      (dealerScore > 17 && dAceScore > 10)
    ) {
      // compare the 2 scores to see who won
      if (playerScore > dealerScore) {
        // if player score is higher

        outputH2.innerHTML = "You Win..!!";
        // this.myMoney += 10
        // this.moneyBox.innerHTML = '$' + this.myMoney
        dealerScoreDiv.innerHTML = "Dealer: " + dealerScore;

        // if the player score is less than a non-busting dealer score
      } else if (playerScore < dealerScore && dealerScore < 22) {
        // if dealer won

        outputH2.innerHTML = "You Lose..!";
        // this.myMoney -= 10
        // this.moneyBox.innerHTML = '$' + this.myMoney
        dealerScoreDiv.innerHTML = "Dealer: " + dealerScore;
      } else {
        // this.playerScore == this.dealerScore, so nobody won -- it's a tie
        if (dealerScore < 22) {
          outputH2.innerHTML = "Push..!";
          dealerScoreDiv.innerHTML = "Dealer: " + dealerScore;
        }
      }

      // no matter who won, enable-disable buttons for new game
      enableDealDisableHitStand();
    }

    // soft 17 msg
    if (dealerScore == 17 && dAceScore >= 11) {
      outputH2.innerHTML = "Dealer Has Soft 17";
    }

    // if after having gotten another card, dealer score is still
    //  either less than 17, or is Soft 17, have the function end by calling itself
    if (dealerScore < 17 || (dealerScore == 17 && dealerAceScore >= 11)) {
      stand2(); // a recursive function is a function that calls itself
    }
  }, 2500); // setTimeout
} // end stand2()

function enableDealDisableHitStand() {
  // alert('enableDealDisableHitStand');
  dealBtn.disabled = "false";
  dealBtn.style.opacity = "1";
  hitBtn.disabled = "true";
  hitBtn.style.opacity = "0.7";
  standBtn.disabled = "true";
  standBtn.style.opacity = "0.7";
}

function enableHitStandDisableDeal() {
  // alert('enableHitStandDisableDeal');
  dealBtn.disabled = "true";
  dealBtn.style.opacity = "0.7";
  hitBtn.disabled = "false";
  hitBtn.style.opacity = "1";
  standBtn.disabled = "false";
  standBtn.style.opacity = "1";
  dealBtn.disabled = true;
  // 36. Mute the color of the DEAL button so that it looks unclickable
  dealBtn.classList.add("disabled-btn");
}

function disableHitStand() {
  alert("disableHitStand/");
  hitBtn.disabled = "false";
  hitBtn.style.opacity = "1";
  standBtn.disabled = "false";
  standBtn.style.opacity = "1";
}
