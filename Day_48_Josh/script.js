let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);

const body = document.getElementsByTagName('body')[0];
body.addEventListener('click', () => window.location = 'https://www.youtube.com/watch?v=LGCJ6tksOdA');