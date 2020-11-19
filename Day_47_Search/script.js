let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);

const wrapper = document.getElementsByClassName('wrapper')[0];
const searchIcon = document.getElementsByTagName('img')[0];
const userInput = document.getElementById('userInput');

if (location.reload) {
    userInput.value = '';
};

function searchSomething() {
    searchIcon.style.display = 'none';
    userInput.style.display = 'block';
    userInput.focus();
};

searchIcon.addEventListener('click', () => searchSomething());
userInput.addEventListener('keydown', (event) => {
    if (event.which === 13) {
        userInput.style.display = 'none';
        searchIcon.style.display = 'block';
        userInput.value = '';
    };
});