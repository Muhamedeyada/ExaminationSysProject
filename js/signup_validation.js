
function validFName() {

    let fname = document.getElementById("fname");
    let errorFname = document.getElementsByClassName("error")[0]
    regixName = /^[^\d]+$/;
    if (!regixName.test(fname.value)) {
        fname.setAttribute("class", "input-group__input__Error");
        errorFname.style.display = "block";
        return false;
    }
    else {
        fname.setAttribute("class", "input-group__input");
        errorFname.style.display = "none";
        return fname.value
    }


}

function validLName() {
    let lname = document.getElementById("lname");
    let errorLname = document.getElementsByClassName("error")[1]
    regixName = /^[^\d]+$/;
    if (!regixName.test(lname.value)) {
        lname.setAttribute("class", "input-group__input__Error");
        errorLname.style.display = "block";
        return false
    }
    else {
        lname.setAttribute("class", "input-group__input");
        errorLname.style.display = "none";
        return lname.value
    }
}
 function validEmail() {
    let email = document.getElementById("email");
    let errorEmail = document.getElementsByClassName("error")[2]
    let regixEmail = /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/gim;
    if (!regixEmail.test(email.value)) {
        email.setAttribute("class", "input-group__input__Error");
        errorEmail.style.display = "block";
        return false
    }
    else {
        email.setAttribute("class", "input-group__input");
        errorEmail.style.display = "none";
        return email.value
    }

}
 function validPassword() {
    let password = document.getElementById("password");
    let errorPassword = document.getElementsByClassName("error")[3]
    if (!password.value || password.value.length < 8) {
        password.setAttribute("class", "input-group__input__Error");
        errorPassword.style.display = "block";
        return false
    }
    else {
        password.setAttribute("class", "input-group__input");
        errorPassword.style.display = "none";
        return password.value
    }

}
function validRe_Password() {
    let re_password = document.getElementById("rePassword");
    let errorre_password = document.getElementsByClassName("error")[4]
    if ((re_password.value != password.value)) {
        re_password.setAttribute("class", "input-group__input__Error");
        errorre_password.style.display = "block";
        return false;
    }
    else {
        re_password.setAttribute("class", "input-group__input");
        errorre_password.style.display = "none";
        return re_password.value
    }

}

function regestration(e) {

    e.preventDefault()

   
    if (!(validFName() && validLName() && validEmail() && validPassword() && validRe_Password())) {
       return false

    }
    else {
        localStorage.setItem("FirstName",fname.value)
        localStorage.setItem("LastName",lname.value)
        localStorage.setItem("Email",email.value)
        localStorage.setItem("Password",password.value)
        localStorage.setItem("Re_Password",re_password.value)
    }
}
let a;

function Pass_Eye() {
    let open_eye = document.getElementById("eye1")
    if (a == 1) {
        open_eye.setAttribute("class", "fa-solid fa-eye-slash")
        password.setAttribute("type", "password")
        a = 0
    }
    else {

        open_eye.setAttribute("class", "fa-solid fa-eye")
        password.setAttribute("type", "text")
        a = 1
    }
}
function RePass_Eye() {
    let open_eye2 = document.getElementById("eye2")
    if (a == 1) {

        open_eye2.setAttribute("class", "fa-solid fa-eye-slash")
        re_password.setAttribute("type", "password")
        a = 0
    }
    else {
        open_eye2.setAttribute("class", "fa-solid fa-eye")
        re_password.setAttribute("type", "text")
        a = 1
    }
}
