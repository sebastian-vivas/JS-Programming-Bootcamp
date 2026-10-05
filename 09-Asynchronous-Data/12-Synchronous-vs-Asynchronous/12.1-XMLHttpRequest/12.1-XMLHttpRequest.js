const request = new XMLHttpRequest();
let catFactDiv = document.querySelector("#cat-fact");
let catFactButton = document.querySelector("#cat-fact-button");
let catFact = document.createElement("p");
//call this first
(function () {
  getRandomCatFact();
})();

//add event listener

function getRandomCatFact() {
  request.addEventListener("readystatechange", function (event) {
    if (event.target.readyState == 4 && event.target.status == 200) {
      const data = JSON.parse(event.target.responseText);

      catFact.id = "cat-fact-id";
      catFact.innerHTML = data.fact;
      catFactDiv.appendChild(catFact);
    }
  });

  request.open("GET", "https://catfact.ninja/fact");

  request.setRequestHeader("Content-type", "application/json");
  request.send();
}

catFactButton.addEventListener("click", function () {
  catFact.remove();
  getRandomCatFact();
});
