let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);

const body = document.getElementsByTagName('body')[0];
const helloKitty = document.getElementById('helloKittySafe');
const cia = document.getElementById('ciaSafe');
const fortKnox = document.getElementById('fortKnowSafe');

const userPassword = document.getElementById('userPassword');
const copyButton = document.getElementById('copyButton');

const hoverText = 'hover to show';
const characters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '§', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '=', '+', '[', ']', '{', '}', ';', ':', '\'', '|', '/', '?', '.', '>', ',', '<', '`', '~'];
const lengthCharacters = characters.length;


function removeBackgroundColor(event, a, b) {
    if (event.target) {
        a.style.backgroundColor = '#141301';
        b.style.backgroundColor = '#141301';
    };
};


function copyPasswordToClipboard(password) {
    const node = document.createElement('textarea');
    body.append(node);
    node.style.display = 'none';
    node.value = password;
    node.select();
    node.setSelectionRange(0, 99999);
    document.execCommand('copy');
    body.removeChild(node)
};


function unHashPassword(password) {
    userPassword.addEventListener('mouseover', (event) => {
        if (event.target === userPassword) {
            userPassword.innerText = password;
        } else {
            userPassword.innerText = hoverText;
        };
    });
};


function hashPassword() {
    userPassword.addEventListener('mouseleave', (event) => {
        if (event.target === userPassword) {
            userPassword.innerText = hoverText;
        };
    });
};


function helloKittyPassword() {
    removeBackgroundColor(event, cia, fortKnox);

    let password = '🐱🐱🐱🐱🐱🐱';
    
    helloKitty.style.backgroundColor = '#F5C469';
    userPassword.innerText = hoverText;

    unHashPassword(password);
    hashPassword();
    copyButton.addEventListener('click', () => copyPasswordToClipboard(password));
};


function ciaPassword() {    
    removeBackgroundColor(event, helloKitty, fortKnox);

    let password = '';
    
    cia.style.backgroundColor = '#F5C469';
    password = Math.random().toString(36).substring(2, 12);
    userPassword.innerText = hoverText;
    
    unHashPassword(password);
    hashPassword();
};


function fortKnoxPassword() {
    removeBackgroundColor(event, helloKitty, cia);

    let randomNumber;
    let result = [];
    let password = '';

    for (let i = 0; i < 13; i++) {
        randomNumber = Math.round(Math.random() * lengthCharacters);
        result.push(characters[randomNumber]);
    };
    
    password = result.join('');
    
    fortKnox.style.backgroundColor = '#F5C469';
    userPassword.innerText = hoverText;

    unHashPassword(password);
    hashPassword();
};


fortKnox.addEventListener('click', (event) => fortKnoxPassword(event));
cia.addEventListener('click', (event) => ciaPassword(event));
helloKitty.addEventListener('click', (event) => helloKittyPassword(event));