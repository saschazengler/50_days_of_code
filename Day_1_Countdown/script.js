const countdown = document.getElementById('countdown');

let endDate = new Date('Jan 11, 2021 11:59:59').getTime();

let x = setInterval(function () {
    let currentDate = new Date().getTime();
    let distance = endDate - currentDate;

    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    countdown.innerHTML = days + ' | ' + hours + ' | ' + minutes + ' | ' + seconds + ' | ';
}, 1000);