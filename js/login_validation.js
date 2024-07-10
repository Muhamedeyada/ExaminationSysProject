




let open_eye = document.getElementById("eye1")

function validEmail() {
    let email = document.getElementById("email");
    let errorEmail = document.getElementsByClassName("error")[0]
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
    let errorPassword = document.getElementsByClassName("error")[1]
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

function login(e) {

    e.preventDefault()
    const localEmail=localStorage.getItem("Email");
    const localPassword=localStorage.getItem("Password");
   
    if (!(validEmail()==localEmail && validPassword()==localPassword)) {
        password.setAttribute("class", "input-group__input__Error");
        errorPassword.textContent="Enter right password or email"
        errorPassword.style.display = "block";
           
       return false

    }
    else {
       console.log("hello")
    }
}
let a;

function Pass_Eye() {
   
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


// Remember Me check box

// const rememberBox=document.getElementById("rememberCheck");
// if(localStorage.checkbox&&localStorage.checkbox !==""){
//     rememberBox.setAttribute("checked","checked")
//     password.value=localStorage.password
//     email.value=localStorage.email
// }
// else{
//     rememberBox.removeAttribute("checked")
//     password.value=""
//     email.value=""
// }

// function RememberMe(){
//     if(rememberBox.checked &&!email.value &&!password.value){
//         localStorage.email=email.value;
//         localStorage.password=password.value
//         localStorage.checkbox=rememberBox.value;

//     }
//     else{
//         localStorage.email=""
//         localStorage.password=""
//         localStorage.checkbox=""
//     }
// }
// localStorage.removeItem("checkbox")