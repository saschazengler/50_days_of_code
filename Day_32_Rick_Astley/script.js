let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);

const text = document.getElementById('text');
const video = document.getElementById('video');
const lyrics = 'Never gonna give you up, never gonna let you down, never gonna run around and desert you. Never gonna make you cry, never gonna say goodbye, never gonna tell a lie and hurt you.';

let index = 1;

const timer = setInterval(writeText, 50);

function writeText() {
    text.innerText = lyrics.slice(0, index);
    index++;
    if (index > lyrics.length) {
        index = 1;
        video.style.opacity = 1;
        video.style.animation = 'scale 0.8s alternate linear infinite';
        clearInterval(timer);
    };
};