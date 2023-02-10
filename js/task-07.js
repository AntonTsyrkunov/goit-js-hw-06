const dynamicSize = document.querySelector('#font-size-control');
console.log(dynamicSize.value);
const spanText = document.querySelector('span');



// spanText.style.fontSize = "25px";
const changeSize = ()=> {
    let size = dynamicSize.value;
    // this sets the body's font size property, but you can set whatever you need to
    spanText.style.fontSize = size + "px";
};

dynamicSize.addEventListener('input', changeSize);