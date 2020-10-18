const container = document.querySelector('.squareContainer');

const colorController = document.querySelector('.colorController');

const colorPaletteOneContainer = document.querySelector('.colorPaletteOneContainer');
const colorPaletteTwoContainer = document.querySelector('.colorPaletteTwoContainer');
const colorPaletteThreeContainer = document.querySelector('.colorPaletteThreeContainer');
const colorPaletteFourContainer = document.querySelector('.colorPaletteFourContainer');
const colorPaletteFiveContainer = document.querySelector('.colorPaletteFiveContainer');

const colorPaletteContainerCollection = [colorPaletteOneContainer, colorPaletteTwoContainer, colorPaletteThreeContainer, colorPaletteFourContainer, colorPaletteFiveContainer];

const colorCollection = [
    ['#666A86', '#6F7A95', '#788AA3', '#92B6B1', '#A2C0AE', '#B2C9AB', '#E8DDB5', '#EAE0BC'],
    ['#7BDFF2', '#97EBF1', '#B2F7EF', '#EFF7F6', '#F3E7EB', '#F7D6E0', '#F5C6DA', '#F2B5D4'],
    ['#F08080', '#F4978E', '#F6A296', '#F8AD9D', '#FBC4AB', '#FDCFB2', '#FFDAB9', '#FFDDBF'],
    ['#64A6BD', '#7AA7C0', '#90A8C3', '#9FA8C6', '#ADA7C9', '#D7B9D5', '#E6C2DB', '#F4CAE0'],
    ['#A3A380', '#BDB98A', '#D6CE93', '#EFEBCE', '#E4C8AF', '#D8A48F', '#BB8588', '#C19093'],
    ['#ffffff']
];


const squareAmount = 5000;

// create dark squares
for(let i = 0; i < squareAmount; i++) {
    const square = document.createElement('div');
    square.className = 'square';
    square.classList.add('square');
    container.appendChild(square);

    square.addEventListener('mouseover', () => {
        addHoverColor(square);
    });

    square.addEventListener('mouseleave', () => {
        removeHoverColor(square);
    });
};


function addHoverColor(square) {    
    let randomColorSelectionIndex = colorCollection[selectedColorSheme][Math.floor(Math.random() * colorCollection[selectedColorSheme].length)];
    square.style.backgroundColor = randomColorSelectionIndex;
    square.style.boxShadow = `0px 0px 2px ${randomColorSelectionIndex}, -0px -0px 10px ${randomColorSelectionIndex}`;
};


function removeHoverColor(square) {
    square.style.backgroundColor = '';
    square.style.boxShadow = '0px 0px 2px #222222';
};


// add eight divs for color palette one
function createColorPaletteOne(colorPaletteContainer) {
    let colorPalette = undefined;
    let colorPaletteCollection = [];
    let colorSelectionIndex = 0;
    
    for(let i = 0; i < 8; i++) {
        colorPalette = document.createElement('div');
        colorPalette.classList.add('colorPalette');
        colorPaletteContainer.appendChild(colorPalette);

        colorPaletteCollection.push(colorPalette);
    };

    colorPaletteCollection.forEach(element => {
        element.style.backgroundColor = colorCollection[0][colorSelectionIndex];
        colorSelectionIndex++;
    });
};


// add eight divs for color palette two
function createColorPaletteTwo(colorPaletteContainer) {
    let colorPalette = undefined;
    let colorPaletteCollection = [];
    let colorSelectionIndex = 0;

    for(let i = 0; i < 8; i++) {
        colorPalette = document.createElement('div');
        colorPalette.classList.add('colorPalette');
        colorPaletteContainer.appendChild(colorPalette);

        colorPaletteCollection.push(colorPalette);
    };

    colorPaletteCollection.forEach(element => {
        element.style.backgroundColor = colorCollection[1][colorSelectionIndex];
        colorSelectionIndex++;
    });
};


// add eight divs for color palette three
function createColorPaletteThree(colorPaletteContainer) {
    let colorPalette = undefined;
    let colorPaletteCollection = [];
    let colorSelectionIndex = 0;

    for(let i = 0; i < 8; i++) {
        colorPalette = document.createElement('div');
        colorPalette.classList.add('colorPalette');
        colorPaletteContainer.appendChild(colorPalette);

        colorPaletteCollection.push(colorPalette);
    };

    colorPaletteCollection.forEach(element => {
        element.style.backgroundColor = colorCollection[2][colorSelectionIndex];
        colorSelectionIndex++;
    });
};


// add eight divs for color palette four
function createColorPaletteFour(colorPaletteContainer) {
    let colorPalette = undefined;
    let colorPaletteCollection = [];
    let colorSelectionIndex = 0;

    for(let i = 0; i < 8; i++) {
        colorPalette = document.createElement('div');
        colorPalette.classList.add('colorPalette');
        colorPaletteContainer.appendChild(colorPalette);

        colorPaletteCollection.push(colorPalette);
    };

    colorPaletteCollection.forEach(element => {
        element.style.backgroundColor = colorCollection[3][colorSelectionIndex];
        colorSelectionIndex++;
    });
};


// add eight divs for color palette five
function createColorPaletteFive(colorPaletteContainer) {
    let colorPalette = undefined;
    let colorPaletteCollection = [];
    let colorSelectionIndex = 0;

    for(let i = 0; i < 8; i++) {
        colorPalette = document.createElement('div');
        colorPalette.classList.add('colorPalette');
        colorPaletteContainer.appendChild(colorPalette);

        colorPaletteCollection.push(colorPalette);
    };

    colorPaletteCollection.forEach(element => {
        element.style.backgroundColor = colorCollection[4][colorSelectionIndex];
        colorSelectionIndex++;
    });
};


createColorPaletteOne(colorPaletteOneContainer);
createColorPaletteTwo(colorPaletteTwoContainer);
createColorPaletteThree(colorPaletteThreeContainer);
createColorPaletteFour(colorPaletteFourContainer);
createColorPaletteFive(colorPaletteFiveContainer);


function removeNotActiveBorder(selectedColorSheme) {
    for(let i = 0; i < colorPaletteContainerCollection.length; i++) {
        if(i !== selectedColorSheme) {
            colorPaletteContainerCollection[i].style.boxShadow = null;
        };
    };
};


let selectedColorSheme = 5;

for(colorPalette of colorPaletteContainerCollection) {
    colorPalette.addEventListener('click', (event) => {
        switch(event.currentTarget) {
            case colorPaletteOneContainer:
                selectedColorSheme = 0;
                colorPaletteOneContainer.style.border = '1px solid #B2C9AB';
                colorPaletteOneContainer.style.boxShadow = '0px 0px 20px #B2C9AB, -0px -0px 20px #99C1B9';                
                removeNotActiveBorder(selectedColorSheme);
                break;
            case colorPaletteTwoContainer:
                selectedColorSheme = 1;
                colorPaletteTwoContainer.style.border = '1px solid #F2B5D4';
                colorPaletteTwoContainer.style.boxShadow = '0px 0px 20px #F2B5D4, -0px -0px 20px #F78E69';                
                removeNotActiveBorder(selectedColorSheme);
                break;
            case colorPaletteThreeContainer:
                selectedColorSheme = 2;
                colorPaletteThreeContainer.style.border = '1px solid #FBC4AB';
                colorPaletteThreeContainer.style.boxShadow = '0px 0px 20px #FBC4AB, -0px -0px 20px #C09891';                
                removeNotActiveBorder(selectedColorSheme);
                break;
            case colorPaletteFourContainer:
                selectedColorSheme = 3;
                colorPaletteFourContainer.style.border = '1px solid #64A6BD';
                colorPaletteFourContainer.style.boxShadow = '0px 0px 20px #64A6BD, -0px -0px 20px #B653FC';
                removeNotActiveBorder(selectedColorSheme);
                break;
            case colorPaletteFiveContainer:
                selectedColorSheme = 4;
                colorPaletteFiveContainer.style.border = '1px solid #D6CE93';
                colorPaletteFiveContainer.style.boxShadow = '0px 0px 20px #D6CE93, -0px -0px 20px #F0C987';
                removeNotActiveBorder(selectedColorSheme);
                break;
        };
    });
};