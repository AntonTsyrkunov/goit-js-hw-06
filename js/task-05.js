const inputField = document.querySelector('input');
const textInform = document.querySelector('h1 span');



inputField.addEventListener('input', event => {
    
    textInform.textContent = event.target.value || "Anonymus";
    
    textInform.textContent = `Hello, ${additor} Anonymus`
});






 