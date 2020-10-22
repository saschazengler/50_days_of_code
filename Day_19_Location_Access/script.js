const body = document.getElementsByTagName('body')[0];
const button = document.getElementsByTagName('button')[0];

let latitude = 0;
let longitude = 0;


function getCurrentLocation() {
    navigator.geolocation.getCurrentPosition(setPosition);
};


function setPosition(position) {
    latitude = position.coords.latitude;
    longitude = position.coords.longitude;

    showLocation();
};


function showLocation() {
    button.style.display = 'none';
    
    const node = document.createElement('iframe');
    node.setAttribute('frameborder', '0');
    node.classList.add('map');
    node.src = `https://www.google.com/maps/embed/v1/view?key=AIzaSyAAzcvpUuLyLRYhK3rLWlgnKz-GEYbKfEY&center=${latitude},${longitude}&zoom=15`;
    body.appendChild(node);
};

button.addEventListener('click', () => getCurrentLocation());