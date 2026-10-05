// Lesson 03.04 - START
// RESTAURANT BILL TAX AND TIP CALCULATOR

/* The restaurant bill calculator consists of a web form: - inputs for Food and Beverage Subtotals
- select menus for Tip and Tax percent
- Calculate button
- response h2 to display calculated result
*/

// 1. Get the form objects:
let foodBox = document.getElementById("food");
let bevBox = document.getElementById("bev");
let taxMenu = document.getElementById("tax-menu");
let tipMenu = document.getElementById("tip-menu");
let calcBtn = document.getElementById("calc-btn");
let response = document.getElementById("response");

// 2. Have the button listen for a click and call the calcBill function when it is clicked:
calcBtn.addEventListener("click", calcBill);

// 3. Write the function. First thing it does is prevent the form from doing a default page reload:

function calcBill(event) {
  event.preventDefault();
  let foodTot = Number(foodBox.value);
  let bevTot = Number(bevBox.value);
  let tipPct = Number(tipMenu.value);
  let taxPct = Number(taxMenu.value);
  let subTot = foodTot + bevTot;
  let taxTot = (subTot * taxPct) / 100;
  let tipTot = (subTot * tipPct) / 100;
  let total = subTot + taxTot + tipTot;
  tipTot = tipTot.toFixed(2);
  taxTot = taxTot.toFixed(2);
  total = total.toFixed(2);
  let bill = `Sub-total:  $ ${subTot}
    Tax Rate:   ${taxPct} %
    Tip Pct:    ${tipPct} %
    Tip:        ${tipTot} %
    Tax:        $ ${taxTot}
    TOTAL:      $ ${total}
    Thank you!`;
  // return bill;
  response.textContent = bill;
} // function end

/* 4. Next, get the values from the form. 
- If the user did *not* choose from the menu, we go with the default tip of 15% and the default tax rate of 8.875%. 
- Use the Number() method to convert the "number-like strings" to real numbers:
*/

// 5. Calculate the tip and tax from their percents. To do this, multiply `subTot` by the tip and tax rates, respectively. Divide by 100, because 15% has a numeric value of 0.15.

// 6. Add the tax and tip to the subtotal and round off `tipTot`, `taxTot` and `total` to two decimal places with `toFixed(2)`;

// 7. Concatenate a bill message and output it. The output includes `<br>` tags, so use `innerHTML` instead of `textContent`:

// Have the button listen for a click and call the calcBill function when it is clicked:

// Write the function. First thing it does is prevent the form from doing a default page reload:

// Next we get the values from the form. If the user did not choose from the menu, it goes with the default tip of 15% and the default tax rate of 8.875%.:

// // Calculate the tip and tax from their percents.

// // Add the tax and tip to the subtotal and round off the tip and total to two decimal places with toFixed(2);

// // Concatenate a bill message and output it;

// END LESSON 03.04

// NEXT: LESSON 03.05
