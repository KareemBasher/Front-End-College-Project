// Signup validation
signup.addEventListener("click", () => {
    const signup = document.getElementById("signup").value;
    const name = document.getElementById("pharmaName").value;
    const email = document.getElementById("email").value;
    email.toLowerCase();
    const password = document.getElementById("password").value;
    const confirmPass = document.getElementById("confirmPass").value;
    const formMsg = document.getElementById("form-error-msg");
    let error = false;

    // Regualar Expressions
    let upperCaseLetters = /[A-Z]/g;
    let numbers = /[0-9]/g;
    let whiteSpace = /\s/g;
    let emailRegEx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    if (name.length < 2 || name.match(numbers)) {
        error = true;
        formMsg.innerHTML = "Enter a valid name!";

    } else if (email.length < 6 || !email.match(emailRegEx)) {
        error = true;
        formMsg.innerHTML = "Enter a valid Email!";

    } else if (password.length < 6) {
        error = true;
        formMsg.innerHTML = "Password must be more that 6 charachters!";

    } else if (!isNaN(password)) {
        error = true;
        formMsg.innerHTML = "Password must contain letters, number, and special characters!";

    } else if (!password.match(upperCaseLetters)) {
        error = true;
        formMsg.innerHTML = "Password must contain at least one upper case letter!";

    } else if (!password.match(numbers)) {
        error = true;
        formMsg.innerHTML = "Password must contain at least one number!";

    } else if (password.match(whiteSpace)) {
        error = true;
        formMsg.innerHTML = "Password can not contain spaces!";

    } else if (confirmPass == '') {
        error = true;
        formMsg.innerHTML = "Please confirm your password!";

    } else if (confirmPass != password) {
        error = true;
        formMsg.innerHTML = "Passwords do not match!";

    }

    if (error) {
        formMsg.classList.add("visible");

        setTimeout(() => {
            formMsg.classList.remove("visible");
            error = false;
        }, 3000)

    } else {
        sessionStorage.setItem('email', email);

        // Encrypting Passwords before sending
        const passwordList = password.split('');
        let encrypted = "";
        passwordList.forEach(letter => {
            letter = letter.charCodeAt(0);
            letter += 10;
            encrypted += String.fromCharCode(letter);
        })

        sessionStorage.setItem('password', encrypted);
        location.href = "index.html";
    }
});