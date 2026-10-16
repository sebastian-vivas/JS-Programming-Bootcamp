const btn = document.querySelector("button");
const feedback = document.getElementById("feedback");
btn.addEventListener("click", calculateRent);

function calculateRent(event) {
    event.preventDefault();

    let bdrms = document.getElementById("bdrms").value;
    let baths = document.getElementById("baths").value;
    let doorman = document.getElementById("doorman");
    let parking = document.getElementById("parking");
    let view = document.getElementById("view");
    let gym = document.getElementById("gym");

    bdrms = Number(bdrms);
    baths = Number(baths);
    let rent = bdrms + baths;

    if (parking.checked) {
        rent += Number(parking.value);
    }

    if (doorman.checked) {
        rent += rent * Number(doorman.value);
    }

    if (view.checked) {
        rent += rent * Number(view.value);
    }

    if (gym.checked) {
        rent += Number(gym.value);
    }

    rent = Math.round(rent);
    feedback.textContent = `Your estimated rent is: ${rent}`
}