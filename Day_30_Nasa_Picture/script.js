let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);

const content = document.getElementById('content');
const url = 'https://api.nasa.gov/planetary/apod?api_key=mbJZtBfrohIEyCSdAcbcCx8ulk32avNXy9FFhtcc';


async function fetchApi() {
    const response = await fetch(url)
    .then(response => response.json())
    .then(data => {
        alert(data.title);
        content.setAttribute('src', data.url);
    })
    .catch(error => console.error(error));
};

fetchApi(); 