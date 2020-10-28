const body = document.getElementsByTagName('body')[0];
const projectContainer = document.getElementById('projectContainer');
const projects = [ undefined,
    {
        title: 'Countdown',
        link: '/100_days_of_code/Day_1_Countdown'
    },
    { 
        title: 'Contact Form',
        link: '/100_days_of_code/Day_2_Contact_Form'
    },
    {
        title: 'Navigation Menu',
        link: '/100_days_of_code/Day_3_Navigation_Menu'
    },
    {
        title: 'Invisible Touch',
        link: '/100_days_of_code/Day_4_Invisible_Touch'
    },
    {   
        title: 'Pricing Design',
        link: '/100_days_of_code/Day_5_Pricing_Design'
    },
    {
        title: 'zsh Quiz',
        link: '/100_days_of_code/Day_6_Quiz'
    },
    {
        title: 'Password Generator',
        link: '/100_days_of_code/Day_7_Password_Generator'
    },
    {
        title: 'Jan & Oli',
        link: '/100_days_of_code/Day_8_Jan_und_Oli'
    },
    {
        title: 'Night Mode',
        link: '/100_days_of_code/Day_9_Night_Mode'
    },
    {
        title: 'Asynchronous JS',
        link: '/100_days_of_code/Day_10_Asynchronous_JS'
    },
    {
        title: 'Local Storage',
        link: '/100_days_of_code/Day_11_Local_Storage'
    },
    {
        title: 'Minimal Text Input',
        link: '/100_days_of_code/Day_12_Minimal_Text_Input'
    },
    {
        title: 'Silverstein Videos',
        link: '/100_days_of_code/Day_13_Silverstein_Videos'
    },
    {
        title: 'Overview Site',
        link: ''
    },
    {
        title: 'Hover Board',
        link: '/100_days_of_code/Day_15_Hover_Board'
    },
    {
        title: 'Silverstein Colors',
        link: '/100_days_of_code/Day_16_Silverstein_Colors'
    },
    {
        title: 'IP Address',
        link: '/100_days_of_code/Day_17_IP_Address'
    },
    {
        title: 'console.log() Quiz',
        link: '/100_days_of_code/Day_18_console.log_Quiz'
    },
    {
        title: 'Location Access',
        link: '/100_days_of_code/Day_19_Location_Access'
    },
    {
        title: 'Favourite Songs',
        link: '/100_days_of_code/Day_20_Favourite_Songs'
    },
    {
        title: 'Quotes',
        link: '/100_days_of_code/Day_21_Quotes'
    },
    {
        title: 'Numeric Input',
        link: '/100_days_of_code/Day_22_Numeric_Input'
    },
    {
        title: 'Horizontal Scrolling',
        link: '/100_days_of_code/Day_23_Horizontal_Scrolling'
    },
    {
        title: 'Visit Count',
        link: '/100_days_of_code/Day_24_Visit_Count'
    },
    {
        title: 'Login',
        link: '/100_days_of_code/Day_25_Login'
    }
];


function redirectOverviewSite(event) {
    const title = '14. Overview Site';
    if (event.target.innerText === title) {
        alert('This is the overview site you are looking at.');
        window.stop();
    };
};

body.addEventListener('click', (event) => redirectOverviewSite(event));


for (let i = 1; i <= 100; i++) {
    let projectNumber = [i];
    let projectValues = Object.values(projects.slice(0));

    const linkElement = document.createElement('a');
    linkElement.id = 'link';
    linkElement.innerText = `${projectNumber++}. ${projectValues[i].title}`;
    linkElement.href = projectValues[i].link;
    projectContainer.appendChild(linkElement);
};
