let firstName = document.getElementById("firstName");
let email = document.getElementById("email");
let subscribeCB = document.getElementById("subscribe");
let feedback = document.getElementById("feedback");
let submitBtn = document.querySelector("button");

submitBtn.addEventListener("click", processForm)

function processForm(event) {
    event.preventDefault();

   if (!firstName.value || !email.value) {
       feedback.textContent = "Please enter name or email";
       return;
   }
    
    let msg = `Thank you ${firstName.value}!
    <br>Check ${email.value} for the link to download your Free eBook!<br>`;

    if (subscribeCB.checked) {
        msg += "<br>Thanks for subscribing to our newsletter!";
        // msg = msg + "<br>Thanks for subscribing to our newsletter!"
    }

    submitBtn.style.display = "none";
    feedback.innerHTML = msg;
}