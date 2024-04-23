const form = document.querySelector("form");
const emailField = form.querySelector(".email-field");
const emailInput = emailField.querySelector(".email");
const emailError = emailField.querySelector(".email-error");
const phoneField = form.querySelector(".phone_number");
const phoneInput = phoneField.querySelector(".phone_number");
const phoneError = phoneField.querySelector(".phonenumber-error");
const usernameField = form.querySelector(".create-username");
const usernameInput = usernameField.querySelector(".username");
const usernameError = usernameField.querySelector(".username-error");
const passwordField = form.querySelector(".create-password");
const passwordInput = passwordField.querySelector(".password");
const passwordError = passwordField.querySelector(".password-error");

// Email Validation
function checkEmail() {
  const emailPattern = /^[a-zA-Z0-9?$#@]{6,10}$/;
  if (!emailPattern.test(emailInput.value)) {
    emailField.classList.add("invalid");
  } else {
    emailField.classList.remove("invalid");
  }
}

// Phone Number Validation
function checkPhoneNumber() {
  const phonePattern = /^\d{10}$/;
  if (!phonePattern.test(phoneInput.value)) {
    phoneField.classList.add("invalid");
  } else {
    phoneField.classList.remove("invalid");
  }
}

// Username Validation
function checkUsername() {
  const usernamePattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  if (!usernamePattern.test(usernameInput.value)) {
    usernameField.classList.add("invalid");
  } else {
    usernameField.classList.remove("invalid");
  }
}

// Password Validation
function checkPassword() {
  const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  if (!passwordPattern.test(passwordInput.value)) {
    passwordField.classList.add("invalid");
  } else {
    passwordField.classList.remove("invalid");
  }
}

emailInput.addEventListener("input", checkEmail);
phoneInput.addEventListener("input", checkPhoneNumber);
usernameInput.addEventListener("input", checkUsername);
passwordInput.addEventListener("input", checkPassword);