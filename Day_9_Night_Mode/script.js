const head = document.getElementsByTagName('head')[0];

const lightModeStyle = document.createElement('link');
lightModeStyle.rel = 'stylesheet';
lightModeStyle.href = 'lightModeStyle.css';

const darkModeStyle = document.createElement('link');
darkModeStyle.rel = 'stylesheet';
darkModeStyle.href = 'darkModeStyle.css';

let uiStatus = false;


nightModeButton.addEventListener('click', () => {
    if (uiStatus === false) {
        head.appendChild(lightModeStyle);
        uiStatus = true;
    } else {
        head.appendChild(darkModeStyle);
        uiStatus = false;
    };
});