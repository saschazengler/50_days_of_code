const body = document.getElementsByTagName('body')[0];
const button = document.getElementsByTagName('button')[0];

let latitude = 0;
let longitude = 0;


function getCurrentLocation() {
    navigator.geolocation.getCurrentPosition(showPosition);
};


function showPosition(position) {
    latitude = position.coords.latitude;
    longitude = position.coords.longitude;

    showLocation();
};


function showLocation() {
    button.style.display = 'none';
    
    const node = document.createElement('iframe');
    node.setAttribute('frameborder', '0');
    node.classList.add('map');
    node.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyAAzcvpUuLyLRYhK3rLWlgnKz-GEYbKfEY&callback=initMap';
    body.appendChild(node);
};

button.addEventListener('click', () => getCurrentLocation());