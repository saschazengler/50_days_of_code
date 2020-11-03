let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);

const body = document.getElementsByTagName('body')[0];
const container = document.getElementById('container');
const title = document.getElementById('title');
const message = document.getElementById('message');
const digitContainer = document.getElementById('digitContainer');
const firstDigit = document.getElementById('firstDigit');
const secondDigit = document.getElementById('secondDigit');
const thirdDigit = document.getElementById('thirdDigit');
const fourthDigit = document.getElementById('fourthDigit');
const fifthDigit = document.getElementById('fifthDigit');
const sixthDigit = document.getElementById('sixthDigit');
const verifyButton = document.getElementById('verifyButton');

const inputCollection = [firstDigit, secondDigit, thirdDigit, fourthDigit, fifthDigit, sixthDigit];

let index = 0;
let status = false;


if (location.reload) {
    inputCollection.forEach(input => input.value = '');
};


function inputValidation(event) {
    let pattern = /[0-9]/g;
    
    if (!event.key.match(pattern)) {
        alert('Sorry, only numbers are allowed. Please try it again.')
        location.reload();
    };
};


function focusInputField(input, index) {    
    if (input.length === 1 && index < 6) { 
        inputCollection[index].focus();
    } else {
        inputCollection[index - 1].blur();
        verifyButton.style.color = '#3B184E';
        verifyButton.style.backgroundColor = '#FFE882';

        status = true;
    };
};


function verifyMessage() {
    container.remove(title, message, digitContainer);
    const node = document.createElement('p');
    node.innerText = 'Thank you. You have verified your account.';
    body.append(node);
};


function errorMessage() {
    alert('Please enter your code.');
    inputCollection[index].focus();
};


inputCollection.forEach(input => {
    input.addEventListener('keydown', (event) => {
        inputValidation(event);
    });
});


inputCollection.forEach(input => {
    input.addEventListener('input', () => {
        index++;
        focusInputField(input.value, index);
    });
});


verifyButton.addEventListener('keydown', (event) => event.which === 13 ? verifyMessage() : null);
verifyButton.addEventListener('click', () => status === true ? verifyMessage() : errorMessage());