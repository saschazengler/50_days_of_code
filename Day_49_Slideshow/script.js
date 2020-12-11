let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);

const path = './image/';

const albums = [
    'a_beautiful_place_to_drown.png',
    'dead_reflection.png',
    'i_am_alive_in_everything_i_touch.png',
    'this_is_how_the_wind_shifts.png',
    'short_songs.png',
    'rescue.png',
    'a_shipwreck_in_the_sand.png',
    'arrivals_and_departures.png',
    'discovering_the_waterfront.png',
    'when_broken_is_easily_fixed.png'
]

const colors = ['#f8c1d8', '#cb314b', '#9d973c', '#77909d', '#ced256', '#ac8660', '#a4ad6a', '#326296', '#644e56', '#a6462e'];

const body = document.getElementsByTagName('body')[0];
const img = document.getElementsByTagName('img')[0];

function setAlbumCover() {
    let index = Math.floor(Math.random() * 10);
    img.src = `${path}${albums[index]}`;
    img.style.boxShadow = `0 0 2em ${colors[index]}`;
};

setInterval(() => setAlbumCover(), 1200);