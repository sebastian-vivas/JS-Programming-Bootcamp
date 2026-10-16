const car = {
    make: "Ford",
    model: "Mustang GT",
    year: 1999, 
    color: "red",
    condition: "excellent",
    miles: 123456,
    onRoad: true,
    forSale: false,
};

const motorcycle = {

}

car.mpg = {city: 18, hwy: 25};
car.options = ["sun roof", "CD player", "leather seats"];

console.log(car);
console.log("MPG City:", car.mpg.city); // 18
console.log('Interior:', car.options[1]); // "cd player";

car.miles = 135790;
car.condition = "very good";
car.mpg.city = 17;
car.options[0] = "moon roof";
car.forSale = true;
console.log(car);

car.cylinders = 8;
car.liters = 4.6;
car.horsepower = 260;

car.engine = {cyl: 8, L: 4.6, hp: 260};

delete car.horsepower;
delete car.cylinders;
delete car.liters;
console.log(car)

car["consumer reviews"] = 234;
car["star rating"] = {rating: 4.7};
console.log(car);
console.log(car["star rating"].rating);

//  carReviewRatings.textContent = `${car["consumer reviews"]} ${car["star rating"]}`;


let num1 = 16000000;
console.log(num1.toLocaleString());

car.listForSale = function () {
    return `<strong>FOR SALE!</strong>
    ${this.year} ${this.make} ${this.model},
    only ${this.miles.toLocaleString()} miles,
    ${this.condition} condition.
    Loaded with options:<br>${this.options[0]}, ${this.options[1]}, ${this.options[2]} and much more.
    MPG: ${this.mpg.hwy} highway, ${this.mpg.city} city.
    Price negotiable.`;
}

const listForSale = car.listForSale();
console.log(listForSale);

const carTitle = document.getElementById("car-title");
const carMPG = document.getElementById("car-mpg");
const carEngine = document.getElementById("car-engine");
const carOptions = document.getElementById("car-options");
const carListing = document.getElementById("car-listing");
const carReviewRatings = document.getElementById("car-reviews-ratings");

document.body.onload = function () {
    carTitle.textContent = `${car.year} ${car.make} ${car.model}`;
    carMPG.textContent = `${car.mpg.hwy} ${car.mpg.city}`;
    carEngine.textContent = `${car.engine.L} ${car.engine.cyl} ${car.engine.hp}`;
    carOptions.textContent = `${car.options[0]} ${car.options[1]} ${car.options[2]}`;
    carListing.innerHTML = car.listForSale();
    carReviewRatings.textContent = `${car["consumer reviews"]} ${car["star rating"].rating}`;
}

const animalsMenu = document.getElementById("animals-menu");
const animalName = document.getElementById("animal-name");
const animalClass = document.getElementById("animal-class");
const continent = document.getElementById("continent");
const herbivore = document.getElementById("herbivore");
const animalPic = document.getElementById("animal-pic"); 

animalsMenu.addEventListener("change", displayAnimalInfo);

function displayAnimalInfo() {
    let selectedAnimal = animalsMenu.value;
    let animalObj = animals[selectedAnimal];

    animalName.textContent = selectedAnimal;
    animalClass.textContent = `Class: ${animalObj.class}`;
    continent.textContent = `Continent: ${animalObj.continent}`;
    herbivore.textContent = `Herbivore: ${animalObj.herbivore}`;
    animalPic.src = `images/${selectedAnimal.toLowerCase()}.jpg`;
}