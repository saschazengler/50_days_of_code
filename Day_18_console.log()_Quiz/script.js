let userPoints = 0;


console.log('Run gameStart() to start the game');


function gameStart() {
    console.log('Hey ✌🏻, welcome to the console.log() quiz.');
    console.log('This is all about JavaScript!')
    console.log('I\'ll give you a brief instruction.');

    setTimeout(() => {
        console.log('----------------------------------------------------------------------------------');
        console.log('You have always two choices between \'1\' and \'2\'.');
        console.log('Pass your number in the parentheses of the answer-function.')
        console.log('This game is function-based. For every answer you have to call a specific function.');
    }, 5000);

    setTimeout(() => {
        console.log('----------------------------------------------------------------------------------');
        console.log('Answer functions looks like this: answerOne(), answerTwo() and so on.');
        console.log('And don\'t forget your number in the parentheses.')
    }, 15000);

    setTimeout(() => {
        console.log('----------------------------------------------------------------------------------');
        console.log('If you get stuck, simply call the \'help()\' function.');
    }, 20000);

    setTimeout(() => {
        console.log('Now let\'s get started. Here comes the first question.');
        console.log('----------------------------------------------------------------------------------');
    }, 25000);

    setTimeout(() => {
        questionOne();
    }, 30000);
};




// help and contact
function help() {
    console.log('You called the help function.');
    console.log('To reset the game, simply refresh the page.');
    console.log('If you need help by answering the questions, please call the \'questionHelp()\' function.');
};


function questionHelp() {
    console.log('All answers are numbered from one to n. It looks like this ...');
    console.log('answerOne(), answerTwo(), answerThree() ... and so one. And don\'t forget the parentheses!');

    setTimeout(() => {
        console.log('If you need further help, please call \'contact()\'.');
    }, 4000);
};


function contact() {
    console.log('Get in touch. hello@zenglerjs.com')
};




// questions
function questionOne() {    
    console.log('1️⃣ When has a variable local scope?');

    setTimeout(() => {
        console.log('1. When they are declared within a function?');
    }, 1500);
    
    setTimeout(() => {
        console.log('2. When they are declared outside a function?');
    }, 5000);
};


function questionTwo() {
    console.log('2️⃣ For what is the method .concat() used to?');

    setTimeout(() => {
        console.log('1. For joining two or more numbers?');
    }, 1500);
    
    setTimeout(() => {
        console.log('2. For joining two or more strings or arrays?');
    }, 5000);
};




// answers
function answerOne(answer) {
    first(answer);

    setTimeout(() => {
        questionTwo();
    }, 4000);
};

function answerTwo(answer) {
    second(answer);
};




function first(answer) {
    if (answer === 1) {
        userPoints += 5;
        console.log('This is correct! 🎉');
        console.log(`Your current points are ${userPoints}.`);
    } else if (answer === 2) {
        userPoints -= 2;
        console.log('Sorry, but this is wrong. 📚');
        console.log(`Your current points are ${userPoints}.`);
    } else console.log('Please insert either 1 or 2.');
};


function second(answer) {
    if (answer === 2) {
        userPoints += 5;
        console.log('This is correct! 🎉');
        console.log(`Your current points are ${userPoints}.`);
    } else if (answer === 1) {
        userPoints -= 2;
        console.log('Sorry, but this is wrong. 📚');
        console.log(`Your current points are ${userPoints}.`);
    } else console.log('Please insert either 1 or 2.');
};