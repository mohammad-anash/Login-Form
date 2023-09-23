let username = document.querySelector("#username");
let password = document.querySelector("#password");
let submit = document.querySelector(".submit");
let userError = document.querySelector(".usererror");
let passError = document.querySelector(".passerror");

submit.addEventListener("click", function () {
  if (username.value === "") {
    userError.innerHTML = "please write your Username";
  } else if (username.value.length < 3) {
    userError.innerHTML = "username require more then 3 char";
  } else {
    userError.innerHTML = "";
  }

  if (password.value === "") {
    passError.innerHTML = "please write your passworde";
  } else if (password.value.length < 8) {
    passError.innerHTML = "password require min 8 char";
  } else {
    passError.innerHTML = "";
  }
});
