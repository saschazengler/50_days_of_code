let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);

const input = document.getElementsByTagName('input')[0];

if (location.reload) {
    input.value = '';
};