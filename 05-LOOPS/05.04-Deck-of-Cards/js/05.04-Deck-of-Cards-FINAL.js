// Lesson 05.04 - FINAL
// Nested Loops to make Deck of Cards

// nested loop to make a deck of playing cards

// In this lesson we will use a nested loop to make a deck of cards from which we will deal a 5-card hand of poker.

// 1. Open **05.04-Deck-of-Cards.html** and see that it has a div of five image tags, under which is a DEAL CARDS button

// 2. Preview the html file in the browser. It's a 5-card hand of poker--a royal flush, no less.

// 3. Click the DEAL CARDS button. Five random cards replace the royal flush.

// 4. Open the **images** folder and click a card to see it.

// 5. Switch the html file to use START .js.

// 6. Open **05.04-Deck-of-Cards-START.js**. The **kind** and **suit** arrays are given, but we also need a new empty array to store the cards.

// 7. Declare a new empty array, called deck:

const kinds = [2, 3, 4, 5, 6, 7, 8, 9, 10, "Jack", "Queen", "King", "Ace"];
const suits = ["Diamonds", "Hearts", "Spades", "Clubs"];
const deck = [];

// We will begin by just making a deck of file names. Once we get that to work, we will upgrade the deck so that each card is an  object with several properties.

// 8. Set up a nested loop, where the outer loop iterates over the **kinds** array, and the inner loop iterates over **suits**:

for (let i = 0; i < kinds.length; i++) {
  for (let j = 0; j < suits.length; j++) {
    // 9. In the inner loop, concatenate the card file name, and push the result into the deck:
    let cardFileName = `${kinds[i]}-of-${suits[j]}.png`;
    deck.push(cardFileName);
  }
}

// 10. After the loop ends, log the deck to see what we get.
console.log(deck);

// deck of cards as an array of objects

// Let's run the nested loop again, but this time we will make each card an object, in which the file name is just one of several properties.

// 11. Declare a new, empty array to hold our 52 card objects.
const deckOfCards = [];

// 12. Set up the nested loop;
for (let i = 0; i < kinds.length; i++) {
  for (let j = 0; j < suits.length; j++) {
    // 13. Simplify the current array items by passing them to variables:
    let kind = kinds[i];
    let suit = suits[j];

    // 14. Concatenate the card and image file names. The "Queen of Diamonds" has a file name of "Queen-of-Diamonds.png":
    let name = `${kind} of ${suit}`;
    let file = `${kind}-of-${suit}.png`;

    // 15. Declare a variable, **valu**, with an inital value of 0;
    let valu = 0;

    // 16. Run conditional logic to set the valu property. Only "Jack", "Queen" and "King" have more than three characters, which is what **(kind.length > 3** checks for:
    if (kind == "Ace") {
      valu = 11;
    } else if (kind.length > 3) {
      valu = 10;
    } else {
      valu = kind;
    }

    // 17. Declare an object called **card**. Its properties equal the variables we have made:
    let card = { name: name, file: file, kind: kind, suit: suit, valu: valu };

    // 18. Push the card object into the deckOfCards array:
    deckOfCards.push(card);
  }
}

// 19. Below the nested loop, output the array of 52 objects:
console.log(deckOfCards);

// ouputting cards to the DOM

// Deal a hand of 5-card poker.

// 20. Get the button and tell it to run the function when clicked:
const btn = document.querySelector("button");
btn.addEventListener("click", dealCards);

// 21. Get the five images:

const imgArr = document.querySelectorAll("img");

// 22. Now for the function, which loops through the array of images:
/*
function dealCards() {
    for (let i = 0; i < imgArr.length; i++) {

            // 23. Each time the loop runs, generate a random number from 0-51:
            let r = Math.floor(Math.random() * deckOfCards.length);

            // 24. Get a random card from the deck:
            let card = deckOfCards[r];

            // 25. Set the src of the image in the imgArray by concatenating the file pate using the file property of the card object:
            imgArr[i].src = "images/" + card.file;

            // 27. Using the splice() method, remove the dealt card from the deck:
            deckOfCards.splice(r, 1);
    }
}
*/
// 26. Reload the page and click the DEAL CARDS button. Five new cards should appear.

// 28. Outside of the function, copy the array using slice(0), which returns a copy from index 0 to the end of the array:

let deckCopy = deckOfCards.slice(0);

// 29. Comment out the dealCards function, and rewrite it. Start with an if statement that makes a fresh copy if there are fewer than 5 cards left:

function dealCards() {
  if (deckCopy.length < 5) {
    deckCopy = deckOfCards.slice(0);
  }

  // 30. Switch to using deckCopy throughout; after each hand, log how many cards are left, so you can see when the card supply is replenished:
  for (let i = 0; i < imgArr.length; i++) {
    let r = Math.floor(Math.random() * deckCopy.length);
    let card = deckCopy[r];
    imgArr[i].src = "images/" + card.file;
    deckCopy.splice(r, 1);
  }
  console.log("Cards left:", deckCopy.length);
}

// 31. Rerun the page. Now you should be able to deal hands indefinitely, without ever running out of cards.

// END: Lesson 05.04
// NEXT: Lab 05.04
// Lesson 05.05
