const inputField = document.querySelector("input");

console.log(inputField);

const changeBorderColor = (event) =>{
    if (event.target.value.length < Number(inputField.dataset.length)) {
        inputField.classList.add('invalid');
    } else {
        inputField.classList.remove('invalid');
        inputField.classList.add('valid');
    };
};

inputField.addEventListener('blur', changeBorderColor);