// Lesson 06.04 - START

// 17. Get the elements that hold the interface:

// 18. Save the first item in the **abcs** array as its own array variable:

// 19. Loop through the array of **letters**:

// 20. Make a button object each time through the loop:
let btn;

// 21. Assign the **letter-btn** class to the button:

// 22. Assign an id to the button. This is the letter of the button, so the "A button" is has **id='a'**, and so on. We get the current letter by using **i** to look up that item in the letters array by index.

// 23. Label the button by setting its **textContent** property to the current letter, to uppercase:

// 24. Have the button call the function **makeWordBoxes**:

// 25. Output the button to the parent element div, **buttonsBox**:

// end loop

// 26. Declare the **makeWordBoxes** function. For openers, just have it log the id of the button, as **this.id**. Remember: inside a function **this** is the thing that called the function, in this case the button:
function makeWordBoxes() {
  // 27. Reload the browser, click a letter button, and check the console. The button's id should appear.

  // 28. Now for the actual code. Start by clearing **main** in case any lettered buttons are already there.

  // 29. Loop the **abcs** array. The counter **i** start at 1, since we want to skip the array of letters at index 0. We want the loop to only iterate over the word objects:

  // 30. In the loop, simplify the code by saving the current word object as **word**.

  // 31. Check if the first letter of the word (**word[0]**) matches the id of the clicked button (**this.id**):

  // 32. If the condition returns true, make a "word box", and assign it the divvy class:

  // 33. Output the **wordBox** div to **main**:

  // 34. Still inside the if statement, make a new image object:
  let pic;

  // 35. Concatenate the image's **src** property. The folder names are the letter to uppercase, followed by a lowercase "s": letters **As**, etc.:

  // 36. Ouput the image to the word box div:

  // 37. Still in the if statement, make an **input** object of type **search**:
  let inputBox;

  // 38. Assign the input box a **placeholder** that says *English* in Spanish and Chinese. This prompts the user to spell the word:
  inputBox.placeholder = "ingl\u00E9s 英文";

  // 39. Add the two listeners to the input box.

  // 40. Assign **word** as the id to the input box. With this, we will be able to check spelling by comparing the id of the box to what the user typed into the box:

  // 41. Output the input box to the div:
  wordBox.appendChild(inputBox);

  // end if

  // end for loop
} // end function makeWordBoxes()

// 42. Define the **checkSpelling** function:
function checkSpelling() {
  // 43. Compare **this.value** and **this.id**. If they are equal, the spelling is correct, so set the input box background to green and its text to white:
  // 44. Else, the spelling is wrong, so set the input background to red:
} // end function checkSpelling()

// 45. Save all and take it for a spin. It should work:
/*
- buttons should load the image packs for their respective letters 
- text boxes should turn green or red color you enter text and hit Enter or Tab
*/

// END: Lesson 06.04

// NEXT: Lesson 06.05
