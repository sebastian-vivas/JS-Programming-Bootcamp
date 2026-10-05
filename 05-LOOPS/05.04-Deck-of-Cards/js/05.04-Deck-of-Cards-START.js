// nested loop to make a deck of playing cards

// Next, we will use a nested loop to make a standard deck of 52 playing cards. Each card has two identifiers: a **kind** and a **suit**. We start with these as arrays of strings. We also need a new empty array to save the cards to.

const kinds = [
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "Jack",
  "Queen",
  "King",
  "Ace",
];
const suits = ["Diamonds", "Hearts", "Spades", "Clubs"];
const deck = []; // a new array to save the cards to

// Set up the nested loop, where the outer loop iterates over the **kinds** array, and the inner loop iterates **suits**:

// The outer loop runs 13 times, and the inner loop runs 4 times, for a total of 52 iterations (one for each card). Inside the inner loop, concatenate the card name, and push it into the deck. After the loop ends, log the deck to see what we get.

// deck of cards as an array of objects

// Declare a new, empty array to hold our 52 card objects.

// Set up the nested loop;

// Simplify the current array items by passing them to vars:

// Concatenate the name of the card and similarly named image file. The file name of the Queen of Diamonds is Queen-of-Diamonds.png.

// Declare a variable, **valu**, with an initial value of 0. This is for storing the value of each card, from 1-11 (for blackjack):

// Run an if-else-if-else block to set **valu** based on what kind of card it is. In blackjack, Aces have a starting value of 11 and the other cards equal their respective numbers.
// Ace starts out with value of 11
// "Jack", "Queen", "King"
// all face cards have a value of 10
// it's a number card: 2-10
// string to number

// Declare an object called **card** and assign it properties from the variables we have made. Finally, push the card object into the **deckOfCards** array:

// That completes the making of the deck of cards. Below the nested loop, output the deckOfCards, which is an array of 52 objects, each with five properties: name, file, kind, suit and valu.

// Ouputting cards to the DOM

// Let's deal a hand of 5-card poker. This will be the simplest implementation possible, meaning that there will only be one player hand dealt and all five cards will appear at once, without the benefit of a realistic-looking time delay between cards.

// Clicking the DEAL CARDS button will run a function which will rim a loop that chooses cards at random from the deck. The **file** property will be used to set the source of the image tags.

// Before we write the JS, have a look at the HTML:
/*
    <div id="card-box">
        <img src="../../images/cards350px/10-of-Diamonds.png">
        <img src="../../images/cards350px/Jack-of-Diamonds.png">
        <img src="../../images/cards350px/Queen-of-Diamonds.png">
        <img src="../../images/cards350px/King-of-Diamonds.png">
        <img src="../../images/cards350px/Ace-of-Diamonds.png">
*/

// We need a function that changes the source of these these five images files to randomly chosen cards.

// Get the DEAL CARDS button and tell it to run a function when clicked:

// Now for the function, which loops through the array of images:

// With each iteration of the loop we need to generate a random number in the range of the deck:

// Next, choose that random card from the deck. All we need is the file property, which is the file name:

// Set the source of the current image from

// To prevent the same card being dealt twice in the same hand, remove the dealt card from the deck with splice:
