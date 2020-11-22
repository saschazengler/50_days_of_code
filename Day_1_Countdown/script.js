let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);

const countdown = document.getElementById('countdown');
let endDate = new Date('Nov 22, 2020 23:59:59').getTime();

let x = setInterval(function () {
    let currentDate = new Date().getTime();
    let distance = endDate - currentDate;

    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    countdown.innerHTML = days + ' | ' + hours + ' | ' + minutes + ' | ' + seconds + ' | ';
}, 1000);