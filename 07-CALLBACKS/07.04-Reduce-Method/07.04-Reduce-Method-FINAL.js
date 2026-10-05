// Lesson 07.01
// array.map() method
### array.filter() method
### chaining array methods

**array.map()**

About the **map()** method:
reduce()
// array.reduce() returns ONE value, which could be of any datatype
const costs = [89, 95, 99, 95, 19, 95, 39, 79]
// add these up

const totalCost = costs.reduce((sum, e) => {
return sum = sum + e;
});
console.log('totalCost:', totalCost);

// shorthand
const totCost = costs.reduce((sum, e) => sum += e);
console.log('totCost:', totCost);

const veggies = ['beet', 'carrot', 'bean', 'celery', 'cucumber', 'broccoli']

// use map to make new array of fresh veggies: ['fresh beet', 'fresh carrot', etc]
const freshVeggies = veggies.map(e => 'fresh ' + e)
console.log('freshVeggies:', freshVeggies);

// use filter to make new array containing only the veggies that start with 'c'
const veggiesC = veggies.filter(e => e[0] == 'c')
console.log('veggiesC:', veggiesC);

// use filter-into-map chaining to get array of 'fresh veggies' that start w 'b'
const freshVeggiesC = veggies.filter(e => e[0] == 'c').map(e => 'fresh ' + e)
console.log('freshVeggiesC:', freshVeggiesC);

// use reduce to add up the total number of chars of all the veggies ('beet' = 4, etc)
const totChars = veggies.reduce((sum, e) => {
return sum += e.length; 
}, 0) // 0 is the accumulator--it specifies the datatype of the thing you are making
console.log('totChars:', totChars);

// harder: use reduce to get difference in total chars of the 'b' vs. 'c' veggies
// have reduce produce a string: 'The B veggies total 15 chars. The C veggies total 20 chars. 
// The C veggies have 5 more chars than the B veggies' 

Array Method: Array.reduce()
reduce(), like map() and filter(), takes a function as its argument and runs that function on
each element, e, in the array upon which it is called. Recall that map returns an array with the same
number of items as in the original array, while filter returns an array with fewer items. But reduce
returns only ONE value, which can be of any datatype: number, string or even array. That one value
accumulates into the first argument of the function called by reduce, with the second argument
being e. The return value is also initialized as the second argument of the reduce() method itself,
passed in right after the function. Confused? Not to worry--it will become clear as we write our
examples. Just keep in mind for now that with reduce(), you get ONE value returned. Let’s call
reduce() on fruits, with the aim of adding up the total number of letters of all the fruits.
1. Make a new file called map-filter-reduce.js and add our familar fruits array:
const fruits = [”Apple”, “Banana”, “Mango”, “Orange”, “Peach”, “Pear”, “Plum”];
String Lengths: 5 6 5 6 5 4 4
Our reduce method will add up the lengths of all strings and return a SINGLE numeric value: 35.
We will add up that total and store it in a variable called tot. When its all done, we will return tot
Running Total: 5 11 16 22 27 31 35
(return value)
2. Call the reduce method on fruits. Our goal is to add up the total number of characters in all the
fruits, so our initial value is 0. With each iteration of the fruits array, we will add to our running total,
so the initial value of 0 will increase to 5 with Apple, then increase to 11 with Banana, then 16 with
Mango, etc. A variable argument will hold the running total. Leave the function blank to start:
const totChars = fruits.reduce((e) => { return });
3. Next, pass the reduce method its second argument, the starter value. The var for storing the
total also gets declared as an argument, together with, and right before e:
const totChars = fruits.reduce((tot, e) => { return }, 0);
4. Next, inside the function, increment tot by the length of the current string (Apple = 5, etc). This ill

// Pluralize fruits:
const fruit = ["apple", "apricot", "banana", "blueberry", "cherry",
"clementine", "dragonberry", "elderberry", "grape", "grapefruit", "kiwi",
"lemon", "lime", "mango", "nectarine", "orange", "papaya", "peach", "pear",
"pineapple", "plum", "pomegranate", "raspberry", "strawberry", "tangerine",
"watermelon"]
const fruityPlurals = fruit.map((e) => {
if(e[e.length-1] == "y") { // if fruit ends in "y"
let fruit = e.slice(0, e.length-1)
return fruit + "ies"
} else if(e[e.length-1] == "h" || e[e.length-1] == "o") {
return e + "es"
} else { // regular Plural form, just add “s”
return e + "s"
}
})
console.log(fruityPlurals)
Chained Array Methods: map() into filter() … OR for to do it all in one array, use reduce()
const words = ["forklift", "bale", "raindrop", "mule", "code", "function", "java",
"fedora", "radio", "factoid", "raspberry", "fluke", "curveball", "fang", "boot",
"fastball", "trap", "paperclip", "pin", "food", "gondola", "fist", "bulldog", "zebra",
"fort", "kindling", "fur", "banana", "parrot", "bandana", "peach", "ostrich",
"elephant", "iron", "skillet", "steel", "touchdown", "pen", "bicycle", "meter",
"egret", "selfie", "vacuum", "gasoline", "rock", "laser", "elevator", "stallion",
"fuse", "boat", "stapler", "fool", "cherry", "wisdom", "fund", "artichoke", "husk",
"five", "book", "fan", "code", "function", "java", "fedora", "sparks", "radio",
"saxophone", "cab", "fluke", "curveball", "cat", "slugfest", "fang", "javascript",
"ax", "boot", "fastball", "truck", "apples", "banana", "blueberry", "cherry", "grape",
"grapes", "garage", "gargoyle", "kiwi", "lemon", "orange", "doggie", "lime",
"popsicle", "violin", "mango", "nectarine", "oranges", "peach", "bluebird", "plum",
"zipper", "pear", "papaya", "pineapple", "raspberry", "turkey", "giblet", "zoo",
"ibex", "cartoon", "bunny", "cutlass", "wagon", "strawberry", "echo", "eggplant",
"iota", "umbrella", "toy", "tangerine", "watermelon", "ox", "parade"]
// In the words array, find each pair of consecutive items where the
total number of letters is 12 (Ex: "code" + "function" = 12). Combine
each 12-letter pair into a new hyphenated gibberish "word" (Ex: "codefunction"),
and store each such string in a new array. Make sure the
new array contains no empty strings or null items.
// Max characters allowed in your solution code: 140 (Tweet!)
// Solution using chained methods: map() into filter() :
const hyphos = words.map((e, i, a) => { return `${e}-$
{a[i+1]} }).filter(e => e.length == 13)
console.log("SOLUTION OUTPUT:\n" + hyphos)
Filtering based on object properties, example #1:
Get all the books w 3+ words in title into new array
const books = [
{ author: 'Albert Camus',
title: 'The Stranger'
},
{ author: 'Ernest Hemingway',
title: 'The Sun Also Rises'
},
!39
{ author: 'Mark Twain',
title: 'The Adventures of Huckleberry Finn'
},
{ author: 'Franz Kafka',
title: 'The Trial'
}
]
const titles = books.filter(e => {
let words = e.title.split(' ')
return words.length > 2
})
console.log("titles of more than 2-words:", titles)
Filtering based on object properties, example #2:
Get all the songs that start with the letter “P”
const songs = [
{ author: 'Billy Joel',
title: 'Piano Man'
},
{ author: 'Cheap Trick',
title: 'Dream Police'
},
{ author: 'Elton John',
title: 'Pinball Wizard'
},
{ author: 'Bob Seger',
title: 'Turn the Page'
},
{ author: 'Pink Floyd',
title: 'Pigs on the Wing'
}
]
const pSongs = songs.filter(e => e.title[0] == "P")
console.log(pSongs)
Filtering based on object properties, example #3:
Get all the vegetarian dinners that cost less than $10
const dinners = [
{ entree: 'Chicken with Waffles',
vegetarian: false,
price: 14
},
{ entree: 'Tofuburger',
vegetarian: true,
price: 8
},
{ entree: 'T-Bone Steak',
vegetarian: false,
price: 24
},
{ entree: 'Quinoa Casserole',
!40
vegetarian: true,
price: 14
},
{ entree: 'Lobster',
vegetarian: false,
price: 39
},
{ entree: 'Garden Salad',
vegetarian: true,
price: 9
}
]
const veg = dinners.filter(e => e.vegetarian == true && e.price < 10)
console.log(veg) // outputs the vegetarian entrees that cost less than
$10
/* SOLUTION OUTPUT:
forklift-bale,bale-raindrop,raindrop-mule,code-function,functionjava,
radio-factoid,boot-fastball,fastball-trap,paperclip-pin,bulldogzebra,
fort-kindling,banana-parrot,bandana-peach,peachostrich,
elephant-iron,skillet-steel,touchdown-pen,bicyclemeter,
selfie-vacuum,gasoline-rock,stallion-fuse,cherry-wisdom,codefunction,
function-java,fedora-sparks,saxophone-cab,curveballcat,
slugfest-fang,javascript-ax,boot-fastball,apples-banana,grapesgarage,
gargoyle-kiwi,orange-doggie,lime-popsicle,orangespeach,
bluebird-plum,turkey-giblet,cartoon-bunny,bunny-cutlass,cutlasswagon,
echo-eggplant,eggplant-iota,iota-umbrella,toytangerine,
watermelon-ox */
Above but with reduce()
With map you get a new array with the same number of items in the original array — the array
that has the map() method appended to it

flatten nested array of numbers and use reduce to find sum
const nestedArr = [1, [2, 3, null, 4], [null], 5];
const flatArray = nestedArr.flat();
console.log('flatArray:', flatArray);
//output: [1,2,3,4,5]\
const reducedArr = nestedArr.reduce((acc, val) => {
    if(acc != null) {
        return acc.concat(val);
    } 
}, []);
console.log('reducedArr:', reducedArr);

let fruits = ["apple", "banana", "orange"];

fruits.forEach(function (item, index, array) {
  console.log(item, index, array);
});

let foundIndex = fruits.findIndex(function (item, index, array) {
  return item === "banana"; //return the index of found item
});

let numberArray = [1, 2, 3, 4, 5];

let mappedArray = numberArray.map(function (item, index, array) {
  return item * 2;
});

let filteredArray = numberArray.filter(function (item, index, array) {
  return item <= 3;
});

let randomNumber = [2, 5, 6, 3, 7, 3, 4, 1, 3, 9, 2, 8, 6, 5, 4, 3];

/*
  2 - 5 = -3
  this means 2 will come before 5
*/
let sortedNumberV1 = randomNumber.sort(function (a, b) {
  return a - b;
});

let sortedNumberV2 = randomNumber.sort(function (a, b) {
  return b - a;
});

//reduce
let reduceV1 = numberArray.reduce(function (previousValue, currentValue) {
  return previousValue + currentValue;
});

let reduceV2 = numberArray.reduce(function (previousValue, currentValue) {
  return previousValue + currentValue;
}, 5);
