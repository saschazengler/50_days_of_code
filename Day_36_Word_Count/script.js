let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);

const userInput = document.getElementById('userInput');
const displayCount = document.getElementById('displayCount');
let counter = 0;


if (location.reload) {
    userInput.value = '';
};


function countCharacter() { 
    counter++;
    displayCount.innerText = counter;
};


userInput.addEventListener('input', () => countCharacter());
userInput.addEventListener('keydown', (event) => {
    if (event.which === 8 && !(counter < 1)) {
        counter--;
        displayCount.innerText = counter--;
    };
});