

const pwdField = document.getElementById("pwd"),
    confirmField = document.getElementById("confirm-pwd"),
    emailField = document.getElementById("email"),
    telField = document.getElementById("phone"),
    form = document.getElementById("sign-up");

const pwdErrorMsg = document.getElementById("error-msg-pwd"),
    emailErrorMsg = document.getElementById("error-msg-email"),
    telErrorMsg = document.getElementById("error-msg-phone");

confirmField.addEventListener("focusout", checkPassword);
confirmField.addEventListener("focus", () => confirmField.parentElement.classList.remove("error"));

emailField.addEventListener("focusout", checkEmail);
emailField.addEventListener("focus", () => emailField.parentElement.classList.remove("error"));

telField.addEventListener("focusout", checkTel);
telField.addEventListener("focus", () => telField.parentElement.classList.remove("error"));

form.addEventListener("submit", submitForm);

function checkPassword(){
    let match = pwdField.value === confirmField.value;
    if(confirmField.value == ""){
        return;
    }
    else if(!match){
        confirmField.parentElement.classList.add("error");
        pwdErrorMsg.textContent = "Passwords do not match";
    }
    else{
        confirmField.parentElement.classList.remove("error");
        pwdErrorMsg.textContent = "";
    }
};

function checkEmail(){
    //from www.regexlib.com
    const pattern = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
    let match = pattern.test(emailField.value);
    
    if(!match && emailField.value != ""){
        emailField.parentElement.classList.add("error");
        emailErrorMsg.textContent = "ex: user@domain.com";
    }
    else{
        emailField.parentElement.classList.remove("error");
        emailErrorMsg.textContent = "";
    }

};

function checkTel(){
    //from ihateregex.io/expr/phone
    const pattern = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
    let match = pattern.test(telField.value);
    
    if(!match && telField.value != ""){
        telField.parentElement.classList.add("error");
        telErrorMsg.textContent = "ex: 123-456-7890";
    }
    else{
        telField.parentElement.classList.remove("error");
        telErrorMsg.textContent = "";
    }
};

function submitForm(e){
    //if any error classes are present, prevent submitting form
    let isValid =
        document.querySelectorAll("#sign-up .error").length > 0 ? false : true;
    if(!isValid)
        e.preventDefault();
    else 
        return true;
};



/*
function validatePassword(){
    let pwd = pwdField.value;
    console.log("unfocus " + pwd);
    if(pwdField.value === confirmField.value) 
        confirmField.setCustomValidity("");
    else {
        confirmField.setCustomValidity("Passwords do not match");
        //corrects Chrome issue:
        setTimeout(function(){
            confirmField.reportValidity();;
        },0);
    }
}
*/