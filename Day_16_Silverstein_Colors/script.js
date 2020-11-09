const body = document.getElementsByTagName('body')[0];

const abptd = 'a beautiful place to drown';
const lwbief = 'live: when broken is easily fixed';
const rtfty = 'redux: The first 10 years';
const dr = 'dead reflection';
const iaaieit = 'i am alive in everything i touch';
const tihtws = 'this is how the wind shifts';
const ss = 'short songs';
const r = 'rescue';
const asits = 'a shipwreck in the sand';
const aad = 'arrivals and departures';
const dtw = 'discovering the waterfront';
const wbief = 'when broken is easily fixed';

const albumId = [abptd, lwbief, rtfty, dr, iaaieit, tihtws, ss, r, asits, aad, dtw, wbief];

const colors = ['#f8c1d8', '#ef3b24', '#92a898', '#cb314b', '#9d973c', '#77909d', '#ced256', '#ac8660', '#a4ad6a', '#326296', '#644e56', '#a6462e'];


for (let i = 0; i < colors.length; i++) {
    const divElement = document.createElement('div');
    divElement.classList.add('colorWrapper');
    divElement.style.backgroundColor = colors[i];

    const title = document.createElement('p');
    title.classList.add('title');
    title.innerText = albumId[i];

    const color = document.createElement('p');
    color.classList.add('color');
    color.innerText = colors[i];

    body.appendChild(divElement);
    divElement.append(title);
    divElement.appendChild(color);
};