const submitForm = document.getElementById("js-form");
const firstNameInput = document.getElementById("js-firstName");
const lastNameInput = document.getElementById("js-lastName");
const emailAddressInput = document.getElementById("js-email");
const passwordInput = document.getElementById("js-password");
const submitSucess = document.getElementById("js-submitSucessfully");
let staFirstName,
    staLasName,
    staEmail,
    staPassword = false;
function fnPlaceholderDefault() {
    firstNameInput.setAttribute("placeholder", "First Name");
    lastNameInput.setAttribute("placeholder", "Last Name");
    emailAddressInput.setAttribute("placeholder", "Email Address");
    passwordInput.setAttribute("placeholder", "Password");
}

function validateInput(id_tag, nameTag, idMessage) {
    let input = document.getElementById(id_tag);
    let message = document.getElementById(idMessage);
    let msj, state;
    if (input.value === "" || input.value == null) {
        msj = nameTag + " cannot be empty";
        input.classList.add("error");
        nameTag == "Email Address"
            ? input.setAttribute("placeholder", "email@example/com")
            : input.setAttribute("placeholder", "");
        message.innerHTML = msj;
        state = false;

        return state;
    } else {
        if (nameTag == "Email Address") {
            emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
            if (emailRegex.test(input.value)) {
                msj = "";
                input.classList.remove("error");
                message.innerHTML = msj;
                state = true;

                return state;
            } else {
                msj = nameTag + " incorrect";
                input.classList.add("error");
                message.innerHTML = msj;
                state = false;

                return state;
            }
        } else if (nameTag == "Password") {
            numChar = input.value.length;
            if (numChar < 8) {
                msj = nameTag + " minimum 8 characters";
                input.classList.add("error");
                message.innerHTML = msj;
                state = false;

                return state;
            } else {
                msj = "";
                input.classList.remove("error");
                message.innerHTML = msj;
                state = true;

                return state;
            }
        } else {
            msj = "";
            input.classList.remove("error");
            message.innerHTML = msj;
            state = true;

            return state;
        }
    }
}

firstNameInput.addEventListener("keyup", function () {
    staFirstName = validateInput(
        "js-firstName",
        "First Name",
        "js-messageFisrtName"
    );
});
lastNameInput.addEventListener("keyup", function () {
    staFirstName = validateInput(
        "js-lastName",
        "Last Name",
        "js-messageLastName"
    );
});
emailAddressInput.addEventListener("keyup", function () {
    staEmail = validateInput("js-email", "Email Address", "js-messageEmail");
});

passwordInput.addEventListener("keyup", function () {
    staPassword = validateInput(
        "js-password",
        "Password",
        "js-messagePassword"
    );
});
submitForm.addEventListener("submit", function (e) {
    e.preventDefault();

    // fnEjecutarEventoKeyUp();
    staFirstName = validateInput(
        "js-firstName",
        "First Name",
        "js-messageFisrtName"
    );
    staLasName = validateInput(
        "js-lastName",
        "Last Name",
        "js-messageLastName"
    );
    staEmail = validateInput("js-email", "Email Address", "js-messageEmail");
    staPassword = validateInput(
        "js-password",
        "Password",
        "js-messagePassword"
    );

    if (staFirstName & staLasName & staEmail & staPassword) {
        submitSucess.classList.add("active");
        submitForm.reset();
        fnPlaceholderDefault();
        setTimeout(() => {
            submitSucess.classList.remove("active");
        }, 2000);
    }
});
