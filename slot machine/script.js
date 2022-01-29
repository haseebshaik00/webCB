let value1 = document.getElementById('value1');
let value2 = document.getElementById('value2');
let value3 = document.getElementById('value3');
let spin = document.getElementById("spinBtn");
let play = document.getElementById("textBtn");
let values = ['X','O'];

function getRandomNumber(){
    return Math.floor(Math.random() * 2);
}

$(() => {
    spin.onclick = function(event){
        console.log("clicked");
        play.innerText = "Spinning...";
        let count = 0;
        $('.slotText').addClass('slotTextAnimation');
        let spinInterval = setInterval(() => {
                value1.innerText = values[getRandomNumber()];
                value2.innerText = values[getRandomNumber()];
                value3.innerText = values[getRandomNumber()];
                count++;
                if(count == 5){
                    clearInterval(spinInterval);
                    console.log("spin stopped");
                    $('.slotText').removeClass('slotTextAnimation');
                    if(value1.innerText == value2.innerText && value2.innerText ==  value3.innerText)
                    {
                        console.log("win");
                        play.innerText = "You Won!";
                    }
                    else
                        {
                            console.log(value1.innerText);
                            console.log(value2.innerText);
                            console.log(value3.innerText);
                            console.log("lost");
                            play.innerText = "You Lost!";
                        }
                }
            }, 300);
    }
})

    