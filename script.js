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
        title: 'Asynchronous JavaScript',
        link: '/100_days_of_code/Day_10_Asynchronous_JavaScript'
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
        title: 'Silverstein Music Videos',
        link: '/100_days_of_code/Day_13_Silverstein_Musicvideos'
    },
    {
        title: 'Overview Site',
        link: '/100_days_of_code/Day_14_Overview_Site'
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
