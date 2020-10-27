let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);

const node = document.getElementById('count');


fetch('https://api.countapi.xyz/hit/saschazengler.com/visit')
.then(res => res.json())
.then(data => {
    node.innerText = `This page was viewed ${data.value} times.`;
});