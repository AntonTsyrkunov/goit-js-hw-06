const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listOf = document.querySelector('#ingredients');

const listElements = [];

for (const ingredient of ingredients) {

  const listElement = document.createElement('li');

  listElement.classList.add('item');

  listElement.innerHTML = ingredient;

  listElements.push(listElement);

}


listOf.append(...listElements);
console.log(listOf);






// Напиши скрипт, який для кожного елемента масиву ingredients:

// Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
// Додасть назву інгредієнта як його текстовий вміст.
// Додасть елементу клас item.
// Після чого, вставить усі <li> за одну операцію у список ul#ingredients.