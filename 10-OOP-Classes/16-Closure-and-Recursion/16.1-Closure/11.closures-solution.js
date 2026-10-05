// Closure
// "JavaScript variables can belong to the local or global scope. Global variables can be made local (private) with closures... JavaScript supports nested functions. Nested functions have access to the scope "above" them."

function outsideFunc(name) {
  let totalScore = 0;

  function scores(score) {
    totalScore += score;
    return `${name} scores ${score}`;
  }

  function totalScoreFunc() {
    return `${name} total scores is ${totalScore}`;
  }

  return {
    scores,
    totalScoreFunc,
  };
}

let callMeLater = outsideFunc("kobe");

callMeLater.scores(5);
callMeLater.scores(10);
callMeLater.totalScoreFunc();

// Q12: How would you use a closure to create a private counter?
/*
You can create a function within an outer function (a closure) that allows you to update a private variable but the variable wouldn't be accessible from outside the function without the use of a helper function.
*/

// their solution
function counter() {
  var _counter = 0;
  // return an object with several functions that allow you
  // to modify the private _counter variable
  return {
    add: function (increment) {
      _counter += increment;
    },
    retrieve: function () {
      return "The counter is currently at: " + _counter;
    },
  };
}

// error if we try to access the private variable like below
// _counter;

// usage of our counter function
var c = counter();
c.add(5);
c.add(9);

// now we can access the private variable in the following way
c.retrieve(); // => The counter is currently at: 14

// error if we try to access the private variable like below
// _counter;

// usage of our counter function
var c = counter();
c.setCounter(5);
c.setCounter(9);
// access the private variable in the following way
c.getCounter(); // => The counter is currently at: 14

// arrow function version
function counter() {
  var _counter = 0;
  // return an object with two functions that allow you
  // to set and get private _counter variable
  return {
    setCounter: (increment) => (_counter += increment),
    getCounter: () => "The counter is at: " + _counter,
  };
}

// error if we try to access the private variable like below
// _counter;

// usage of our counter function
var c = counter();
c.setCounter(5);
c.setCounter(9);
// access the private variable in the following way
c.getCounter(); // => The counter is currently at: 14
