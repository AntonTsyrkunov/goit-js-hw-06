const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listOf = document.querySelector('#ingredients');

const elementsNumber = document.createDocumentFragment();

for (const ingredient of ingredients) {

  const newElement = document.createElement('li'); 

  newElement.classList.add = 'item';

  newElement.textContent = ingredient;

  elementsNumber.appendChild(newElement);

}

listOf.appendChild(elementsNumber);

console.log(listOf);


