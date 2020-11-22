const image = document.getElementById('image');
const cursor = document.getElementById('cursor');

const leftArrow = '☜';
const rightArrow = '☞';

let index = 0;

let innerWidth = window.innerWidth;
let halfWidth = innerWidth / 2;

const miamiImages = [
    './image/one_miami.jpg',
    './image/two_miami.jpg',
    './image/three_miami.jpg',
    './image/four_miami.jpg',
    './image/five_miami.jpg'
];

image.setAttribute('style', `background: url(${miamiImages[index]}) no-repeat center center fixed`);


function setMouseCursor(event) {
    cursor.setAttribute('style', `top: ${event.pageY - 10}px; left: ${event.pageX - 10}px`);

    if (event.clientX < halfWidth) {
        cursor.innerText = leftArrow;
    } else if (event.clientX > halfWidth) {
        cursor.innerText = rightArrow;
    };
};


function setBackgroundImage(event) {
    if(event.pageX > halfWidth) {
        if (!(index === 4)) {
            index++;
            image.setAttribute('style', `background: url(${miamiImages[index]}) no-repeat center center fixed`);
        } else {
            index = 0;
            image.setAttribute('style', `background: url(${miamiImages[index]}) no-repeat center center fixed`);
        };
    } else if (event.pageX < halfWidth) {
        if (!(index === 0)) {
            index--;
            image.setAttribute('style', `background: url(${miamiImages[index]}) no-repeat center center fixed`);
        } else {
            index = 4;
            image.setAttribute('style', `background: url(${miamiImages[index]}) no-repeat center center fixed`);
        };
    };
};


window.addEventListener('mousemove', (event) => setMouseCursor(event));
window.addEventListener('click', (event) => setBackgroundImage(event));