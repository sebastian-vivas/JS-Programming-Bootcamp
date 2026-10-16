const keyBox = document.getElementById("key-box");
const randPinBox = document.getElementById("rand-pin-box");
const container = document.querySelector(".container");
const spaceShip = document.getElementById("space-ship");

let leftPos = window.innerWidth / 2 - 100;
let bottomPos = -40;

// top or bottom
spaceShip.style.left = leftPos + "px";
spaceShip.style.bottom = bottomPos + "px";

let shipSpeed = 20;
let serif = false; 
let dark = false;

document.addEventListener("keyup", function (event) {
    keyBox.textContent = `Key: ${event.key}`;
})

document.addEventListener("keydown", respondToKeyPress);

function changeBackgroundColor(key) {
    let color;

    // if (key === "r") color = "red";
    if (key === "y") color = "yellow";
    if (key === "b") color = "blue";
    if (key === "w") color = "white";

    document.body.style.backgroundColor = color;
}

function respondToKeyPress(event) {
    if ( event.key === "b" || event.key === "y" || event.key === "w") {
        changeBackgroundColor(event.key);
    } else if (event.key === "d") {
        // toggle dark mode 
        if (dark) {
            container.classList.remove("dark-mode");
            container.classList.add("light-mode");
            dark = false;
        } else {
            container.classList.remove("light-mode")
            container.classList.add("dark-mode");
            dark = true
        }
    } else if (event.key === "f") {
        // toggle font 
        if (serif) {
            container.style.fontFamily = "sans-serif";
            serif = false;
            console.log(serif);
        } else {
            container.style.fontFamily = "serif";
            serif = true;
            console.log(serif);
        }
    } else if (event.key === "p" || event.key === "n") {
        let randomNumber = Math.floor(Math.random() * 10000);
        
        if (randomNumber < 10) { 
            randomNumber = "000" + randomNumber;
        } else if (randomNumber < 100) {
            randomNumber = "00" + randomNumber;
        } else if (randomNumber < 1000) {
            randomNumber = "0" + randomNumber;
        }
       
        randPinBox.innerHTML = "PIN:<br>" + randomNumber;

    } else if (event.key === "ArrowLeft") {
       // move ship left
       if (leftPos > 0) {
            leftPos = leftPos - 20;
            spaceShip.style.left = leftPos + "px";
       }
    } else if (event.key === "ArrowRight") {
       // move ship right
       if (leftPos < window.innerWidth - 310) {
            leftPos = leftPos + 20;
            spaceShip.style.left = leftPos + "px";
       } 
    } else if (event.key === "ArrowUp") {
        if (bottomPos + shipSpeed < window.innerHeight - 256) {
            bottomPos += shipSpeed;
            spaceShip.style.bottom = bottomPos + "px";
        }
    }
}