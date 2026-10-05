// Lesson 08.02 - FINAL

// 8. We want to assign id's to all the p tags, so bring all
// three of them into JS at once with querySelectorAll('p').
// This will make an array of objects:

const pTagArr = document.querySelectorAll("p");

// 9. Log the array to see what we have. It's the actual p-tags:

console.log("pTagArr:", pTagArr);

// 10. Loop through the array, assigning each item --
// each paragraph object -- two listeners: one to call a function
// on mouseover, the other to call a function on mouseout.
// The function names are onMouseOver and onMouseOut, respectively:

for (let i = 0; i < pTagArr.length; i++) {
  pTagArr[i].addEventListener("mouseover", onMouseOver);
  pTagArr[i].addEventListener("mouseout", onMouseOut);

  // 11. Assign the dynamic id, property, which starts with parag
  // and adds in i, the loop counter variable:
  pTagArr[i].id = "parag" + (i + 1);
  // 12. Assign the dynamic className property, which assign
  // the existing **my-parag** class to the p tag element.
  // Log the item each time through the loop:
  pTagArr[i].className = "my-parag";
  console.log(pTagArr[i]);
}

// 13. Declare a few global variables:
// myInterval for stopping the **setInterval** method on mouseout
let myInterval;
// hoverSecs for timing how many seconds a p tag is hovered over
let hoverSecs = 0;
// reportArr an array for storing the hover time data
const reportArr = [];

// 14. Define the onMouseOver function.
// The first thing it does is instantiate a Date() object and call
// the getSeconds() method and save it to a variable called startSec.
// This returns the current time's seconds property.
// So if the time is now 1:23:45, startSec equals 45.

function onMouseOver() {
  // 15. We need to start a timer to see how long before the mouseout occurs,
  // so call the setInterval method and pass it an arrow function for its
  // callback. Set the whole expression equal to myInterval, so that later
  // we can use the variable to clear the interval:
  let startSec = new Date().getSeconds();
  console.log("startSec:", startSec);
  myInterval = setInterval(() => {
    // 16. Inside the callback function, declare a new instance of
    // Date().getSeconds(), and instruct the callback to repeat every
    // 1000 milliseconds:
    let newSec = new Date().getSeconds();
    // 17. Every 1 second, the callback function will run, with newSec
    // updated each time. To count the mouseover time, set hoverSecs
    // equal to newSec minus the original startSec. If this results in
    // a negative number due to seconds progressing from 59 to 0,
    // add 60 to the total. Log hoverSecs so that we see the hover
    // seconds updating every second:
    hoverSecs = newSec - startSec;
    // 18. Every minute the second counter reaches a maximum of 59
    // before restarting at 0. If this results in a negative hoverSecs,
    // add 60 to the total. Log hoverSecs so that we see the hover
    // seconds updating every second:
    if (hoverSecs < 0) hoverSecs += 60;
    console.log(hoverSecs);
  }, 1000);
}

// 19. Declare the onMouseOut function, which runs when the user
// mouses out (moves away from) a p tag. The first thing to do is
// stop the counter, which we do by passing the myInterval variable
// to the clearInterval method:

function onMouseOut() {
  clearInterval(myInterval);
  // 20. Log a message that tells how long the element of this
  // particular id was hovered over:
  console.log(`User hovered over ${this.id} for ${hoverSecs} seconds.`);
  // 21. Declare an object called reportObj, and assign it two properties:
  // elementID set equal to this.id, the id of the tag
  let reportObj = {
    elementID: this.id,
    hoverSeconds: totSecs,
  };
  // 22. Push the object into the **reportArr** array:
  reportArr.push(reportObj);
}

// 23. Get the button, which will listen for a click on itself and
// call the reportHoverTime function when clicked:
const reportBtn = document.querySelector("button");

// 24. Have the button listen for click upon itself and call the
// reportHoverTime function when the click occurs:
reportBtn.addEventListener("click", reportHoverTime);

// 25. Write the reportHoverTime function.
// All it does is log the reportArr array to the console:
function reportHoverTime() {
  console.log(reportArr);
}

// END: Lesson 08.02
