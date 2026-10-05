// JSON stands for JavaScript Object Notation
// it is a way of representing data that is widely
// used on the web for sharing and loading data
// JSON data is structured as objects, looks just
// like regular JS objects, except the keys in JSON are
// strings.. unlike a true JS object, JSON is a string
// so, when you load JSON into a JS script, job 1 is
// to parse or convert the JSON from string to actual
// JS object

// dataset as an array of objects
const antiques = [
  {
    itemID: 1,
    picName: "tang0.jpg",
    dynasty: "Tang",
    category: "bronze",
    item: "statue",
    sold: true,
    price: 1000,
  },

  {
    itemID: 2,
    picName: "song0.jpg",
    dynasty: "Song",
    category: "ceramic",
    item: "bowl",
    sold: false,
    price: 1500,
  },

  {
    itemID: 3,
    picName: "ming0.jpg",
    dynasty: "Ming",
    category: "wood",
    item: "chair",
    sold: true,
    price: 2200,
  },
];

// print the following using object.property syntax
// console.log(antiques[0].item); // statue
// console.log(antiques[2].category); // wood
// console.log(antiques[0].dynasty); // Tang
// console.log(antiques[1].category); // ceramic
// console.log(antiques[2].item); // chair

// in JSON all the keys are in double quotes -- JSON values only get quotes if they are strings

const myJson = '{"result":true, "count":42}';
const myObj = JSON.parse(myJson);
console.log(myObj.count); // expected output: 42
console.log(myObj.result); // expected output: true

const myAntique =
  '{"itemID":1, "picName":"tang0.jpg", "dynasty":"Song", "category":"ceramic", "item": "bowl", "sold": false, "sold": 1500}';
console.log("myAntique:", myAntique); // this is a JSON string
console.log("myAntique.picName:", myAntique.picName); // as a string, it has no properties to access

// parse the JSON string into an object with JSON.parse()
const myAntiqueObj = JSON.parse(myAntique); // parse means to break into little pieces and separate
console.log("myAntiqueObj:", myAntiqueObj); // now this is an actual object with properties
console.log("myAntiqueObj.picName:", myAntiqueObj.picName); // we can now access the properties
console.log(myAntiqueObj.dynasty);
console.log(myAntiqueObj.category);
console.log(myAntiqueObj.item);
console.log(myAntiqueObj.sold);
// put the entire json string in backticks, so that you can hit enter and tab to make it more readable
const myJSONArr = `[ 
    { "itemID":1, "picName":"tang0.jpg", "dynasty":"Tang", "category":"ceramic", 
    "item": "camel", "sold":false, "sold": 1500 }, 
    
    { "itemID":2, "picName":"song0.jpg", "dynasty":"Song", "category":"ceramic", 
    "item":"bowl", "sold":true, "sold":2500 },
    
    { "itemID":3, "picName":"ming0.jpg", "dynasty":"Ming", "category":"wood", 
    "item":"chair", "sold":true, "sold":7500 }
    ]`;

console.log("myJSONArr:", myJSONArr);
console.log(myJSONArr[0].dynasty);
console.log(myJSONArr[1].item);
console.log(myJSONArr[2].category);

const objArr = JSON.parse(myJSONArr);
console.log("objArr:", objArr);
console.log(objArr[0].dynasty);
console.log(objArr[1].item);
console.log(objArr[2].category);

// loadJSON method to open the JSON file.
function loadJSON(path, success, error) {
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        success(JSON.parse(xhr.responseText));
      } else {
        error(xhr);
      }
    }
  };
  xhr.open("GET", path, true);
  xhr.send();
}

loadJSON("https://jsonplaceholder.typicode.com/posts", myData, "jsonp");

function myData(Data) {
  // Output only the details on the first post
  console.log(Data[0]);

  // output the details of first three posts
  console.log("First three posts");
  for (var i = 0; i < 3; i = i + 1) {
    console.log(Data[i]);
  }
  // output the id field of first five elements.
  console.log("First five ID");
  for (var i = 0; i < 5; i = i + 1) {
    console.log(Data[i].id);
  }
}
