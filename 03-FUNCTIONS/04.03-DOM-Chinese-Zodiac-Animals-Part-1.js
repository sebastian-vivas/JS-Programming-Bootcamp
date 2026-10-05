// an array to hold the loaded JSON obj arr
const animalsJSON = `[
    { "eng": "rat", "chi": "shu", "pin": "la&#780;oshu&#780;", "year": 2020 },
    { "eng": "cow", "chi": "niu", "pin": "niu&#769;", "year": 2021 },
    { "eng": "tiger", "chi": "hu", "pin": "la&#780;ohu&#780;", "year": 2022 },
    { "eng": "rabbit", "chi": "tu", "pin": "tu&#768;zi", "year": 2023 },
    { "eng": "dragon", "chi": "long", "pin": "lo&#769;ng", "year": 2024 },
    { "eng": "snake", "chi": "she", "pin": "she&#769;", "year": 2025 },
    { "eng": "horse", "chi": "ma", "pin": "ma&#780;", "year": 2026 },
    { "eng": "goat", "chi": "yang", "pin": "ya&#769;ng", "year": 2027 },
    { "eng": "monkey", "chi": "hou", "pin": "ho&#769;uzi", "year": 2028 },
    { "eng": "chicken", "chi": "ji", "pin": "ji&#772;", "year": 2029 },
    { "eng": "dog", "chi": "gou", "pin": "gou&#780;", "year": 2030 },
    { "eng": "pig", "chi": "zhu", "pin": "zhu&#772;", "year": 2031 }
    ]`;

const animalsJSONObj = `{
    "rat": { "chi": "shu", "pin": "la&#780;oshu&#780;", "year": 2020 },
    "cow": {"chi": "niu", "pin": "niu&#769;", "year": 2021 },
    "tiger": {"chi": "hu", "pin": "la&#780;ohu&#780;", "year": 2022 },
    "rabbit": {"chi": "tu", "pin": "tu&#768;zi", "year": 2023 },
    "dragon": {"chi": "long", "pin": "lo&#769;ng", "year": 2024 },
    "snake": {"chi": "she", "pin": "she&#769;", "year": 2025 },
    "horse": {"chi": "ma", "pin": "ma&#780;", "year": 2026 },
    "goat": {"chi": "yang", "pin": "ya&#769;ng", "year": 2027 },
    "monkey": {"chi": "hou", "pin": "ho&#769;uzi", "year": 2028 },
    "chicken": {"chi": "ji", "pin": "ji&#772;", "year": 2029 },
    "dog": {"chi": "gou", "pin": "gou&#780;", "year": 2030 },
    "pig": {"chi": "zhu", "pin": "zhu&#772;", "year": 2031 }
    }`;

const animalsObj = JSON.parse(animalsJSONObj);
// alert(animalsObj.year);
console.log(animalsObj);
console.log(animalsObj.chicken);
// chicken: {chi: 'ji', pin: 'ji&#772;', year: 2029 }
console.log(animalsObj.cow.chi); // niu
console.log(animalsObj.tiger.pin); // la&#780;ohu&#780;
console.log(animalsObj.rabbit.year); // 2023
console.log(animalsObj.chi); // undefined
console.log(animalsObj.pin); // undefined
console.log(animalsObj.year); // undefined

// AJAX LOAD JSON
// function loadJSON() {

//     // 1.) instantiate an AJAX Obj
//     const xhr = new XMLHttpRequest()

//     // 4.) respond to server side events
//     xhr.onreadystatechange = function() {

//         // 5.) if data is loaded..
//         if(xhr.readyState == 4 && xhr.status == 200) {

//             // 6.) do something with loaded data
//             animals = JSON.parse(xhr.responseText)
//             outputAnimals()

//         } // end if

//     } // xhr.onreadystatechange

//     // 2.) open a server connection
//     xhr.open("GET", "json/zodiac-animals.json", true)

// 3.) send for the data
//xhr.send()

//} // end function loadJSON()

// runs once zodiac-animals.json is loaded, parsed and passed to animals array
function renderAnimals(arr) {
  const output = document.getElementById("output");
  // make a table one row per animal
  // but first, test to see if we have our data..
  // output.innerHTML = '<h1>' + animals[1].chi + '</h1>'

  let tbl = `<table width="100%" border="0px" 
                cellpadding="5px" align="center"
                style="background-color:#FFF">`;

  tbl += `<tr style="background-color:#CCC; 
                padding:10px; font-size:1.75rem">
                <td colspan="5" align="center">
                    <h2 style="color:#777">Chinese Zodiac Animals</h2>
                </td>
            </tr>`;

  tbl += `<tr style="background-color:#777; color:#DDD; 
                padding:10px; font-size:1.5rem">
                <th>Animal</th>
                <th>Pinyin</th>
                <th>Character</th>
                <th>Sound</th>
                <th>Years</th>
            </tr>`;

  // a loop to make 12 table rows, one per animal
  for (let i = 0; i < arr.length; i++) {
    tbl += `<tr>
                    <td>
                        <img src="images/animals/${arr[i].eng}.jpg"
                            width="125px" height="auto">
                        <br/>
                        <h3>${arr[i].eng}</h3>
                    </td>
                    <td>
                        <h2>
                            ${arr[i].pin}
                        </h2>
                    </td>
                    <td>
                        <img src="images/chars/char-${arr[i].chi}.jpg"
                            width="100px" height="auto">
                    </td>
                    <td>
                        <img src="images/sound-icon.png" width="35px" height="auto"          
                                onclick="playSound()" id="${
                                  arr[i].eng
                                }" style="cursor:pointer">
                    </td>
                    <td>
                        <h4 style='text-align:left'>
                            ${calculateYears(arr[i].year)}
                        </h4>
                    </td>
                </tr>`;
  } // end for loop
  tbl += `</table>`;

  output.innerHTML = tbl;
} // function renderAnimals()

// plays when any of the 12 sound icons is clicked
var sound = new Audio();

function playSound() {
  // play the correct sound for the clicked animal
  sound.src = "audio/" + event.target.id + ".mp3";
  sound.play();
} // function playSound()

function calculateYears(year) {
  let years = ""; // for concatenating years: "1988, 2000, 2012"
  // a loop that takes the active year, backs up a few centuries, and then runs a century or so into the future
  let startYr = year - 264; // back up 20 zodiac cycles
  let endYr = year + 156;

  for (let i = startYr; i <= endYr; i += 12) {
    if (i == year) {
      // if it's the active year, make it red
      years += '<span style="color:red">' + i + "</span>, ";
    } else if (i == endYr) {
      // if last year don't add a comma
      years += i;
    } else {
      // if it's neither of the above, add a comma
      years += i + ", ";
    }
  }
  return years;
}

renderAnimals(animals);
