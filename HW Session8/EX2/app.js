const inputNumber = document.querySelector('input');
const buttonStart = document.querySelector('.start');
const buttonStop = document.querySelector('.stop');
const text = document.querySelector('p')
let t;
buttonStart.addEventListener('click', function () {
    let time = inputNumber.value
    if (time<=0) {
        clearInterval(t)
        text.innerText = "Time's up";
    }else{
        text.innerText = time;
        time = time - 1;
    }
    t = setInterval(()=>{
        if (time<=0) {
            clearInterval(t)
            text.innerText = "Time's up";
        }else{
            text.innerText = time;
            time = time - 1;
        }
    },1000); 
});
buttonStop.addEventListener('click', function(){
    clearInterval(t)
    text.innerText = 'Paused';
});