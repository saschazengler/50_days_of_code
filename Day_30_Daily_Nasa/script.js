let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);

const image = document.getElementById('image');
const video = document.getElementById('video');
const url = 'https://api.nasa.gov/planetary/apod?api_key=mbJZtBfrohIEyCSdAcbcCx8ulk32avNXy9FFhtcc';


async function fetchApi() {
    const response = await fetch(url)
    .then(response => response.json())
    .then(data => {
        alert(data.title);
        validateUrl(data);
    })
    .catch(error => console.error(error));
};

fetchApi(); 


function validateUrl(data) {
    let url = data.url;
    
    if (url.includes('.jpg') || url.includes('.png')) {
        image.setAttribute('src', url);
    } else {
        video.setAttribute('src', url);
    };
};