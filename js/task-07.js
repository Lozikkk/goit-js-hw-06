const inputElement = document.querySelector("#font-size-control");
let spanText = document.querySelector("#text");

spanText.style.fontSize = "48px";
const editChange = () => {
  spanText.style.fontSize = `${inputElement.value}px`;
};

inputElement.addEventListener("input", editChange);
