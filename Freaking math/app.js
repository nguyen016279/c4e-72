const cal = document.querySelector("#calculation");
let test = 0;
let interval;

function randNum() {
    let num1 = Math.floor(Math.random() * 10);
    let num2 = Math.floor(Math.random() * 10);
    let result = num1 + num2;
    let lieNumber = [-1, 0, 1];
    test = lieNumber[Math.floor(Math.random() * 2)];
    let showResult = result + test;
    cal.innerHTML = num1 + ' + ' + num2 + ' = ' + showResult;
}

const score = document.querySelector('#score')
let point = 0;

function chooseTrue() {
    point += 1;
    score.innerHTML = `${point}`;
    clearInterval(interval);
}

function chooseFalse() {
    point = 0;
    score.innerText = `${point}`;
    clearInterval(interval);
}
const time = document.querySelector("#time");

function count_down() {
    time.value = 2;
    interval = setInterval(() => {
        time.value = time.value - 1;
        if (time.value == "0") {
            alert("game over");
            clearInterval(interval);
            chooseFalse();
        }
    }, 1000);
}

count_down();
randNum();
const buttonTrue = document.getElementById("button-true");
buttonTrue.addEventListener('click', () => {
    if (test == 0) {
        chooseTrue();
    } else {
        chooseFalse();
    }
    count_down();
    randNum();
});

const buttonFalse = document.getElementById('button-false');
buttonFalse.addEventListener('click', () => {
    if (test !== 0) {
        chooseTrue();
    } else {
        chooseFalse();
    }
    count_down();
    randNum();
});