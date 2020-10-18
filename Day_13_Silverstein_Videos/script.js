const video = document.getElementsByTagName('iframe')[0];

const musicVideos = [
    'https://www.youtube.com/embed/4Cn-zoM1bxk',
    'https://www.youtube.com/embed/eD3QkNyORIo',
    'https://www.youtube.com/embed/mgtaRbx4pPQ',
    'https://www.youtube.com/embed/7vOclgxKkic',
    'https://www.youtube.com/embed/K9uiF5e2E9k',
    'https://www.youtube.com/embed/UF_WmeQMEyw',
    'https://www.youtube.com/embed/tkPbfI62_rU',
    'https://www.youtube.com/embed/BhFVKdXyZcY',
    'https://www.youtube.com/embed/oPigQKqHrQU',
    'https://www.youtube.com/embed/9jSrqANAY1Q',
    'https://www.youtube.com/embed/vSyoMDLZ9MM',
    'https://www.youtube.com/embed/toLHO9SvfxU',
    'https://www.youtube.com/embed/B-hvThxHoFo',
    'https://www.youtube.com/embed/TbZY6a7dnNw',
    'https://www.youtube.com/embed/i1jTZwu0RtY',
    'https://www.youtube.com/embed/LGCJ6tksOdA',
    'https://www.youtube.com/embed/ZwfMld5Jcx4',
    'https://www.youtube.com/embed/HY1YLWDLINg',
    'https://www.youtube.com/embed/VkgIae2KiLo',
    'https://www.youtube.com/embed/CW5meu75nQo',
    'https://www.youtube.com/embed/Eksjc3oNZug',
    'https://www.youtube.com/embed/DOOfZN-0UeE',
    'https://www.youtube.com/embed/CZW2xomJeXc',
    'https://www.youtube.com/embed/SqDR4TW2vfs',
    'https://www.youtube.com/embed/Lu60bfVh6JE',
    'https://www.youtube.com/embed/ieV4-L9SYmc',
    'https://www.youtube.com/embed/inIwSPKs0WM',
    'https://www.youtube.com/embed/YNno8gePLX0',
    'https://www.youtube.com/embed/QHUBirNTMCQ',
];

if (location.reload) {
    video.src = musicVideos[Math.floor(Math.random() * 29)];
};