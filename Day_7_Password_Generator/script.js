let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);

const container = document.getElementById('selectionContainer');
const selectionCard = document.getElementsByClassName('selectionCard');

const helloKitty = document.getElementById('helloKittySafe');
const cia = document.getElementById('ciaSafe');
const fortKnox = document.getElementById('fortKnowSafe');

const userPassword = document.getElementById('userPassword');
const copyButton = document.getElementById('copyButton');


function removeBackgroundColor(event, a, b) {
    if (event.target) {
        a.style.backgroundColor = '#141301';
        b.style.backgroundColor = '#141301';
    };
};


function helloKittyPassword() {
    let password = '🐱🐱🐱🐱🐱🐱'
    
    helloKitty.addEventListener('click', (event) => {
        removeBackgroundColor(event, cia, fortKnox);
        helloKitty.style.backgroundColor = '#F5C469';
        userPassword.innerText = password;

        unHashPassword(password);
        hashPassword(password);
    });
};

helloKittyPassword();


function ciaPassword() {    
    let password = '';

    cia.addEventListener('click', (event) => {
        removeBackgroundColor(event, helloKitty, fortKnox);
        
        cia.style.backgroundColor = '#F5C469';
        password = Math.random().toString(36).substring(2, 12);
        userPassword.innerText = '✖️✖️✖️✖️✖️✖️✖️';

        unHashPassword(password);
        hashPassword(password);
    });
};

ciaPassword();


function fortKnoxPassword() {
    const symbols = ['§', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '=', '+', '[', ']', '{', '}', ';', ':', '\'', '|', '/', '?', '.', '>', ',', '<', '`', '~'];

    let password = '';
    let randomNumber;

    fortKnox.addEventListener('click', (event) => {
        removeBackgroundColor(event, helloKitty, cia);

        let result = [];

        for (let i = 0; i <= 4; i++) {
            randomNumber = Math.round(Math.random() * 30);
            result.push(symbols[randomNumber]);
        };

        result = result.join('');
        
        fortKnox.style.backgroundColor = '#F5C469';
        password = Math.random().toString(36).substring(2, 7);
        password += result;

        password = password.split('');
        password = password.sort((a, b) => (a + 8));
        password = password.join('');

        
        userPassword.innerText = '✖️✖️✖️✖️✖️✖️✖️';

        unHashPassword(password);
        hashPassword(password);
    });
};

fortKnoxPassword();


function unHashPassword(password) {
    userPassword.addEventListener('mouseover', (event) => {
        if (event.target === userPassword) {
            userPassword.innerText = password;
        } else {
            userPassword.innerText = '✖️✖️✖️✖️✖️✖️✖️';
        };
    });
};





function hashPassword(password) {
    userPassword.addEventListener('mouseleave', (event) => {
        if (event.target !== userPassword) {
            console.log(false);
        } else {
            userPassword.innerText = '✖️✖️✖️✖️✖️✖️✖️';
        };
    });
};