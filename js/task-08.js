const form = document.querySelector('.login-form');
const formFirstInput = document.querySelector('[type="email"]');
console.log(formFirstInput);
const formSecondInput = document.querySelector('[type="password"]');
console.log(formSecondInput);


const formFunction = (event) => {
    event.preventDefault();
    if (!formFirstInput.value || !formSecondInput.value) {
        return alert('Some fields are empty, should be fullfilled');
    }

    const formData = new FormData(event.target);
    const dataObj = {};
    formData.forEach((value, key) => (dataObj[key] = value));
    console.log(dataObj);
}
form.addEventListener('submit', formFunction);