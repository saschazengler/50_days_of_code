let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);

const billAmount = document.getElementById('billAmount');
const tipAmount = document.getElementById('tipAmount');
const calculateButton = document.getElementById('calculateButton');
const tipPaid = document.getElementById('tipPaid');
const billPaid = document.getElementById('billPaid');


if (location.reload) {
    billAmount.value = '';
    tipAmount.value = '';
};


function calculateTip(bill, tip) {
    if (billAmount.value > 0 && tipAmount.value) {
        let result = bill * tip / 100;
        tipPaid.textContent += ` $ ${result.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`;
        billPaid.textContent += ` $ ${(result + bill).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`;
    } else {
        alert('"money for nothing and your chicks for free"');
    };
};


function runProgramm() {
    tipPaid.innerText = 'Tip paid:';
    billPaid.innerText = 'Bill paid:';
    
    let userBill = parseInt(billAmount.value);
    let userTip = parseInt(tipAmount.value);

    calculateTip(userBill, userTip);

    billAmount.value = '';
    tipAmount.value = '';
};


tipAmount.addEventListener('keydown', (event) => event.which === 13 ? runProgramm() : null);
calculateButton.addEventListener('click', () => runProgramm());