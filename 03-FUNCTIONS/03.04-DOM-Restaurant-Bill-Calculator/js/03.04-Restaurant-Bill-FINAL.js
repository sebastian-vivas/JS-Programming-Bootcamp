// Lesson 03.04 - FINAL
// RESTAURANT BILL TAX AND TIP CALCULATOR

/* 
The restaurant bill calculator consists of a web form: 
- inputs for Food and Beverage subtotals
- select menus for Tip and Tax percent
- a Calculate button to call the `calcBill` function
- an h2 to display the itemized bill made by the function
*/

// 1. Get the form objects:
let food = document.getElementById("food");
let bev = document.getElementById("bev");
let taxMenu = document.getElementById("tax-menu");
let tipMenu = document.getElementById("tip-menu");
let calcBtn = document.getElementById("calc-btn");
let response = document.getElementById("response");

// 2. Have the button listen for a click and call the calcBill function when it is clicked:

calcBtn.addEventListener("click", calcBill);

// 3. Define the function. First thing it does is prevent the form from doing a default page reload:

function calcBill(event) {
  event.preventDefault();
}

// 4. Next, get the values from the form.
// - Use the Number() method to convert the "number-like strings" to real numbers:

function calcBill(event) {
  event.preventDefault();

  let foodTot = Number(food.value);
  let bevTot = Number(bev.value);
  let tipPct = Number(tipMenu.value);
  let taxPct = Number(taxMenu.value);
  let subTot = foodTot + bevTot;
}

// 5. Calculate the tip and tax from their percents. To do this, multiply `subTot` by the tip and tax rates, respectively. Divide by 100, because 15% has a numeric value of 0.15.

function calcBill(event) {
  event.preventDefault();

  let foodTot = Number(food.value);
  let bevTot = Number(bev.value);
  let tipPct = Number(tipMenu.value);
  let taxPct = Number(taxMenu.value);

  // get a sub total by adding food and bev
  let subTot = foodTot + bevTot;

  // calc the tax and tip from their pcts
  let taxTot = (subTot * taxPct) / 100;
  let tipTot = (subTot * tipPct) / 100;
}

// 6. Add the tax and tip to the subtotal and round off `tipTot`, `taxTot` and `total` to two decimal places with `toFixed(2)`;

function calcBill(event) {
  event.preventDefault();

  let foodTot = Number(food.value);
  let bevTot = Number(bev.value);
  let tipPct = Number(tipMenu.value);
  let taxPct = Number(taxMenu.value);

  // get a sub total by adding food and bev
  let subTot = foodTot + bevTot;

  // calc the tax and tip from their pcts
  let taxTot = (subTot * taxPct) / 100;
  let tipTot = (subTot * tipPct) / 100;

  // add up the total:
  let total = subTot + taxTot + tipTot;

  // round off tip and total to 2 decimal places
  // do this AFTER all math is done, because toFixed()
  // converts the number to a string
  tipTot = tipTot.toFixed(2); // becomes a string
  taxTot = taxTot.toFixed(2); // becomes a string
  total = total.toFixed(2);
}

// 7. Concatenate a bill message and output it. The output includes `<br>` tags, so use `innerHTML` instead of `textContent`:

function calcBill(event) {
  event.preventDefault();
  let foodTot = Number(food.value);
  let bevTot = Number(bev.value);
  let tipPct = Number(tipMenu.value);
  let taxPct = Number(taxMenu.value);
  let subTot = foodTot + bevTot; // calc subtotal
  let taxTot = (subTot * taxPct) / 100; // calc tax
  let tipTot = (subTot * tipPct) / 100; // calc tip
  let total = subTot + taxTot + tipTot; // add up total
  // round off tip and tax to 2 decimal places
  taxTot = taxTot.toFixed(2); // becomes a string
  tipTot = tipTot.toFixed(2); // becomes a string
  total = total.toFixed(2);
  let bill = `
    ***JS BISTRO***
    <br>***GUEST CHECK***
    <br>Food: $${foodTot}
    <br>Beverage: $${bevTot}
    <br>Sub-Total: $${subTot}
    <br>Tax Pct: ${taxPct}%
    <br>Tax: $${taxTot}
    <br>Tip Pct: ${tipPct}%
    <br>Tip: $${tipTot}
    <br>***PLEASE PAY:***
    <br>TOTAL: $${total}
    <br>***THANK YOU!***`;
  // output the bill:
  response.innerHTML = bill;
} // function end

// Have the button listen for a click and call the calcBill function when it is clicked:

// Write the function. First thing it does is prevent the form from doing a default page reload:

// Next we get the values from the form. If the user did not choose from the menu, it goes with the default tip of 15% and the default tax rate of 8.875%.:

// // Calculate the tip and tax from their percents.

// // Add the tax and tip to the subtotal and round off the tip and total to two decimal places with toFixed(2);

// // Concatenate a bill message and output it;

// END LESSON 03.04

// NEXT: LESSON 03.05
