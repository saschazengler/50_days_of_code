let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);

const userEmail = document.getElementById('email');
const userPassword = document.getElementById('password');
const loginButton = document.getElementById('loginButton');


if (location.reload) {
    userEmail.value = '';
    userPassword.value = '';
};


loginButton.addEventListener('click', () => alert('✌🏻'));