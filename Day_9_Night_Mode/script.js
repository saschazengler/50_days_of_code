const head = document.getElementsByTagName('head')[0];
const uiModeButton = document.getElementById('uiModeButton');

const lightModeStyle = document.createElement('link');
lightModeStyle.rel = 'stylesheet';
lightModeStyle.href = 'lightModeStyle.css';

let uiStatus = false;


uiModeButton.addEventListener('click', () => {
    if (uiStatus === false) {
        head.appendChild(lightModeStyle);
        uiStatus = true;
    } else {
        head.removeChild(lightModeStyle);
        uiStatus = false;
    };
});