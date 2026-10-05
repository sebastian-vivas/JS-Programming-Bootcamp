  
        /*
        1. Make an **object** called **product** that includes the following **properties**:
        - **name** (string)
        - **price** (number)
        - **patented** (boolean)
        - **features** (array of three ites: waterproof, labor-saving, high-tech)
        - **batteries** (object with 3 properties: 
            - number
            - size (e.g. "A", "AA", "C", "D")
            - boolean (included)
        - **advertise** (method) that returns a string:
            **Get your patented, waterproof Wonder Widget! Only $29.95!(Size D batteries not included)**

        - Log the whole object, the last item in the **features** array and the **advertise** method.

        2. Make an array of the **product** object's keys, using the **Object.keys()** method.

        3. Make an array of the product object's values, using the **Object.values()** method.

        4. Given this object, **animal**: 

        // { animals: 'kangaroo', class: 'mammal', continent: 'Australia' }
        
        
        Make an array, **animals** that includes the object, plus six additional, animal objects, one per continent: *Australia, South America, North America, Europe, Asia, Africa, Antaractica*, with at least one representive from each of four classes: *bird, fish, mammal, reptile*. Then:
        - Log the whole array
        - Log the last animal object, using the length property
        - Log one individual property from each object in the array.

        5. Stringify the array of objects by passing it to the **JSON.stringify()** method, and log the result. You will know the result is in **JSON** format if all keys are in double quotes.

        6. Define a new empty object called **house**, with following properties: *bdrms, baths, "architectural style", hasGarage, sqft, color, acres*

        7. Add two more properties:
        - an array, **nonBdrms**, that contains several rooms that are NOT bedrooms
        - an object, owner, with a few properties of its own: name, age and job
        - Log the first and last item of each new item.

        8. Make a new object, dog, with properties *name, age, toys, owner, "cuteness rating", "favorite treat"*
        
        9. Log the following properties of **dog**:
        - dog: name, age, job, first toy, last toy, cuteness rating, favorite treat
        - owner: name, age, job, cuteness rating
        HINT: some logs are going to be **undefined**

            console.log(pet.name, pet.owner.name); // Bunny Alice
            console.log(pet.age, pet.owner.age); // 3 28
            console.log(pet.job, pet.owner.job); // undefined sales

            // square brackets for arrays:
            console.log(pet.toys[0]); // ball
            let toysLen = pet.toys.length-1; // 3
            console.log(pet.toys[0]); // ball of yarn
            console.log(pet.toys[toysLen-1]); // catnip

            // square brackets for keys with spaces:
            console.log(pet["cuteness rating"]); // 10
            console.log(pet['favorite treat']); // blueberries

        10. Give pet a method that returns a greeting: 
        'Woof! My name is Fido! I am a 3 years old! My favorite toy is my Frisbee! My human's name is Fred!"

        `Woof! My name is ${dog.name}! I am ${dog.age} years old! My butler's name is ${dog.owner.name}!`;'. Properties do not require their own line, so put the 
            // shorter ones on the same line:

            const dog = { name: 'Fido', age: 4, collar: true,  
                            owner: {name: 'Bob', age: 44, job: 'writer'},
                            greet: function() {
                                    return 'Woof!';
                                    }
            };

            console.log(dog);

        11. Call the method in two ways; directly log it and also save it to a variable, and then log the variable.
    
        // 2. Make an array of the product object's keys, using the Object.keys() method.

// ```
//     const productKeys = Object.keys(product);
//     console.log(productKeys);
//     // ['patent', 'name', 'toy', 'keywds', 'batteries', 'promote']
// ```

// 3. Make an array of the product object's values, using the Object.values() method.

// ```
//     const productValues = Object.values(product);
//     console.log(productValues);
//     // [8413579, 'Wonder Widget', false, Array(3), {…}, ƒ]
// ```

// 4. Given this object: 

//    {animal: 'kangaroo', class: 'mammal', continent: 'Australia'}

//     Make an array that includes the object, plus 6 additional, animal objects, one per continent: 
//         Australia, South America, North America, Europe, Asia, Africa, Antaractica, 
//     and at least one animal representing each of four classes: 
//         bird, fish, mammal, reptile
//      Then:
//     - Log the whole array.
//     - Log the last animal object, using the length property
//     - Log one individual property from each object in the array.

// ```
//     const animals = [
//         {animal: 'kangaroo', class: 'mammal', continent: 'Australia'},
//         {animal: 'pirana', class: 'fish', continent: 'S. America'},
//         {animal: 'penguin', class: 'bird', continent: 'Antarctica'},
//         {animal: 'giraffe', class: 'mammal', continent: 'Africa'},
//         {animal: 'polar bear', class: 'mammal', continent: 'N. America'},
//         {animal: 'Siberian tiger', class: 'mammal', continent: 'Asia'},
//     ];
//     console.log(animals);

//     console.log(animals[animals.length-1]);
//     // {animal: 'Siberian tiger', class: 'mammal', continent: 'Asia'}

//     console.log(animals[0].animal); // kangaroo
//     console.log(animals[1].class); // fish
//     console.log(animals[2].continent); // Antarctica
//     console.log(animals[3].animal); // giraffe
//     console.log(animals[4].class); // mammal
//     console.log(animals[5].continent); // Asia
// ```

// 5. Stringify the array of objects by passing it to the JSON.stringify() method and log the result. You will know result is in JSON format if all keys are in double quotes.

// ```
//     const animalsJSON = JSON.stringify(animals);
//     console.log(animalsJSON);
// ```

// Expected output:

// ```
//     [{"animal":"kangaroo","class":"mammal","continent":"Australia"},{"animal":"pirana","class":"fish","continent":"S. America"},{"animal":"penguin","class":"bird","continent":"Antarctica"},{"animal":"giraffe","class":"mammal","continent":"Africa"},{"animal":"polar bear","class":"mammal","continent":"N. America"},{"animal":"Siberian tiger","class":"mammal","continent":"Asia"}]
// ```
// You can declare a new empty object by setting it equal to empty curly braces.

// Declare a new, empty object and then give it a bunch of properties:

// ```
//     const QB = {};
//     // then, you can add properties to the object:
//     QB.team = "Bucs"; // QB is short for quarterback
//     QB.name = "Tom";
//     QB.number = 12;
//     QB.Yds = 84520;
//     QB.TD = 624; // TD is short for touchdown
//     QB.retired = true;
//     console.log(QB); // whole object
//     console.log(QB.name); // Tom
//     console.log('TD', QB.TD); // TD 624
// ```

// Give **QB** a method, called boast:

// ```
//     QB.boast = function() {
//         return `My name is ${this.name}! I have thrown for ${this.Yds} yards and ${this.TD} touchdowns, both of which are NFL career records!`
//     }
//     console.log(QB.boast());
// ```
// Make an array called professors and give it five items, each an object. The object keys and the data types of their values are: 

// - fName (string)
// - age (number) 
// - dept (string) 
// - tenure (boolean)

// ```
//     const professors = [
//         { fName: "Pam", age: 47, dept: 'English', tenure: true },
//         { fName: "Sam", age: 54, dept: 'Comp Sci', tenure: true },
//         { fName: "Cam", age: 47, dept: 'Poli Sci', tenure: false },
//         { fName: "Brian", age: 39, dept: 'Biology', tenure: false },
//         { fName: "Ryan", age: 45, dept: 'Drama', tenure: true },
//     ];
//     console.log(professors);
//     /*
//     0: {fName: 'Pam', age: 47, dept: 'English', tenure: true}
//     1: {fName: 'Sam', age: 54, dept: 'Comp Sci', tenure: true}
//     2: {fName: 'Cam', age: 47, dept: 'Poli Sci', tenure: false}
//     3: {fName: 'Brian', age: 39, dept: 'Biology', tenure: false}
//     4: {fName: 'Ryan', age: 45, dept: 'Drama', tenure: true}
//     */
//     console.log(professors[0].fName); // Pam
//     console.log(professors[1].age); // 54
//     console.log(professors[2].dept); // Poli Sci
//     console.log(professors[3].tenure); // true
//     console.log(professors[4]);
//     // { fName: "Ryan", age: 45, dept: 'Drama', tenure: true }
// ```

        */