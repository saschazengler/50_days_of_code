const hateLove = document.getElementById('hateLove');

let status = false;

const interval = setInterval(() => {
    if (status === false) {
        hateLove.innerText = 'LOVE';
        status = true;
    } else if (status === true) {
        hateLove.innerText = 'HATE';
        status = false;
    };
}, 2000);