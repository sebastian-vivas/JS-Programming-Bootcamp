/*

  Async patterns

  Callbacks
  Promises
  Async/Await
  Generators

*/

//callback patterns
function first() {
  console.log("first");
}

function executeMe(callback) {
  setTimeout(function () {
    callback();
  }, 1000);
}

function showMessage() {
  console.log("Hello");
}

function last() {
  console.log("last");
}
first();
executeMe(showMessage);
last();
