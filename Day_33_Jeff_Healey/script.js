let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);

const body = document.getElementsByTagName('body')[0];
const video = document.getElementById('video');

let videoUrl = 'https://www.youtube.com/embed/siuXtG4-Tbo';


function setAttributes(video, attributes) {
    Object.keys(attributes).forEach(attribute => video.setAttribute(attribute, attributes[attribute]));
};


function createVideo() {
    const video = document.createElement('iframe');
    setAttributes(video, {
        src: videoUrl,
        id: 'video',
        autoplay: 1,
        controls: 0,
        frameborder: 0,
        allowfullscreen: true
    });
    body.appendChild(video);
};


function createText() {
    const node = document.createElement('p');
    node.innerText = 'Even without eyes, you probably saw better than me.';
    body.appendChild(node);

    setTimeout(() => {
        body.removeChild(node);
        createVideo();
    }, 4000);
};

createText();