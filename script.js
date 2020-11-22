const body = document.getElementsByTagName('body')[0];
const projectContainer = document.getElementById('projectContainer');

const projects = [ undefined,
    {
        title: 'Countdown',
        link: '/50_days_of_code/Day_1_Countdown'
    },
    { 
        title: 'Contact Form',
        link: '/50_days_of_code/Day_2_Contact_Form'
    },
    {
        title: 'Navigation Menu',
        link: '/50_days_of_code/Day_3_Navigation_Menu'
    },
    {
        title: 'Invisible Touch',
        link: '/50_days_of_code/Day_4_Invisible_Touch'
    },
    {   
        title: 'Pricing Design',
        link: '/50_days_of_code/Day_5_Pricing_Design'
    },
    {
        title: 'zsh Quiz',
        link: '/50_days_of_code/Day_6_Quiz'
    },
    {
        title: 'Password Generator',
        link: '/50_days_of_code/Day_7_Password_Generator'
    },
    {
        title: 'Jan & Oli',
        link: '/50_days_of_code/Day_8_Jan_und_Oli'
    },
    {
        title: 'Night Mode',
        link: '/50_days_of_code/Day_9_Night_Mode'
    },
    {
        title: 'Asynchronous JS',
        link: '/50_days_of_code/Day_10_Asynchronous_JS'
    },
    {
        title: 'Local Storage',
        link: '/50_days_of_code/Day_11_Local_Storage'
    },
    {
        title: 'Minimal Text Input',
        link: '/50_days_of_code/Day_12_Minimal_Text_Input'
    },
    {
        title: 'Silverstein Videos',
        link: '/50_days_of_code/Day_13_Silverstein_Videos'
    },
    {
        title: 'Overview Site',
        link: ''
    },
    {
        title: 'Hover Board',
        link: '/50_days_of_code/Day_15_Hover_Board'
    },
    {
        title: 'Silverstein Colors',
        link: '/50_days_of_code/Day_16_Silverstein_Colors'
    },
    {
        title: 'IP Address',
        link: '/50_days_of_code/Day_17_IP_Address'
    },
    {
        title: 'console.log() Quiz',
        link: '/50_days_of_code/Day_18_Console_Log_Quiz'
    },
    {
        title: 'Location Access',
        link: '/50_days_of_code/Day_19_Location_Access'
    },
    {
        title: 'Favourite Songs',
        link: '/50_days_of_code/Day_20_Favourite_Songs'
    },
    {
        title: 'Quotes',
        link: '/50_days_of_code/Day_21_Quotes'
    },
    {
        title: 'Numeric Input',
        link: '/50_days_of_code/Day_22_Numeric_Input'
    },
    {
        title: 'Horizontal Scrolling',
        link: '/50_days_of_code/Day_23_Horizontal_Scrolling'
    },
    {
        title: 'Visit Count',
        link: '/50_days_of_code/Day_24_Visit_Count'
    },
    {
        title: 'Login',
        link: '/50_days_of_code/Day_25_Login'
    },
    {
        title: 'Sign Up',
        link: '/50_days_of_code/Day_26_Sign_Up'
    },
    {
        title: 'Currency Converter',
        link: '/50_days_of_code/Day_27_Currency_Converter'
    },
    {
        title: 'Sean Connery',
        link: '/50_days_of_code/Day_28_Sean_Connery'
    },
    {
        title: 'Tip Calculator',
        link: '/50_days_of_code/Day_29_Tip_Calculator'
    },
    {
        title: 'Daily Nasa',
        link: '/50_days_of_code/Day_30_Daily_Nasa'
    },
    {
        title: 'Verify Account',
        link: '/50_days_of_code/Day_31_Verify_Account'
    },
    {
        title: 'Rick Astley',
        link: '/50_days_of_code/Day_32_Rick_Astley'
    },
    {
        title: 'Jeff Healey',
        link: '/50_days_of_code/Day_33_Jeff_Healey'
    },
    {
        title: 'Binary',
        link: '/50_days_of_code/Day_34_Binary'
    },
    {
        title: 'Scroll Indicator',
        link: '/50_days_of_code/Day_35_Scroll_Indicator'
    },
    {
        title: 'Word Count',
        link: '/50_days_of_code/Day_36_Word_Count'
    },
    {
        title: 'Minimal Element',
        link: '/50_days_of_code/Day_37_Minimal_Element'
    },
    {
        title: 'Image Slider',
        link: '/50_days_of_code/Day_38_Image_Slider'
    },
    {
        title: 'HTML Structure',
        link: '/50_days_of_code/Day_39_HTML_Structure'
    },
    {
        title: 'Dominos Pizza',
        link: '/50_days_of_code/Day_40_Dominos_Pizza'
    },
    {
        title: 'I Love/Hate CSS',
        link: '/50_days_of_code/Day_41_I_Love_Hate_CSS'
    },
    {
        title: 'Counter',
        link: '/50_days_of_code/Day_42_Counter'
    },
    {
        title: 'Button',
        link: '/50_days_of_code/Day_43_Button'
    },
    {
        title: 'Hover Effect',
        link: '/50_days_of_code/Day_44_Hover_Effect'
    },
    {
        title: 'Course Description',
        link: '/50_days_of_code/Day_45_Course_Description'
    },
    {
        title: 'Menu',
        link: '/50_days_of_code/Day_46_Menu'
    },
    {
        title: '',
        link: '/50_days_of_code/Day_4'
    },
    {
        title: '',
        link: '/50_days_of_code/Day_4'
    },
    {
        title: 'Slideshow',
        link: '/50_days_of_code/Day_49_Slideshow'
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


for (let i = 1; i <= 50; i++) {
    let projectNumber = [i];
    let projectValues = Object.values(projects.slice(0));

    const linkElement = document.createElement('a');
    linkElement.id = 'link';
    linkElement.innerText = `${projectNumber++}. ${projectValues[i].title}`;
    linkElement.href = projectValues[i].link;
    projectContainer.appendChild(linkElement);
};
