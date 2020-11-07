const progressBar = document.getElementById('progressBar');

window.onscroll = function() {scrollIndicator()};

function scrollIndicator() {
    let windowScrolling = document.body.scrollTop || document.documentElement.scrollTop;
    
    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrolled = (windowScrolling / height) * 100;
    progressBar.style.width = `${scrolled}%`;
};