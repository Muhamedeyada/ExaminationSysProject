let fname = document.getElementById("fname");
let lname = document.getElementById("lname");
let email = document.getElementById("email");
let password = document.getElementById("password");
let re_password = document.getElementById("rePassword");

function showError(input, message) {
  const errorElement = input.parentElement.querySelector(".error");
  errorElement.textContent = message;
  errorElement.style.display = "block";
}

function clearError(input) {
  const errorElement = input.parentElement.querySelector(".error");
  errorElement.style.display = "none";
}

function validFName() {
  const regixName = /^[^\d]+$/;
  if (!fname.value.trim()) {
    showError(fname, "First name cannot be empty.");
    return false;
  } else if (!regixName.test(fname.value)) {
    showError(fname, "Please write the correct name.");
    return false;
  }
  clearError(fname);
  return true;
}

function validLName() {
  const regixName = /^[^\d]+$/;
  if (!lname.value.trim()) {
    showError(lname, "Last name cannot be empty.");
    return false;
  } else if (!regixName.test(lname.value)) {
    showError(lname, "Please write the correct name.");
    return false;
  }
  clearError(lname);
  return true;
}

function validEmail() {
  const regixEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email.value.trim()) {
    showError(email, "Email cannot be empty.");
    return false;
  } else if (!regixEmail.test(email.value)) {
    showError(email, "Please write the correct email.");
    return false;
  }
  clearError(email);
  return true;
}

function validPassword() {
  if (!password.value.trim()) {
    showError(password, "Password cannot be empty.");
    return false;
  } else if (password.value.length < 8) {
    showError(password, "Please write a password longer than 8 characters.");
    return false;
  }
  clearError(password);
  return true;
}

function validRe_Password() {
  if (!re_password.value.trim()) {
    showError(re_password, "Please re-enter your password.");
    return false;
  } else if (re_password.value !== password.value) {
    showError(re_password, "Please write the same password.");
    return false;
  }
  clearError(re_password);
  return true;
}

class User {
  constructor(fname, lname, email, password) {
    this.fname = fname;
    this.lname = lname;
    this.email = email;
    this.password = password;
  }
}

function registration(e) {
  e.preventDefault(); // Prevent form submission

  if (
    !validFName() ||
    !validLName() ||
    !validEmail() ||
    !validPassword() ||
    !validRe_Password()
  ) {
    return; // Stop if validation fails
  }

  let userList = JSON.parse(localStorage.getItem("userList")) || [];
  const newUser = new User(
    fname.value,
    lname.value,
    email.value,
    password.value
  );

  if (userList.some((user) => user.email === email.value)) {
    showError(email, "Email address already registered!");
    return;
  }

  userList.push(newUser);
  localStorage.setItem("userList", JSON.stringify(userList));

  // Show success message and redirect after a short delay
  const successMessage = document.createElement("div");
  successMessage.textContent =
    "Registration successful! Redirecting to login...";
  document.body.appendChild(successMessage);
  setTimeout(() => {
    window.location.href = "../html/login.html";
  }, 2000);
}

let eyeState1 = 0;
let eyeState2 = 0;

function togglePasswordVisibility(input, eyeIcon, state) {
  if (state === 1) {
    eyeIcon.setAttribute("class", "fa-solid fa-eye-slash");
    input.setAttribute("type", "password");
    return 0;
  } else {
    eyeIcon.setAttribute("class", "fa-solid fa-eye");
    input.setAttribute("type", "text");
    return 1;
  }
}

function Pass_Eye() {
  const open_eye = document.getElementById("eye1");
  eyeState1 = togglePasswordVisibility(password, open_eye, eyeState1);
}

function RePass_Eye() {
  const open_eye2 = document.getElementById("eye2");
  eyeState2 = togglePasswordVisibility(re_password, open_eye2, eyeState2);
}
