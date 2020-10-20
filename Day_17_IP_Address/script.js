const submitButton = document.getElementById('submitButton');
const ipAddressDisplay = document.getElementById('ipAddress');
const cityDisplay = document.getElementById('city');
const countryDisplay = document.getElementById('country');
const timezoneDisplay = document.getElementById('timezone');

const url = 'https://ipinfo.io';
let userIpAddress = '';
let userCity = '';
let userCountry = '';
let userTimezone = '';


async function fetchApiData(url, method) {
    const response = await fetch(url, {
        method: `${method}`,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer 3dd950f5a064a6`,
            'Accept': 'application/json'
        }
    });
    return response.json();
};


function getApiData() {
    fetchApiData(url, 'GET')
        .then(data => {
            userIpAddress = data.ip;
            userCity = data.city;
            userCountry = data.country;
            userTimezone = data.timezone
            displayData(userIpAddress, userCity, userCountry, userTimezone);
        })
        .catch(err => console.log(err));
};


function displayData(ip, city, country, timezone) {
    submitButton.style.display = 'none';
    ipAddressDisplay.innerText = `{ ${ip} }`;
    cityDisplay.innerText = city;
    countryDisplay.innerText = country;
    timezoneDisplay.innerText = timezone;
};


submitButton.addEventListener('click', () => getApiData());