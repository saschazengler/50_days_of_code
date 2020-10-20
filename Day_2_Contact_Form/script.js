let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);

const body = document.getElementsByTagName('body')[0];
const title = document.getElementById('title');
const form = document.getElementById('form');
const surname = document.getElementById('surname');
const name = document.getElementById('name');
const emailAddress = document.getElementById('emailAddress');
const vaildationMessage = document.getElementById('vaildationMessage');
const textarea = document.getElementById('textarea');
const button = document.getElementById('button');
const successMessage = document.getElementById('successMessage');

const successText = 'Thank you! We\'re on our way.';
const errorText = 'Please enter a valid';

const userInput = [];


function resetInputFields() {
    surname.value = '';
    name.value = '';
    emailAddress.value = '';
    textarea.value = '';
};


if (location.reload) {
    resetInputFields();
};


function userInputValidation() {
    if (!surname.value > 0) {
        vaildationMessage.innerText = `${errorText} surname`;
        vaildationMessage.style.display = 'block';
    } else if (!name.value > 0) {
        vaildationMessage.innerText = `${errorText} name`;
        vaildationMessage.style.display = 'block';
    } else if (!emailAddress.value > 0) {
        vaildationMessage.innerText = `${errorText} email address`;
        vaildationMessage.style.display = 'block';
    } else if (!emailAddress.value.includes('@')) {
        vaildationMessage.innerText = '... are you serious?';
        vaildationMessage.style.display = 'block';
    } else if (!textarea.value > 0) {
        vaildationMessage.innerText = 'What do you want to say?';
        vaildationMessage.style.display = 'block';
    } else return true;
};


function submitForm(userInputValidation) {
    if (userInputValidation() === true) {
        userInput.push(surname.value);
        userInput.push(name.value);
        userInput.push(emailAddress.value);
        userInput.push(textarea.value);

        body.removeChild(form);
        body.removeChild(title);
        successMessage.innerText = successText;
        successMessage.style.display = 'block';
    };
};

button.addEventListener('click', () => submitForm(userInputValidation));
