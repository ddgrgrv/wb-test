const increment = document.getElementById('increment'),
      decrement = document.getElementById('decrement'),
      x = document.querySelectorAll('.counter-btn'),
      counterValue = document.getElementById('count');

let count = 0;

function IncreaseCounter (){
    count++;
    counterValue.textContent = count;
}

function DecreaseCounter (){
    if (counterValue.textContent > 0) {
        count--;
        counterValue.textContent = count;
    } else {
        counterValue.textContent = 0;
    }
}

x.forEach(el=>{
    console.log(el);
    el.addEventListener('click', IncreaseCounter)
});

increment.addEventListener('click', IncreaseCounter);
decrement.addEventListener('click', DecreaseCounter);
