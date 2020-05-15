const square = document.querySelectorAll('.square');
const mole = document.querySelectorAll('.mole');
const timeLeft = document.querySelector('#time-left');
let score = document.querySelector('#score');

let result = 0;
let hitPosition = null;
let currentTime = timeLeft.textContent;

function randomSquare(){
    square.forEach(className => {
        className.classList.remove('mole');
    });

    let randomPosition = square[Math.floor(Math.random() * 9)];
    randomPosition.classList.add('mole');

    hitPosition = randomPosition.id;
}

square.forEach(id => {
    id.addEventListener('mouseup', () => {
        if(id.id === hitPosition){
            result += 1;
            score.textContent = result;
        }
    })
});

function moveMole(){
    let timerID = null;
    timerID = setInterval(randomSquare, 1000);
}


function countDown(){
    currentTime--;
    timeLeft.textContent = currentTime;

    if(currentTime === 0){
        clearInterval(timerID);
        alert("Time's up! your score is " + result) ? "" : location.reload();
    }
}

let timerID = setInterval(countDown, 1000);
moveMole();
