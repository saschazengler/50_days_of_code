const functionKeyContainer = document.getElementById('functionKeyContainer');
const numberKeyContainer = document.getElementById('numberKeyContainer');
const firstLetterRowContainer = document.getElementById('firstLetterRowContainer');
const secondLetterRowContainer = document.getElementById('secondLetterRowContainer');
const thirdLetterRowContainer = document.getElementById('thirdLetterRowContainer');
const commanKeyContainer = document.getElementById('commanKeyContainer');

const functionNode = functionKeyContainer.childNodes;
const numberNode = numberKeyContainer.childNodes;
const firstLettersNode = firstLetterRowContainer.childNodes;
const secondLettersNode = secondLetterRowContainer.childNodes;
const thirdLettersNode = thirdLetterRowContainer.childNodes;
const commandNode = commanKeyContainer.childNodes;

const functionKeyRowAmount = 13;
const numberKeyRowAmount = 14;
const firstLetterRowAmount = 14;
const secondLetterRowAmount = 13;
const thirdLetterRowAmount = 12;
const commandKeyRowAmount = 7;


function invisibleTouch() {
    let sequence = [73, 78, 86, 73, 83, 73, 66, 76, 69, 32, 84, 79, 85, 67, 72]
    let userInput = [];
    
    window.addEventListener('keydown', (event) => {
        userInput.push(event.keyCode);

        if (sequence.length === userInput.length) {
            sequence.every((number, index) => {
                if (number === userInput[index]) {
                    window.open('https://www.youtube.com/watch?v=epOBenUjIHw', target="_blank");
                    location.reload();
                };
            });
        };
    });
};

invisibleTouch();


function reloadDocument() {
    let sequence = [82, 69, 70, 82, 69, 83, 72]
    let userInput = [];
    
    window.addEventListener('keydown', (event) => {
        userInput.push(event.keyCode);

        if (sequence.length === userInput.length) {
            sequence.every((number, index) => {
                if (number === userInput[index]) {
                    location.reload();
                };
            });
        };
    });
}

reloadDocument();


// function keys
for (let i = 0; i < functionKeyRowAmount; i++) {
    let key = document.createElement('div');
    key.classList.add('keyProperty');
    // key.style.display = 'none';
    
    functionKeyContainer.appendChild(key);
};


// number keys
for (let i = 0; i < numberKeyRowAmount; i++) {
    let key = document.createElement('div');
    key.classList.add('keyProperty');

    numberKeyContainer.appendChild(key);
};


// first letter row
for (let i = 0; i < firstLetterRowAmount; i++) {
    let key = document.createElement('div');
    key.classList.add('keyProperty');

    firstLetterRowContainer.appendChild(key);
};


// second letter row
for (let i = 0; i < secondLetterRowAmount; i++) {
    let key = document.createElement('div');
    key.classList.add('keyProperty');

    secondLetterRowContainer.appendChild(key);
};


// third letter row
for (let i = 0; i < thirdLetterRowAmount; i++) {
    let key = document.createElement('div');
    key.classList.add('keyProperty');

    thirdLetterRowContainer.appendChild(key);
};


// command keys
for (let i = 0; i < commandKeyRowAmount; i++) {
    let key = document.createElement('div');
    key.classList.add('keyProperty');

    commanKeyContainer.appendChild(key);
};


function displayContainerContent() {
    window.addEventListener('keydown', (event) => {
        document.getElementById('keyNumber').innerText = event.keyCode;
    });
};

displayContainerContent();


function functionKeys() {
    window.addEventListener('keydown', (event) => {       
        if (event.keyCode) {
            functionKeyContainer.classList.add('keyOrientation');
            functionNode[0].classList.add('bigKey');
        };
        switch(event.keyCode) {
            case 27:
                functionNode[0].innerText = 'esc';
                functionNode[0].classList.add('keyPressed');
                break;
            case 112:
                functionNode[1].innerText = 'F1';
                functionNode[1].classList.add('keyPressed');
                break;
            case 113:
                functionNode[2].innerText = 'F2';
                functionNode[2].classList.add('keyPressed');
                break;
            case 114:
                functionNode[3].innerText = 'F3';
                functionNode[3].classList.add('keyPressed');
                break;
            case 115:
                functionNode[4].innerText = 'F4';
                functionNode[4].classList.add('keyPressed');
                break;
            case 116:
                functionNode[5].innerText = 'F5';
                functionNode[5].classList.add('keyPressed');
                break;
            case 117:
                functionNode[6].innerText = 'F6';
                functionNode[6].classList.add('keyPressed');
                break;
            case 118:
                functionNode[7].innerText = 'F7';
                functionNode[7].classList.add('keyPressed');
                break;
            case 119:
                functionNode[8].innerText = 'F8';
                functionNode[8].classList.add('keyPressed');
                break;
            case 120:
                functionNode[9].innerText = 'F9';
                functionNode[9].classList.add('keyPressed');
                break;
            case 121:
                functionNode[10].innerText = 'F10';
                functionNode[10].classList.add('keyPressed');
                break;
            case 122:
                functionNode[11].innerText = 'F11';
                functionNode[11].classList.add('keyPressed');
                break;
            case 123:
                functionNode[12].innerText = 'F12';
                functionNode[12].classList.add('keyPressed');
                break;
        };
    });
};

functionKeys();


function numberKeys() {
    window.addEventListener('keydown', (event) => {
        if (event.keyCode) {
            numberKeyContainer.classList.add('keyOrientation');
            numberNode[13].classList.add('bigKey');
        };
        
        switch(event.keyCode) {
            case 192:
                numberNode[0].innerText = '`';
                numberNode[0].classList.add('keyPressed');
                break;
            case 49:
                numberNode[1].innerText = '1';
                numberNode[1].classList.add('keyPressed');
                break;
            case 50:
                numberNode[2].innerText = '2';
                numberNode[2].classList.add('keyPressed');
                break;
            case 51:
                numberNode[3].innerText = '3';
                numberNode[3].classList.add('keyPressed');
                break;
            case 52:
                numberNode[4].innerText = '4';
                numberNode[4].classList.add('keyPressed');
                break;
            case 53:
                numberNode[5].innerText = '5';
                numberNode[5].classList.add('keyPressed');
                break;
            case 54:
                numberNode[6].innerText = '6';
                numberNode[6].classList.add('keyPressed');
                break;
            case 55:
                numberNode[7].innerText = '7';
                numberNode[7].classList.add('keyPressed');
                break;
            case 56:
                numberNode[8].innerText = '8';
                numberNode[8].classList.add('keyPressed');
                break;
            case 57:
                numberNode[9].innerText = '9';
                numberNode[9].classList.add('keyPressed');
                break;
                // here
            case 48:
                numberNode[10].innerText = '0';
                numberNode[10].classList.add('keyPressed');
                break;
            case 189:
                numberNode[11].innerText = '-';
                numberNode[11].classList.add('keyPressed');
                break;
            case 187:
                numberNode[12].innerText = '=';
                numberNode[12].classList.add('keyPressed');
                break;
            case 8:
                numberNode[13].innerText = 'delete';
                numberNode[13].classList.add('keyPressed');
        };
    });
};

numberKeys();


function firstLettersKeys() {
    window.addEventListener('keydown', (event) => {
        if (event.keyCode) {
            firstLetterRowContainer.classList.add('keyOrientation');
            firstLettersNode[0].classList.add('bigKey');
        };
        
        switch(event.keyCode) {
            case 9:
                firstLettersNode[0].innerText = 'tab';
                firstLettersNode[0].classList.add('keyPressed');
                break;
            case 81:
                firstLettersNode[1].innerText = 'Q';
                firstLettersNode[1].classList.add('keyPressed');
                break;
            case 87:
                firstLettersNode[2].innerText = 'W';
                firstLettersNode[2].classList.add('keyPressed');
                break;
            case 69:
                firstLettersNode[3].innerText = 'E';
                firstLettersNode[3].classList.add('keyPressed');
                break;
            case 82:
                firstLettersNode[4].innerText = 'R';
                firstLettersNode[4].classList.add('keyPressed');
                break;
            case 84:
                firstLettersNode[5].innerText = 'T';
                firstLettersNode[5].classList.add('keyPressed');
                break;
            case 89:
                firstLettersNode[6].innerText = 'Y';
                firstLettersNode[6].classList.add('keyPressed');
                break;
            case 85:
                firstLettersNode[7].innerText = 'U';
                firstLettersNode[7].classList.add('keyPressed');
                break;
            case 73:
                firstLettersNode[8].innerText = 'I';
                firstLettersNode[8].classList.add('keyPressed');
                break;
            case 79:
                firstLettersNode[9].innerText = 'O';
                firstLettersNode[9].classList.add('keyPressed');
                break;
                // here
            case 80:
                firstLettersNode[10].innerText = 'P';
                firstLettersNode[10].classList.add('keyPressed');
                break;
            case 219:
                firstLettersNode[11].innerText = '[';
                firstLettersNode[11].classList.add('keyPressed');
                break;
            case 221:
                firstLettersNode[12].innerText = ']';
                firstLettersNode[12].classList.add('keyPressed');
                break;
            case 220:
                firstLettersNode[13].innerText = '\\';
                firstLettersNode[13].classList.add('keyPressed');
        };
    });
};

firstLettersKeys();


function secondLettersKeys() {
    window.addEventListener('keydown', (event) => {
        if (event.keyCode) {
            secondLetterRowContainer.classList.add('keyOrientation');
            secondLettersNode[0].classList.add('bigKey');
            secondLettersNode[12].classList.add('bigKey');
        };
        
        switch(event.keyCode) {
            case 20:
                secondLettersNode[0].innerText = 'caps lock';
                secondLettersNode[0].classList.add('keyPressed');
                break;
            case 65:
                secondLettersNode[1].innerText = 'A';
                secondLettersNode[1].classList.add('keyPressed');
                break;
            case 83:
                secondLettersNode[2].innerText = 'S';
                secondLettersNode[2].classList.add('keyPressed');
                break;
            case 68:
                secondLettersNode[3].innerText = 'D';
                secondLettersNode[3].classList.add('keyPressed');
                break;
            case 70:
                secondLettersNode[4].innerText = 'F';
                secondLettersNode[4].classList.add('keyPressed');
                break;
            case 71:
                secondLettersNode[5].innerText = 'G';
                secondLettersNode[5].classList.add('keyPressed');
                break;
            case 72:
                secondLettersNode[6].innerText = 'H';
                secondLettersNode[6].classList.add('keyPressed');
                break;
            case 74:
                secondLettersNode[7].innerText = 'J';
                secondLettersNode[7].classList.add('keyPressed');
                break;
            case 75:
                secondLettersNode[8].innerText = 'K';
                secondLettersNode[8].classList.add('keyPressed');
                break;
            case 76:
                secondLettersNode[9].innerText = 'L';
                secondLettersNode[9].classList.add('keyPressed');
                break;
            case 186:
                secondLettersNode[10].innerText = ';';
                secondLettersNode[10].classList.add('keyPressed');
                break;
            case 222:
                secondLettersNode[11].innerText = '\'';
                secondLettersNode[11].classList.add('keyPressed');
                break;
            case 13:
                secondLettersNode[12].innerText = 'enter';
                secondLettersNode[12].classList.add('keyPressed');
                break;
        };
    });
};

secondLettersKeys();


function thirdLettersKeys() {
    window.addEventListener('keydown', (event) => {
        if (event.keyCode) {
            thirdLetterRowContainer.classList.add('keyOrientation');
            thirdLettersNode[0].classList.add('bigKey');
            thirdLettersNode[11].classList.add('bigKey');
        };
        
        if (event.keyCode === 16) {
            thirdLettersNode[0].innerText = 'shift';
            thirdLettersNode[0].classList.add('keyPressed');

            thirdLettersNode[11].innerText = 'shift';
            thirdLettersNode[11].classList.add('keyPressed');
        } else if (event.keyCode === 90) {
            thirdLettersNode[1].innerText = 'Z';
            thirdLettersNode[1].classList.add('keyPressed');
        } else if (event.keyCode === 88) {
            thirdLettersNode[2].innerText = 'X';
            thirdLettersNode[2].classList.add('keyPressed');
        } else if (event.keyCode === 67) {
            thirdLettersNode[3].innerText = 'C';
            thirdLettersNode[3].classList.add('keyPressed');
        } else if (event.keyCode === 86) {
            thirdLettersNode[4].innerText = 'V';
            thirdLettersNode[4].classList.add('keyPressed');
        } else if (event.keyCode === 66) {
            thirdLettersNode[5].innerText = 'B';
            thirdLettersNode[5].classList.add('keyPressed');
        } else if (event.keyCode === 78) {
            thirdLettersNode[6].innerText = 'N';
            thirdLettersNode[6].classList.add('keyPressed');
        } else if (event.keyCode === 77) {
            thirdLettersNode[7].innerText = 'M';
            thirdLettersNode[7].classList.add('keyPressed');
        } else if (event.keyCode === 188) {
            thirdLettersNode[8].innerText = ',';
            thirdLettersNode[8].classList.add('keyPressed');
        } else if (event.keyCode === 190) {
            thirdLettersNode[9].innerText = '.';
            thirdLettersNode[9].classList.add('keyPressed');
        } else if (event.keyCode === 199) {
            thirdLettersNode[10].innerText = '/';
            thirdLettersNode[10].classList.add('keyPressed');
        };
    });
};

thirdLettersKeys();


function commandKeys() {
    window.addEventListener('keydown', (event) => {
        if (event.keyCode) {
            commanKeyContainer.classList.add('keyOrientation');
            commandNode[3].classList.add('bigKey');
        };
        
        if (event.keyCode === 17) {
            commandNode[0].innerText = 'control';
            commandNode[0].classList.add('keyPressed');

            commandNode[6].innerText = 'control';
            commandNode[6].classList.add('keyPressed');
        } else if (event.keyCode === 18) {
            commandNode[1].innerText = 'option';
            commandNode[1].classList.add('keyPressed');

            commandNode[5].innerText = 'option';
            commandNode[5].classList.add('keyPressed');
        } else if (event.keyCode === 91) {
            commandNode[2].innerText = 'command';
            commandNode[2].classList.add('keyPressed');
        } else if (event.keyCode === 32) {
            commandNode[3].innerText = 'space';
            commandNode[3].classList.add('keyPressed');
        } else if (event.keyCode === 93) {
            commandNode[4].innerText = 'command';
            commandNode[4].classList.add('keyPressed');
        } else if (event.keyCode === 18) {
            commandNode[5].innerText = 'option';
            commandNode[5].classList.add('keyPressed');
        } else if (event.keyCode === 17) {
            commandNode[6].innerText = 'control';
            commandNode[6].classList.add('keyPressed');
        };
    });
};

commandKeys();