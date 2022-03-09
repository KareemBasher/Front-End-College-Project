let loggedIn = false;

// Creating an object that includes all the accounts with emails and passwords
let encrypted = sessionStorage.getItem("password");
const email = sessionStorage.getItem("email");
let accounts = {};
accounts[email] = encrypted;

// Login validation
login.addEventListener("click", () => {
    const login = document.getElementById("login");
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const formMsg = document.getElementById("form-error-msg");
    let error = false;

    // Password encryption
    const passwordList = password.split('');
    let encrypted = "";
    passwordList.forEach(letter => {
        letter = letter.charCodeAt(0);
        letter += 10;
        encrypted += String.fromCharCode(letter);
    })

    if (!email in accounts) {
        error = true;

    } else if (encrypted != accounts[email]) {
        error = true;
    }

    if (error) {
        formMsg.innerHTML = "Email or password are incorrect!";
        formMsg.classList.add("visible");

        setTimeout(() => {
            formMsg.classList.remove("visible");
            error = false;
        }, 3000)

    } else {
        loggedIn = true;
        sessionStorage.setItem("loggedIn", loggedIn);
        location.href = 'index.html';
    }
});
