import data from './topSongs.js';

const body = document.getElementsByTagName('body')[0];


for (let i = 0; i <= data.length; i++) {
    const node = document.createElement('div');

    const song = document.createElement('p');
    const artist = document.createElement('p');
    const year = document.createElement('p');
    const album = document.createElement('p');
    const trackNumber = document.createElement('p');
    const genre = document.createElement('p');
    const producer = document.createElement('p');
    const label = document.createElement('p');

    song.innerHTML = `<span>song:</span> ${data[i].name}`;
    artist.innerHTML = `<span>artist:</span> ${data[i].artist}`;
    year.innerHTML = `<span>year:</span> ${data[i].year}`;
    album.innerHTML = `<span>album:</span> ${data[i].album}`;
    trackNumber.innerHTML = `<span>track:</span> ${data[i].trackNumber}`;
    genre.innerHTML = `<span>genre:</span> ${data[i].genre}`;
    producer.innerHTML = `<span>producer:</span> ${data[i].producer}`;
    label.innerHTML = `<span>label:</span> ${data[i].label}`;
    
    node.append(song, artist, year, album, trackNumber, genre, producer, label);
    body.appendChild(node);
};