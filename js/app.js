const backTopBtn = document.querySelector(".back-top");
const searchBar = document.querySelector(".search-bar-input");
const errorMsg = document.querySelector(".error-msg");
const btn = document.querySelector(".search-bar-submit");
const sections = document.querySelectorAll("li a");
const signedIn = sessionStorage.getItem("signedIn");
const elements = [];
const htmlFiles = {
    "home": "index.html",
    "eshfeny": "index.html",
    "contact": "contact.html",
    "login": "login.html",
    "signup": "signup.html"
};

// Creating a list with each element that could be scrolled to
sections.forEach(section => {
    elements.push(section.innerHTML.toLowerCase());
});

// Function for when the search button is clicked or the Enter key is hit
const btnClicked = () => {
    const searchVal = document.querySelector(".search-bar-input").value.toLowerCase();

    if (searchVal in htmlFiles) {
        location.href = htmlFiles[searchVal];
        
    } else if (elements.includes(searchVal)) {
        const element = document.getElementById(searchVal);

        scrollTo({
            top: element.offsetTop,
            behavior: 'smooth'
        });
        
    } else {
        errorMsg.classList.add("visible");

        setTimeout(() => {
            errorMsg.classList.remove("visible");
        }, 3000)
    }
}

// Event listener for clicking the button 
btn.addEventListener('click', btnClicked);

// Event listener for hiting the Enter key on the search bar
searchBar.addEventListener('keyup', e => {
    if(e.code === 'Enter') {
        btnClicked();
    }
});

// Function for the To Top arrow
const backTop = () => {
    document.addEventListener('scroll', () => {
        if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
            backTopBtn.classList.add('enable');
        } else {
            backTopBtn.classList.remove('enable');
        }
    });
}

backTop();

// Login state
const loggedIn = sessionStorage.getItem("loggedIn");
const logInMsg = document.getElementById("logged-in");

if (loggedIn) {
    logInMsg.classList.add("logged-in-visible");

    setTimeout(() => {
        logInMsg.classList.remove("logged-in-visible");
    }, 4000)
}