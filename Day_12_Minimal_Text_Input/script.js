const body = document.getElementsByTagName('body')[0];
const userInput = document.getElementById('userInput');
const submitButton = document.getElementsByClassName('submitButton')[0];
const submitMessage = document.getElementById('submitMessage');


if (location.reload) {
    userInput.value = '';
};


function handleUserInput() {
    if (userInput.value.length >= 0) {
        submitButton.style.opacity = '1';
        submitButton.id = 'submitButtonHover';
    };
};

body.addEventListener('keydown', () => handleUserInput());


function submitUserInput() {
    userInput.style.display = 'none';
    submitButton.style.display = 'none';
    submitMessage.style.opacity = '1';
};

submitButton.addEventListener('click', () => userInput.value !== '' ? submitUserInput() : undefined);
userInput.addEventListener('keypress', (event) => event.key === 'Enter' ? submitUserInput() : undefined);