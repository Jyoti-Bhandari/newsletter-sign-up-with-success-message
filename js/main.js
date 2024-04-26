const form = document.querySelector("form");
const container = document.querySelector(".container");
const email = document.getElementById("email");
const container_second = document.querySelector(".container-second");
const resetButton = document.getElementById("reset_button");
const errorText = document.querySelector("form .error-text");
const placeholder = document.createElement("style");
const submittedEmail = document.querySelector(".submitted-email");

placeholder.innerHTML = `::placeholder { color: var(--tomato); }`;

form.addEventListener("submit", function (e) {
    // e.preventDefault(): preventing from refreshing the page
    e.preventDefault();
    if (email.value.trim() === "") {
        // Empty email
        errorText.textContent = "Email cannot be empty";
        errorText.style.display = "block";
        email.style.border = "1px solid var(--tomato)";     //Added tomato border
        errorText.style.color = "var(--tomato)";     //Added tomato color
        document.head.appendChild(placeholder); // Append the style to head
    } else if (!validateEmail(email.value)) {
        // Invalid email format
        errorText.textContent = "Valid email requried";
        errorText.style.display = "block";
        email.style.border = "1px solid var(--tomato)";     //Added tomato border
        errorText.style.color = "var(--tomato)";     //Added tomato color
        email.style.color = "var(--tomato)";
    } else {
        // Valid email
        errorText.style.display = "none";
        email.style.border = "1px solid var(--grey)";        //Added grey border
        errorText.style.color = "#000";     //Added black color
        email.style.color = "#000";
        container.classList.add("hide");
        container_second.classList.remove("hide");
        submittedEmail.innerHTML = email.value;     // for submitted page email ID

        // Remove placeholder style from head if email is valid
        if (document.head.contains(placeholder)) {
            document.head.removeChild(placeholder);
        }
    }
})

resetButton.addEventListener("click", function () {
    container_second.classList.add("hide");
    container.classList.remove("hide");
    email.value = null;         // for removing the previous email ID
})


// regex expression function
function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}


