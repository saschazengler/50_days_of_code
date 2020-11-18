const menuButton = document.getElementsByClassName('menu-wrapper')[0];
const firstLine = document.getElementById('firstLine');
const secondLine = document.getElementById('secondLine');
const thirdLine = document.getElementById('thirdLine');
const menuList = document.getElementsByTagName('ul')[0];

let status = true;


function changeMenuToCross() {
    secondLine.style.opacity = 0;
    thirdLine.style.width = '30px';
    firstLine.style.transform = 'rotate(45deg) translate(1px)';
    thirdLine.style.transform = 'rotate(-45deg) translate(1px)';
    menuList.style.display = 'block';

    status = false;
};


function changeMenuToBurger() {
    secondLine.style.opacity = 1;
    thirdLine.style.width = '24px';
    firstLine.style.transform = 'rotate(0deg)';
    thirdLine.style.transform = 'rotate(0deg)';
    menuList.style.display = 'none';
    
    status = true;
};


menuButton.addEventListener('click', () => status === false ? changeMenuToBurger() : changeMenuToCross());