function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

 const body = document.querySelector('body');

 const actionButton = document.querySelector('button');

 const span = document.querySelector('span');

 actionButton.addEventListener('click', (event) => {

  const currentColor = getRandomHexColor();

  body.style.background = currentColor;

  console.log(currentColor);

  span.textContent = currentColor;

 })