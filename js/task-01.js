// const totalCategories = document.querySelectorAll(".item");
// console.log(`Number of categories: ${totalCategories.length}`);
// const categoriesTitle = [...totalCategories]
//   .map(
//     (categories) =>
//       `Category: ${categories.children[0].textContent},
//     Elements: ${categories.children[1].children.length}`
//   )
//   .join("\n");
// console.log(categoriesTitle);

const totalCategories = document.querySelector("#categories");
console.log(`Number of categories: ${totalCategories.children.length}`);
const categoriesTitle = document.querySelectorAll(".item");
categoriesTitle.forEach((c) => {
  console.log(`Category: ${c.firstElementChild.textContent},
  Elements: ${c.lastElementChild.childElementCount}`);
});
