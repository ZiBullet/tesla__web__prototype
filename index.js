const startBtn = document.querySelector('.starter')
const door = document.querySelector('.door')
const teslaCar = document.querySelector('.screen__tesla')
const ch = document.querySelector('.ch')
const car = document.querySelector('.car')
const secImg = document.querySelector('.secondImg')
const secondDoor = document.querySelector('.door2')
const thirdImg = document.querySelector('.thirdImg')

door.onclick = () => {
    teslaCar.classList.remove('ch')
    car.style.display = 'none'
    door.style.display = 'none'
    secImg.style.display = 'block'
    setTimeout(() => {
        secImg.style.opacity = '1'
    }, 200);
}
secondDoor.onclick = () => {
    secImg.classList.add('scale')
    setTimeout(() => {
        secImg.style.opacity = '0'
    }, 200);
    setTimeout(() => {
        secImg.style.display = 'none' 
        secondDoor.style.display = 'none'
    }, 300);
    thirdImg.style.display = 'block'
    setTimeout(() => {
        thirdImg.style.opacity = '1'
    }, 400);
}