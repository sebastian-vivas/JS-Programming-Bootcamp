**IIFE (Immediately Invoked Function Expression)**

An **IIFF** is a function that is executed once, automatically, as soon as the script runs. It does not need to otherwise be called and it can only be run once. A "normal" function definition can be converted into an IIFE by wrapping the function in parentheses and following that with a pair of empty parentheses.

Let's define a "normal" function, one that would have to be called in order to run, and then convert it to an IIFE.

13. Run these tests of IIFE at the end of the script (and comment them all out when we're done):

```
  function sayHi(name) {
    return `Hi, ${name}!`;
  }
```

14. Run the page. The sayHi() function doesn't run, because it has not been called.

15. Call the function; save the return value to a var and then log it:

```
  let greeting = sayHi('Brian');
  console.log(greeting); // Hi, Brian!

```

16. Run the page again. The function runs this time, because is was called.

17. Call the function again. It works:

```
  let greeting = sayHi('Brian');
  console.log(greeting); // Hi, Brian!
  let greeting2 = sayHi('Max');
  console.log(greeting2); // Hi, Max!
```

18. Now, try an an IIFE. Declare another function; wrap it all in parentheses and then follow it with another pair of parentheses.

```
  (function sayHelloFromIFFE() {
    console.log('Hello from the IFFE function!');
  })();
```

19. Load the page in the browser and check the console. The IFFE function ran automatically.

20. IFFE functions can take parameters and arguments. Define another that takes a param and expects an arg:

```
  (function greetUser(user) {
    console.log('Welcome ' + user);
  })('Pijiu8');
```

21. Reload the page in the browser and check the console. The new IFFE function ran automatically and used the param: _Welcome Pijiu8_.

An IIFE cannot be called again. Try it.

22. Call the IIFE, reload and check the console. The function call is ignored:

```
  (function greetUser(user) {
    console.log('Welcome ' + user);
  })('Pijiu8');

  greetUser('Regou8'); // function call ignored
```
