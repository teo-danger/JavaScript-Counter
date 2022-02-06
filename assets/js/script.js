const decrease = document.querySelector('.decrease');
const increase = document.querySelector('.increase');
const displayNum = document.querySelector('.display-num');
const btnReset = document.querySelector('.btn-reset');


let i = 0;
updateDisplay();


//eventListener
decrease.addEventListener("click", () => {
    i--;
    updateDisplay();
    showResetBtn();
    hideResetBtn();
});
increase.addEventListener("click", () => {
    i++;
    updateDisplay();
    showResetBtn();
    hideResetBtn();
});
btnReset.addEventListener("click", () => {
    i = 0;
    displayNum.innerHTML = i;
    hideResetBtn();
});


//functions
function updateDisplay() {
    displayNum.innerHTML = i;
};
function showResetBtn() {
    if (btnReset.classList.contains('hide')) {
        btnReset.classList.add('show');
        btnReset.classList.remove('hide');
    }
};
function hideResetBtn() {
    if (i === 0) {
        btnReset.classList.remove('show');
        btnReset.classList.add('hide');
    }
};














