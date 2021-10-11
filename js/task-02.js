const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

// let ingredientsList = document.getElementById("ingredients");
// console.log(ingredientsList);
// const food = ingredients.forEach((ingredient) => {
//   let items = document.createElement("li");
//   items.innerText = ingredient;
//   items.classList.add("item");
//   ingredientsList.append(items);
// });

const ingredientsList = document.getElementById("ingredients");
console.log(ingredientsList);
const newArr = [];
ingredients.forEach((ingredient) => {
  const items = document.createElement("li");
  items.classList.add("item");
  items.textContent = ingredient;
  newArr.push(items);
  ingredientsList.append(...newArr);
});

// const listEl = document.querySelector("#ingredients");
// const makeList = (options) => {
//   return options.map((option) => {
//     const linkEl = document.createElement("li");
//     linkEl.classList.add("item");
//     linkEl.textContent = option;
//     return linkEl;
//   });
// };
// const ingredientEl = makeList(ingredients);
// listEl.append(...ingredientEl);
// console.log(listEl);
