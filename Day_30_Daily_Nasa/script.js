let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);

const body = document.getElementsByTagName('body')[0];
const fetchUrl = 'https://api.nasa.gov/planetary/apod?api_key=mbJZtBfrohIEyCSdAcbcCx8ulk32avNXy9FFhtcc';


async function fetchApi() {
    const response = await fetch(fetchUrl)
    .then(response => response.json())
    .then(data => {
        alert(`🪐 ${data.title} ☄️`);
        validateUrl(data);
    })
    .catch(error => console.error(error));
};

fetchApi(); 


function setAttributes(video, attributes) {
    Object.keys(attributes).forEach(attribute => video.setAttribute(attribute, attributes[attribute]));
};


function createVideo(url) {
    const video = document.createElement('iframe');
    setAttributes(video, {
        src: url,
        id: 'video',
        autoplay: 1,
        controls: 0,
        frameborder: 0,
        allowfullscreen: true
    });
    body.appendChild(video);
};


function createImage(url) {
    const image = document.createElement('img');
    image.setAttribute('src', url);
    image.id = 'image';
    body.appendChild(image);
};


function validateUrl(data) {
    let url = data.url;
    
    if (url.includes('.jpg') || url.includes('.png')) {
        createImage(url);
    } else if (url.includes('mp4')) {
        createVideo(url);
    } else alert('Sorry, we are having some trouble. Please come back tomorrow.');
};