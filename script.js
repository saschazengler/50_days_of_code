const projectContainer = document.getElementById('projectContainer');
const projects = [ undefined,
    {
        title: 'Countdown',
        link: '/Day_1_Countdown'
    },
    { 
        title: 'Contact Form',
        link: '/Day_2_Contact_Form'
    },
    {
        title: 'Navigation Menu',
        link: '/Day_3_Navigation_Menu'
    },
    {
        title: 'Invisible Touch',
        link: '/Day_4_Invisible_Touch'
    },
    {   
        title: 'Pricing Design',
        link: '/Day_5_Pricing_design'
    },
    {
        title: 'zsh Quiz',
        link: '/Day_6_Quiz'
    },
    {
        title: 'Password Generator',
        link: '/Day_7_Password_Generator'
    },
    {
        title: 'Jan & Oli',
        link: '/Day_8_Jan_und_Oli'
    },
    {
        title: 'Night Mode',
        link: '/Day_9_Night_Mode'
    },
    {
        title: 'Asynchronous JavaScript',
        link: '/Day_10_Asynchronous_JavaScript'
    },
    {
        title: 'Local Storage',
        link: '/Day_11_Local_Storage'
    },
    {
        title: 'Minimal Text Input',
        link: '/Day_12_Minimal_Text_Input'
    },
    {
        title: 'Silverstein Music Videos',
        link: '/Day_13_Silverstein_Musicvideos'
    },
    {
        title: 'Overview Site',
        link: '/Day_14_Overview_Site'
    }
];


for (let i = 1; i <= 100; i++) {
    let projectNumber = [i];
    let projectValues = Object.values(projects.slice(0));

    const linkElement = document.createElement('a');
    linkElement.id = 'link';
    linkElement.innerText = `${projectNumber++}. ${projectValues[i].title}`;
    linkElement.href = projectValues[i].link;
    projectContainer.appendChild(linkElement);
};
