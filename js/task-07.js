const dynamicSize = document.querySelector('#font-size-control');
console.log(dynamicSize.value);
const spanText = document.querySelector('span');

const changeSize = ()=> {
    let size = dynamicSize.value;    
    spanText.style.fontSize = size + "px";
};

dynamicSize.addEventListener('input', changeSize);