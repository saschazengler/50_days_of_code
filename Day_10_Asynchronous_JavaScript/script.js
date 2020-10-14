const syncButton = document.getElementById('syncButton');
const asyncButton = document.getElementById('asyncButton');

const syncText = document.getElementById('sync');
const asyncText = document.getElementById('async');


function syncDisplay() {
    syncText.innerText = 'I run synchronous.';
    asyncText.innerText = 'Me too.';
};


function asyncDisplay() {
    syncText.innerText = 'I\'m already here.'
    asyncText.innerText = '';

    setTimeout(() => {
        asyncText.innerText = 'I waited 1 second for being print out.';
    }, 1000);
};


syncButton.addEventListener('click', () => syncDisplay());
asyncButton.addEventListener('click', () => asyncDisplay());
