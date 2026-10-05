// Lesson 03.02 START

// function #1: greetWorld()

// 1. Add this function, and call it from the script (no button yet):

// greetWorld();

// 2. Comment out the function call since a button click is taking over.

// 3. Get the element `<button id="btn-1">greet world</button>` by id so that we can tell it to call the function. Save it to a variable so that we can tell it to call a function:

// 4. Also get the `<h2 id="output">output</h2>` tag to hold the output. Save it to a variable so that we can output our function results there:

// 5. Log `btn1` and `object` as well as and some properties:

// 6. Tell the `btn1` object to "listen" for a click upon itself and to call `greetWorld` when the click occurs.

// 7. Run the page and click the button. You should get the Hello World alert.

// The function works, so next let's have the output appear on the web page, rather than in a pop up.

// 8. In the function, comment out the alert and switch to displaying the message as the `textContent` property of the `output` tag:

// 9. Change the output to be a link, which necessitates a switch from *textContent* to *innerHTML*:

// function #2: greetByName()

// 10. Get the button `<button id="btn-2">greet by name</button>`:

// 11. Have the button "listen" for a click and call the function when the click occurs:

// 12. Write the function. Get the `values` of the text input fields, which have id's of `firstName` and `lastName`. The values are whatever the user typed:

// 13. Run the page and enter a first and last name.

// 14. Click the `greet by name` button. The personalized output should appear.

// function #3: pickFruit()

// 15. Get the select menu:

// 16. Tell it to listen for a `change` event. When it hears the change (to itself), it calls a `pickFruit` function:

// 17. Write the function:

// function #4: addNumbers()

// 19. Get the `add numbers` button and tell it to call a function when clicked:

// 20. Write the function. Get the values from the input boxes. Then add the numbers and concatenate the output:

// 21. Run the page. Enter two numbers and click the `add numbers` button.

// 22. Convert the numeric input to actual numbers so that the + adds them:

// 23. Run the page again. The math should work now.

// data- attribute
// You can attach additional data to any tag by adding a "data-name" attribute. The data is available in JS as: object.dataset.name

// 24. Comment out the select menu and "uncomment out" the other select menu--the one where each option has a data-food attribute:
/*
<select id="fruit-menu">
    <option value="choose">Pick a Fruit:</option>
    <option value="apple" data-food="apple sauce">Apple</option>
    <option value="banana" data-food="banana bread">Banana</option>
    - ETC -
</select>
*/

// options array
// The select object has an options property, which is an array.
// We will get into arrays in Unit 4, but for now, just know that an array is a variable that holds more than one item at a time. The items are stored by number, called index. We can look up an array item by index. When a menu choice is made, the object selectedIndex property is set with a number that corresponds to the option chosen. We can use that number to look up the selected option from the options array. Once we have that option, can access any `data-` attribute via the `dataset` property. We have an attribute data-food, the value of which is `dataset.food`

// Refactor the pickFruit function to include the food:

// 25. Save the we numeric index of the selected item to a variable. This simplifies the next line.

// 26. Get the selected option by its index in the options array. Save that to a variable `opt`:

// 27. get the value of the `data-food` attribute for the option:

// 28. Add the food to the output:
// output.textContent = `Your chosen fruit is: ${fruit}! Do you like ${food}?`;

// end function pickFruit()

// END LESSON 03.02

// NEXT LESSON 03.03
