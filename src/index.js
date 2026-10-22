import "./styles/styles.css";

const email = document.getElementById("email");

email.addEventListener("input", (event) => {
    if (email.validity.typeMisMatch) {
        email.setCustomValidity("You must provide a real email address.");
    } else {
        email.setCustomValidity("");
    }
});
