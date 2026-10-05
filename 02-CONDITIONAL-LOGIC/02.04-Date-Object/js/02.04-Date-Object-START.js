// Lesson 02.04 - START

// Date Object
// Outputting date and time to the web page
// The Date Object returns the full date time from the user's computer
// it is instantiated (you declare a var of it) by using the new keyword

// 1.  Instantiate an instance of the Date object.
let dateTime;

// The individual time units are available by calling the Date object's many "get methods".

// 2. Get the current hour, minute and second:

let hour; // 0-23

// 3 Concatenate the time in 00:00:00 format
let timeIs; // 00:00:00

// If minute or second is less than 10, you get wonky output, such as 1:2:3 instead of 1:02:03. To fix this, add leading zeros to minute and second, as needed. This is done with conditional logic.

// 4. Add a leading 0 if minute and second is less than 10:

timeIs;

// console.log('timeIs w leading 0', timeIs); // 00:00:00

// If an if-statement has only one line of code inside its curly braces, you can omit the curly braces altogether and put everything on the same line.

// 5. Make these short if-statements even more concise by eliminating the curly braces:

console.log("timeIs w leading 0", timeIs); // 00:00:00

// converting military time to AM/PM

// The hour is from 0-23 ("military time"), so 3pm is 15:00 hours.
// To convert to AM/PM time, we need:
// - a variable to store "AM" or "PM".
// - some if-else logic:
// - If hour is less than 12, use AM.
// - If hour is equal to or greater than 12, use PM.
// - If hour is greater than 12, subtract 12.

// 6. Declare a variable for storing "AM/PM", and then do the if-statements that set the variable. We can start with 'AM' and switch to PM once it gets to noon:
let amOrPm;

timeIs;
console.log("time is: ", timeIs);

// "Timely Greeting"
// If the hour is less than 12 (noon), say "Good morning!"
// Else If the hour is less than 18 (6:00pm), say "Good afternoon!"
// Else, say "Good Evening!"

// Start the greeting with "Good" and then use += to concatenate the "timely" part.

// 7. Get a fresh hour, since our original hour may have already had 12 subtracted from it:
let hr;

// 8. Declare greeting with an initial value of 'Good', since all greetings start with that:
let greeting;

// 9. Do the logic for `hr < 12` (before noon):

// 10. Add an `else if` for  `hr < 18` (before 6pm). Follow that with an `else` that runs when `hr` is NOT less than 18:

console.log(greeting);

// the Timely Greeting:

// 11. Pair the greeting with the time of day in AM-PM format:
let timelyGreeting;

console.log(timelyGreeting);

// 12. Output the timelyGreeting to the web page. Start by getting the tag that will display the greeting:

// 13. Set the `textContent` property of the tag object to our `timelyGreeting`:

// The Date object's other time units can be used to concatenate and output today's date:

// 14. Get today's date:
let date;

// 15. Get the month, which is returned as a number from 0-11 (Jan = 0, Dec = 11):
let month;

// 16. Get the month as a string (January, February, etc). This gives us the flexibility to use the month as either a number or a day:
let fullMonth;
console.log("fullMonth", fullMonth);

// 17. Get the day of the week, which is a number, with Sunday=0 and Saturday=6:
let day;
console.log("day", day);

// 18. Make an array of the days of the week.
let daysArr = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

// 19. Look up the first item in the array (Sunday) by its index (0):
let Sun;
console.log("Sun", Sun); // Sun Sunday

// 20. Get the day of the week by looking it up index (number) in the array:
let dayOfWeek;
console.log("dayOfWeek", dayOfWeek); // string

// 21. Get the full 4-digit year:
let fullYear;

// 22. Concatenate today's date as `Day, Month Date, Year`, using the non-numeric day and month, e.g. `Tuesday, May 17, 2022`:

let todaysDate;

console.log("todaysDate", todaysDate); // string

// 23. Output today's date to its place on the web page:

// END LESSON 02.04

// NO LAB
// PROCEED DIRECTLY TO LESSON 03.01
