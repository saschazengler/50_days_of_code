const body = document.getElementById('body');
const text = document.getElementById('text');

const showText = `Sanft & <br> Sorgfältig & <br> Fest & <br> Flauschig.`;
const teamText = `Jan & <br> Oli & <br> Su Su <br> Su Su.`;
const fansText = `Marathon Frank & <br> Marek & <br> Andre.`;
const characterText = `Fidi & <br> Bumsi & <br> Jan & <br> Oli.`;
const moderatorText = `Cosma Shiva & <br> Tommy & <br> Jürgen & <br> Susanne.`;
const signatureText = `1000 Mark Andre & <br> Coca Olaf & <br> Bifi Maik.`;

const collectionTexts = [showText, teamText, fansText, characterText, moderatorText, signatureText];
const collectionColors = ['#9AC4F8', '#E893AD', '#74E7B9', '#CB958E', '#FCD29F', '#C490D1'];


let counter = 0;

function displayText() {
    if (counter <= 5) {
        text.innerHTML = collectionTexts[counter];
        body.style.backgroundColor = collectionColors[counter];
        counter++;
    } else {
        counter = 0;
        text.innerHTML = collectionTexts[counter];
        body.style.backgroundColor = collectionColors[counter];
        counter++;
    };
};

displayText();


setInterval(() => {
    displayText();    
}, 2500);