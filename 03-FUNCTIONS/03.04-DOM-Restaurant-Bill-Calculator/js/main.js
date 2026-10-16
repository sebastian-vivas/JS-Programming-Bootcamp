let food = document.getElementById("food");
let bev = document.getElementById("bev");
let taxMenu = document.getElementById("tax-menu");
let tipMenu = document.getElementById("tip-menu");
let calcBtn = document.getElementById("calc-btn");
let response = document.getElementById("response");
let people = document.getElementById("numPeople");

calcBtn.addEventListener("click", calcBill);

function calcBill(event) {
    event.preventDefault();

    let foodTot = Number(food.value);
    let bevTot = Number(bev.value);
    let tipPct = 15;
    let taxPct = 8.875;
    let pplTot = Number(people.value);
    let perPerson = "";

    if (tipMenu.value != "choose") tipPct =  Number(tipMenu.value);
    if (taxMenu.value != "choose") taxPct =  Number(taxMenu.value);
    
    let subTot = foodTot + bevTot;
    let taxTot = subTot * taxPct / 100
    let tipTot = subTot * tipPct / 100
    let total = subTot + taxTot + tipTot;

    tipTot = tipTot.toFixed(2);
    taxTot = taxTot.toFixed(2);
    total = total.toFixed(2);

    if (pplTot > 0) {
        perPerson = `<br>Each of ${pplTot} pays: $${(total / pplTot).toFixed(2)}`;
    }

    let bill = `
        Food: $${foodTot}
        <br>Beverage: $${bevTot}
        <br>Sub-Total: $${subTot}
        <br>Tax Pct: ${taxPct}%
        <br>Tip Pct: ${tipPct}%
        <br>Tax: $${taxTot}
        <br>Tip: $${tipTot}
        <br>Total: $${total}${perPerson}`

    response.innerHTML = bill;
}