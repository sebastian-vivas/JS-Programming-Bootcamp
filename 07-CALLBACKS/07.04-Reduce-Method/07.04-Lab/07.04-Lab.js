// 07.02 - Lab Exercises

// use reduce to get difference in total chars of the 'b' vs. 'c' veggies
// have reduce produce a string: 'The B veggies total 15 chars. The C veggies total 20 chars. 
// The C veggies have 5 more chars than the B veggies' 

const veggies = ['beet', 'carrot', 'peas', 'celery', 'cucumber', 'broccoli'];

In this next example, we will use map-into-filter to iterate an array of strings, and find each pair of consecutive items where the
total number of letters is 12 (Ex: "code" + "function" = 12). We will combine each 12-letter pair into a new camel-cased variable name: (Ex: "codeFunction"), and store each such string in a new array. This will require map to make the pairs and then filter to keep only the 12-character pairs. This is similar to what we did in the previous exercise with making 12-character fruit smoothies, except this time we are making camel-case combos AND using reduce as an alternative to map-into-filter.

Given an array of semi-random nouns:

```
    const words = ["forklift", "bale", "raindrop", "mule", "code", "function", "java", "fedora", "radio", "factoid", "raspberry", "fluke" "curveball", "fang", "boot", "fastball", "trap", "paperclip", "pin", "food", "gondola", "fist", "bulldog", "zebra", "fort", "kindling", "fur", "banana", "parrot", "bandana", "peach", "ostrich", "elephant", "iron", "skillet", "steel", "touchdown", "pen", "bicycle", "meter",
    "egret", "selfie", "vacuum", "gasoline", "rock", "laser", "elevator", "stallion", "fuse", "boat", "stapler", "fool", "cherry", "wisdom", "fund", "artichoke", "husk", "five", "book", "fan", "code", "function", "java", "fedora", "sparks", "radio", "saxophone", "cab", "fluke", "curveball", "cat", "slugfest", "fang", "javascript", "ax", "boot", "fastball", "truck", "apples", "banana", "blueberry", "cherry", "grape",
    "grapes", "garage", "gargoyle", "kiwi", "lemon", "orange", "doggie", "lime", "popsicle", "violin", "mango", "nectarine", "oranges", "peach", "bluebird", "plum", "zipper", "pear", "papaya", "pineapple", "raspberry", "turkey", "giblet", "zoo", "ibex", "cartoon", "bunny", "cutlass", "wagon", "strawberry", "echo", "eggplant", "iota", "umbrella", "toy", "tangerine", "watermelon", "ox", "parade"];
```

Since there are so many words, let's start with map to get rid of some of them. We will keep only those strings whose length plus the length of the next string equals 12.

The added challenge is, we need to capitalize the second word in each combo in order to have camel-case. There is no JS method for camel-casing a string, so to do this, we need to chop off the first character and capitalize that and then "glue" that back onto the rest of the word, which we obtain using the slice() method:

const dozenCamels = words.filter(function(e, i, a) {
    if((e.length + a[i+1].length) == 12) {
        // capitalize the second word
        let secondWord = a[i+1]; // pass second word to a var
        // capitalize the first character
        let firstChar = secondWord[0].toUpperCase();
        // obtain the rest of the word (from index 1) using slice()
        let restOfWord = secondWord.slice(1);
        // "glue" the two pieces back together
        let Word = firstChar + restOfWord; // the capitalized word
        console.log(Word)
    }
    return e + Word;
});

Chained Array Methods: map() into filter() … OR for to do it all in one array, use reduce()

// 


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
