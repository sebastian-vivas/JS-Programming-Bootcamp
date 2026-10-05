// Lesson 04.04 - START
// string methods

// String methods are actions that are called on strings.

// string[index]
// With arrays, you get items by index.
// With strings you get *characters* by index:

let fruit = "cherry";
// get the first and third characters:

// string.length
// As with arrays, the length prpoerty of a string returns the number of items, in this case characters:

let password = "35khD%ewG@1";

// string.replace(a, b)
// The replace() method is called on a string. It takes two arguments:
// - what you want to replace
// - what you want to replace with

// It returns a new string, without changing the original. Change 'cherry' to 'berry':

// Change 'n' to 't' in an attempt to change 'banana' to 'batata' (a kind of sweet potato):

fruit = "banana";

// Notice that we only got 'batana', which means that the replace() method only changes the first occurrence of the target character(s).

// The replace() method can replace a space with a word. Turn 'fresh salad' into 'fresh garden salad':

// replaceAll()

// To replace all instances of a character, use replaceAll():

// includes()
// The includes() method takes a character(s) as its argument and returns true or false, based on whether or not the character(s) are in the string;

let bev = "papaya smoothie";

// indexOf()
// The indexOf() method takes a character(s) as its argument and returns the index of the first occurrence:

// lastIndexOf()
// The lastIndexOf() method takes a character(s) as its argument and returns the index of the last occurrence:

// If the char is not found in the string, indexOf returns -1:

// The indexOf() method is useful for finding the space between two words, which gives the length of the first word:

let appetizer = "fresh salad";

// slice()
// The slice() method returns a substring of the string it is called on, without changing the original string. It takes two arguments: a starting and an ending index. The end index is exclusive, meaning it is not included in the returned string. If the end index is omitted, it slices to the end.

let dynamicDuo = "Batman and Robin";

// indexOf() with slice()
// But what if we didn't know the length of the word. We would have to get the index of the first space and then use that as the end index:

let superCouple = "Superman and Lois Lane";

// To get 'Lois Lane', we could get the index of the first 'L' and then just slice to the end of the string:

// split()
// The split() method is called on a string and returns an array.

let movieQuote = "Show me the money";

// Notice that there is only one item in the resulting array. To have each word become an array item, pass the split() method the space between the words as its **delimiter**:

// toLowerCase()
// The toLowerCase() method is called on a string and returns an all-lowercase version of the string, without changing the original. Change the below to lowercase:

let newsFlash = "Yankees Win World Series";

// Let's combine some tools to change "Mets Win World Series" to the image filename that might go with a story like that: "mets-win-world-series.jpg"

let news = "Mets Win World Series";

// toUpperCase()
// The toUpperCase() method is called on a string and returns an all-uppercase version of the string, without changing the original:

let headline = "Jets Win Superbowl";

// toUpperCase() + slice() to capitalize a word**
// There is no method for capitalizing a word, but we can get the first character and uppercase that. We  also slice off the rest of the string, and then reconnect that part to the uppercased first letter.

// Get the first letter and uppercase it:

let firstName = "alexandria";

// Get the rest of the string:

// Connect the capitalized first letter with the rest of the string:
