let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);

const body = document.getElementsByTagName('body')[0];
const button = document.getElementsByTagName('button')[0];

let latitude = 0;
let longitude = 0;

function getPosition() {
    navigator.geolocation.getCurrentPosition(setDegrees);
};

function setDegrees(position) {
    longitude = position.coords.longitude;
    latitude = position.coords.latitude;

    displayPosition();
};

function displayPosition() {
    button.style.display = 'none';

    let iframe = document.createElement('iframe');
    iframe.setAttribute('frameborder', '0');
    iframe.classList.add('map');

    iframe.src = `https://www.google.com/maps/embed/v1/view?key=AIzaSyBnMXGdr3RVTRGv7cG68NRoCNbFxqRkuiQ&center=${latitude},${longitude}&zoom=15`;

    body.appendChild(iframe);
};

button.addEventListener('click', () => getPosition());