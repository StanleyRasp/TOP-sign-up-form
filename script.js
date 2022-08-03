let password = document.querySelector("#password");
let confirmPass = document.querySelector("#confirm-pass");
let passwordMatchingText = document.querySelector(".password-matching-text");
let submitButton = document.querySelector(".submit-button");

let passwordsMatch = false;

function checkPasswordValidity(){
    if (password.value != confirmPass.value){
        password.classList.add("error")
        confirmPass.classList.add("error")
        passwordMatchingText.style.display = "block";
        passwordsMatch = false;
    } else {
        password.classList.remove("error")
        confirmPass.classList.remove("error")
        passwordMatchingText.style.display = "none";
        passwordsMatch = true;
    }
}

let inputs = document.querySelectorAll("input");

for (let input of inputs){
    input.addEventListener("input", () => {
        checkPasswordValidity();
        if (!input.checkValidity()) {
            input.classList.add("invalid");
        } else {
            input.classList.remove("invalid");
        }
    })
}

submitButton.addEventListener("click", (event) => {
    let formValid = true;
    for (let input of inputs){
        if (!input.checkValidity()) {
            formValid = false;
            break;
        }
    }
    if (formValid && passwordsMatch) document.querySelector("form").submit();
})