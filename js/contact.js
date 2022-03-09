// Validation function
formBtn.addEventListener('click', () => {
    // Validation variables
    const formBtn = document.getElementById("formBtn");
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const address = document.getElementById("address").value;
    const number = document.getElementById("number").value;
    const message = document.getElementById("message").value;
    const formMsg = document.getElementById("form-error-msg");
    let error = false;

    // Regualar Expressions
    let numbers = /[0-9]/g;
    let emailRegEx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    if (name.length < 2 || name.match(numbers)) {
        error = true;
        formMsg.innerHTML = "Enter a valid name!";

    } else if (email.length < 6 || !email.match(emailRegEx)) {
        error = true;
        formMsg.innerHTML = "Enter a valid Email!";
        
    } else if (address.length < 2) {
        error = true;
        formMsg.innerHTML = "Enter a valid address!";

    } else if (number < 2 || isNaN(number)) {
        error = true;
        formMsg.innerHTML = "Enter a valid phone number!";

    } else if (message.length < 2 || !isNaN(message)) {
        error = true;
        formMsg.innerHTML = "Message cannot be blank!";
    }

    if (error) {
        formMsg.classList.add("visible");

        setTimeout(() => {
            formMsg.classList.remove("visible");
            error = false;
        }, 3000)
        
    } else {
        sessionStorage.setItem("usrName", name);
        location.href = 'contactMsg.html';
    }
});