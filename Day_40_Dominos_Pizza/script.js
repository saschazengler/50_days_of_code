let index = 0;

const svgElement  = document.getElementsByTagName('svg');
const linearGradient = document.getElementsByTagName('linearGradient');
const polygon = document.getElementsByTagName('polygon');

const idCollection = [
  'orderGradient',
  'makingGradient',
  'ovenGradient',
  'readyGradient',
  'deliveryGradient',
  'rateGradient'
];


function setAnimation(id, animation, element, svg) {  
  animation[index].id = id[index];
  element[index].setAttribute('fill', `url(#${id[index]})`);
  svg[index].style.transform = 'Scale(1.1)';
  
  gsap.to(`#${id[index]} stop`, 2, {
    attr: { offset: '0%' },
    repeat: 0,
    yoyo: false,
    repeatDelay: 0.5,
    ease: 'none'
  });

  index++;
  index > 1 ? svgElement[index - 2].removeAttribute('style') : null;
};


const interval = setInterval(() => {
  if (index < 6) {
    setAnimation(idCollection, linearGradient, polygon, svgElement);
  } else clearInterval(interval);
}, 2000);