const startBtn = document.querySelector('.starter')
const teslaCar = document.querySelector('.screen__tesla')
console.log(teslaCar);

startBtn.onclick = () => {
    teslaCar.classList.add('start')
}