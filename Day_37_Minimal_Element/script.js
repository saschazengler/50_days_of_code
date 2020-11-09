let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);

const body = document.getElementsByTagName('body')[0];
const property = document.querySelectorAll('.property');

const url = 'https://neelpatel05.pythonanywhere.com/';
let index = 0;


fetch(url)
    .then(response => response.json())
    .then(data => createPeriodicElement(data, index))
    .catch(error => console.error(error));


let atomicNumber = '';
let atomicMass = '';
let symbol = '';
let elementName = '';
let electronegativity = '';
let density = '';
let elementCollection = [];


function createPeriodicElement(data, index) {
    index = Math.floor(Math.random() * data.length);
    
    atomicNumber = data[index].atomicNumber;
    atomicMass = data[index].atomicMass;
    symbol = data[index].symbol;
    elementName = data[index].name;
    electronegativity = data[index].electronegativity;
    density = data[index].density;
    
    elementCollection.push(atomicNumber, atomicMass, symbol, elementName, electronegativity, density);
    
    for (let i = 0; i < 6; i++) {
        const node = document.createElement('p');
        node.innerText = elementCollection[i];
        property[i].append(node);
    };
};