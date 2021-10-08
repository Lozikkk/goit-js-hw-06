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
ingredients.forEach((ingredient) => {
  const items = document.createElement("li");
  items.textContent = ingredient;
  ingredientsList.appendChild(items);
});
