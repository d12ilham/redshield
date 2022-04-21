// Form input div border

let signUpDivInput = document.querySelectorAll(
  ".signup-form .sp-signup-div input"
);

let singupformDiv = document.querySelectorAll(".sp-signup-div");

for (let i = 0; i < signUpDivInput.length; i++) {
  signUpDivInput[i].addEventListener("focusin", function () {
    singupformDiv[i].classList.add("focus");
  });
}

for (let i = 0; i < signUpDivInput.length; i++) {
  signUpDivInput[i].addEventListener("focusout", function () {
    singupformDiv[i].classList.remove("focus");
  });
}

// SHOW HIDE PASSWORD

let visibilityIcon = document.querySelectorAll(".show-password");
let passwordFields = document.querySelectorAll(".sp-password");

for (let i = 0; i < passwordFields.length; i++) {
  visibilityIcon[i].addEventListener("click", function () {
    if (passwordFields[i].type === "password") {
      passwordFields[i].type = "text";
    } else {
      passwordFields[i].type = "password";
    }
  });
}
