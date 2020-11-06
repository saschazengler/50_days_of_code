let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);

const userInput = document.getElementById('userInput');
const binaryWrapper = document.getElementById('binary');


if (location.reload) {
    userInput.value = '';
};


function convertInputToBinary() {
    let input = userInput.value;
    let binary = '';

    for (let i = 0; i < input.length; i++) {
        binary += `${input[i].charCodeAt(0).toString(2)}`;
    };
    
    binaryWrapper.innerText = binary;
};

userInput.addEventListener('input', convertInputToBinary);