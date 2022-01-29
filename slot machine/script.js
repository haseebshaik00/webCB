let value1 = document.getElementById('value1');
let value2 = document.getElementById('value2');
let value3 = document.getElementById('value3');

let values = ['1','2','3'];

function getRandomNumber(){
    return Math.floor(Math.random() * 3);
}

setInterval(() => {
    value1.innerText = values[getRandomNumber()];
    value2.innerText = values[getRandomNumber()];
    value3.innerText = values[getRandomNumber()];
}, 600);