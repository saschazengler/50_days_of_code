const container = document.getElementById('container');
const title = document.getElementById('title');
const form = document.getElementById('form');
const surename = document.getElementById('surename');
const name = document.getElementById('name');
const emailAddress = document.getElementById('emailAddress');
const vaildationMessage = document.getElementById('vaildationMessage');
const textarea = document.getElementById('textarea');
const button = document.getElementById('button');
const successMessage = document.getElementById('successMessage');

const userInput = [];


function emailValidation() {
    if (emailAddress.value.includes('@')) {
        vaildationMessage.style.display = 'none';
        return true;
    } else {
        vaildationMessage.style.display = 'block';
        return false;
    };
};


function submitForm(emailValidation) {
    if (emailValidation() === true) {
        userInput.push(surename.value);
        userInput.push(name.value);
        userInput.push(emailAddress.value);
        userInput.push(textarea.value);
        
        surename.value = '';
        name.value = '';
        emailAddress.value = '';
        textarea.value = '';

        container.removeChild(form);
        title.style.display = 'none';
        successMessage.style.display = 'block';
    };
};

button.addEventListener('click', () => submitForm(emailValidation));
