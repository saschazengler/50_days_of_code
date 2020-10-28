let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);

const keyboardContainer = document.getElementById('keyboardContainer');
const keyNumber = document.getElementById('keyNumber');
const descriptionKeyNumber = document.getElementById('descriptionKeyNumber');


const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
if (isMobile) {
    alert('This site only works on desktop browsers.');
    keyNumber.innerText = '✌🏻';
};


function keyValidation(keyName) {
    const alphabetPattern = /[a-z]/g;
    const spacePattern = /\s/g;

    if (keyName.match(alphabetPattern)) {
        return keyName.toUpperCase();
    } else if (keyName.match(spacePattern)) {
        return keyName = 'SPACE';
    } return keyName;
};


function keyDescription(event) {
    if (event) {
        let keyName = event.key;
        keyName = keyValidation(keyName);
        
        keyNumber.innerText = event.which;
        keyboardContainer.append(keyNumber);
        
        descriptionKeyNumber.innerText = keyName;
        keyboardContainer.append(descriptionKeyNumber)
    };
};

window.addEventListener('keydown', (event) => keyDescription(event));