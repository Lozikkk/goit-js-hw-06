const inputValid = document.querySelector('input[data-length="6"]');
const totalInput = Number(inputValid.getAttribute("data-length"));

const validation = () => {
  if (inputValid.value.length === totalInput) {
    inputValid.classList.remove("invalid");
    inputValid.classList.add("valid");
    console.log(inputValid.value.length, ": Nice 6 symbol");
  } else if (inputValid.value.length === 0) {
    inputValid.classList.remove("valid");
    inputValid.classList.remove("invalid");
    console.log(inputValid.value.length, ": no symbol");
  } else {
    inputValid.classList.remove("valid");
    inputValid.classList.add("invalid");
    console.log(inputValid.value.length, ": no correct");
  }
};
inputValid.addEventListener("blur", validation);
