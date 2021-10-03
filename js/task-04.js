const button = {
  subtraction: document.querySelector("[data-action = 'decrement']"),
  span: document.querySelector("#value"),
  addition: document.querySelector("[data-action = 'increment']"),
};
let counterValue = 0;

const decrement = () => {
  counterValue -= 1;
  button.span.textContent = counterValue;
};
const increment = () => {
  counterValue += 1;
  button.span.textContent = counterValue;
};

button.subtraction.addEventListener("click", decrement);
button.addition.addEventListener("click", increment);
