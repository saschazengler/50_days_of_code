const navbar = document.getElementById('navbar');
const firstLine = document.getElementById('firstLine');
const secondLine = document.getElementById('secondLine');
const thirdLine = document.getElementById('thirdLine');

let menuStatus = true;


function changeMenuToCross() {
    firstLine.style.transform = 'rotate(45deg) translate(20px, 20px)';
    thirdLine.style.transform = 'rotate(-45deg) translate(20px, -20px)';
    secondLine.style.opacity = '0';

    firstLine.style.backgroundColor = '#F3F7F0';
    thirdLine.style.backgroundColor = '#F3F7F0';
    
    firstLine.style.borderRadius = '0.5em';
    thirdLine.style.borderRadius = '0.5em';
    
    menuStatus = false;
};


function changeMenuToBurger() {
    firstLine.style.transform = 'rotate(0deg) translate(0px, 0px)';
    thirdLine.style.transform = 'rotate(0deg) translate(0px, 0px)';
    secondLine.style.opacity = '1';

    firstLine.style.borderRadius = '0em';
    thirdLine.style.borderRadius = '0em';

    firstLine.style.backgroundColor = '#A93F55';
    thirdLine.style.backgroundColor = '#A93F55';
    
    menuStatus = true;
};


navbar.addEventListener('click', () => {
    if (menuStatus === false) {
        changeMenuToBurger();
    } else changeMenuToCross();
});