let loginBtn = document.getElementById("login-btn");
loginBtn.addEventListener("click", login);

let plsLogin = document.getElementById("pls-login");
let userBox = document.getElementById("username");
let pswdBox = document.getElementById("password");

let correctUser = "sebastian17";
let correctPswd = "123";

let response = document.getElementById("response");
let count = 0;

function login(event) {
    event.preventDefault();
    let inputUser = userBox.value.toLowerCase();
    let inputPswd = pswdBox.value;
    let maxAttempt = 3;
    if (count >= maxAttempt) return;

    if (inputUser === correctUser && inputPswd === correctPswd) {
        response.textContent = `Welcome, ${correctUser}`;
        userBox.style.display = "none";
        pswdBox.style.display = "none";
        loginBtn.style.display = "none";
        plsLogin.style.display = "none";
    } else {
        count++
        // count = count + 1
        response.textContent = `Log in failed. ${maxAttempt - count} tries left.`
        if (count === maxAttempt) {
            response.textContent = 'Too many attempts. Locked Out.';
        }
    }
}