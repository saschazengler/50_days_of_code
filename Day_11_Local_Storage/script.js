const displayLocalStorage = document.getElementsByClassName('localStorageInput')[0];
const localUserInput = document.getElementById('localUserInput');
const saveLocalButton = document.getElementById('saveLocalButton');
const showLocalButton = document.getElementById('showLocalButton');
const deleteLocalButton = document.getElementById('deleteLocalButton');


const displaySessionStorage = document.getElementsByClassName('sessionStorageInput')[0];
const sessionUserInput = document.getElementById('sessionUserInput');
const saveSessionButton = document.getElementById('saveSessionButton');
const showSessionButton = document.getElementById('showSessionButton');
const deleteSessionButton = document.getElementById('deleteSessionButton');


if (location.reload) {
    localUserInput.value = '';
    sessionUserInput.value = '';
};


function saveToStorage() {
    if (localUserInput.value.length > 0) {
        localStorage.localUserInput = localUserInput.value;
        localUserInput.value = '';
    } if (sessionUserInput.value.length > 0) {
        sessionStorage.sessionUserInput = sessionUserInput.value;
        sessionUserInput.value = '';
    };
};

saveLocalButton.addEventListener('click', () => saveToStorage());
localUserInput.addEventListener('keydown', event => event.key === 'Enter' ? saveToStorage() : undefined);

saveSessionButton.addEventListener('click', () => saveToStorage());
sessionUserInput.addEventListener('keydown', event => event.key === 'Enter' ? saveToStorage() : undefined);


function showStorage(event) {    
    if (event.target.id === 'showLocalButton') {
        displayLocalStorage.innerText = localStorage.localUserInput;
    } if (event.target.id === 'showSessionButton') {
        displaySessionStorage.innerText = sessionStorage.sessionUserInput;
    };
};

showLocalButton.addEventListener('click', (event) => showStorage(event));
showSessionButton.addEventListener('click', (event) => showStorage(event));


function removeFromStorage() {
    if (event.target.id === 'deleteLocalButton') {
        localStorage.removeItem('localUserInput');
        displayLocalStorage.innerText = '';
    } if (event.target.id === 'deleteSessionButton') {
        sessionStorage.removeItem('sessionUserInput');
        displaySessionStorage.innerText = '';
    };
};

deleteLocalButton.addEventListener('click', () => removeFromStorage());
deleteSessionButton.addEventListener('click', () => removeFromStorage());