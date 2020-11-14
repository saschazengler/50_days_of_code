const wrapper = document.querySelectorAll('.wrapper');

wrapper.forEach(element => {
    const span = document.createElement('p');
    span.classList.add('number');
    
    let targetNumber = +element.getAttribute('data-number');
    let currentNumber = 0;
   
    let interval = setInterval(() => {
        if (currentNumber < targetNumber) {
            currentNumber++;
            span.innerText = currentNumber;
            element.appendChild(span);
        } else {
            clearInterval(interval);
        };
    }, 30);
});