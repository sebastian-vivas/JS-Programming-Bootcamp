// Lesson 03.05 Final

// 1. Get the form input elements and have the button listen for a function:

let firstName = document.getElementById("firstName");
let email = document.getElementById("email");
let subscribeCB = document.getElementById("subscribe");
let feedback = document.getElementById("feedback");

let submitBtn = document.querySelector("button");
submitBtn.addEventListener("click", processForm);

// 2. Write the function, starting with the prevent default:

function processForm(event) {
  event.preventDefault();

  // 3. Get the inputted text values and concatenate the first part of the response message. Rather than pass the values to local variables, we can just concatenate directly:

  let msg = `Thank you ${firstName.value}!
    Check ${email.value} for the link to download your Free eBook!`;

  // 4. Evaluate the checkbox by seeing if its checked property returns true.
  // If it is checked, thank the user for subscribing. This gets added to the existing message with += :

  if (subscribeCB.checked) {
    msg += "\nThanks for subscribing to our newsletter!";
  }

  // 5. Hide the btn to make room for the output, and output the message:

  submitBtn.style.display = "none";
  feedback.textContent = msg;
}

// End Lesson 03.05
