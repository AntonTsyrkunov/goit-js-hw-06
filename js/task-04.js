const increaseButton = document.querySelector('[data-action="increment"]');

const reduceButton = document.querySelector('[data-action="decrement"]');

const counter = document.querySelector('#counter span');

let meter  = 0;

const handleIncreaseNumber = () => {

    meter += 1;
    counter.textContent = `${meter}`;
    
}

console.log(reduceButton);

increaseButton.addEventListener('click', handleIncreaseNumber);


const handleReduceNumber = () => {

    counter.textContent = `${meter -= 1}`; 

}

reduceButton.addEventListener('click', handleReduceNumber);