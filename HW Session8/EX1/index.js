let count = 0;
const n = document.querySelector('h1');
const plus = document.querySelector('.increment')
const minus = document.querySelector('.decrement')
plus.addEventListener('click', function(){
    count +=1;
    n.innerText = count;
})
minus.addEventListener('click', function() {
    count -=1;
    n.innerText = count;
})


