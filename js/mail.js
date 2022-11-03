const submitBtn = document.querySelector(".btn");
const emailVerify = [
  "pippo@gmail.com",
  "pluto@gmail.com",
  "topolino@gmail.com",
];
const inputEmail = document.querySelector(".form-control");
submitBtn.addEventListener("click", function () {
  let find = false;
  const outputEl = document.querySelector(".output");
  for (let i = 0; i < emailVerify.length; i++) {
    const elementList = emailVerify[i];
    if (inputEmail.value === elementList) {
      find = true;
    }
  }
  if (find === true) {
    outputEl.innerHTML = "Email verificata";
  } else {
    outputEl.innerHTML = "Email non verificata";
  }
});
