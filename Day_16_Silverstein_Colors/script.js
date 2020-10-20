const body = document.getElementsByTagName('body')[0];


// const abptd = document.getElementById('abptd');
// const lwbief = document.getElementById('lwbief');
// const rtfty = document.getElementById('rtfty');
// const dr = document.getElementById('dr');
// const iaaieit = document.getElementById('iaaieit');
// const tihtws = document.getElementById('tihtws');
// const ss = document.getElementById('ss');
// const r = document.getElementById('r');
// const asits = document.getElementById('asits');
// const aad = document.getElementById('aad');
// const dtw = document.getElementById('dtw');
// const wbief = document.getElementById('wbief');
// const x = [abptd, lwbief, rtfty, dr, iaaieit, tihtws, ss, r, asits, aad, dtw, wbief];

const colors = ['rgb(248, 193, 216)', 'rgb(239, 59, 36)', 'rgb(146, 168, 152)', 'rgb(203, 49, 75)', 'rgb(157, 151, 60)', 'rgb(119, 144, 157)', 'rgb(206, 210, 86)', 'rgb(172, 134, 96)', 'rgb(164, 173, 106)', 'rgb(50, 98, 150)', 'rgb(100, 78, 86)', 'rgb(166, 70, 46)'];

const colorId = ['abptd', 'lwbief', 'rtfty', 'dr', 'iaaieit', 'tihtws', 'ss', 'r', 'asits', 'aad', 'dtw', 'wbief'];


const colorElementCollection = [];

for (let i = 0; i < colors.length; i++) {
    const divElement = document.createElement('div');
    divElement.classList.add('color');
    divElement.id = colorId[i];
    divElement.style.backgroundColor = colors[i];
    body.appendChild(divElement);
    colorElementCollection.push(divElement);
};




for (let colorElement of colorElementCollection) {
    colorElement.addEventListener('click', (event) => searchFunction(event));
};


function searchFunction(event) {

    for (let colorElement of colorElementCollection) {
        if (event.target.id === colorElement.id) {
            console.log(true);
        } else console.log(false);       
    }; 
};



