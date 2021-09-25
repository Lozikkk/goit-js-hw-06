const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

let ingredientsList =
  document.getElementById('ingredients');
console.log(ingredientsList);
const food = ingredients.forEach(ingredient => {
  let items = document.createElement('li');
  items.innerText = ingredient;
  items.classList.add('item');
  ingredientsList.append(items);
});

console.log(food);
