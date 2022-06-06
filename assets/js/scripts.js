var currentNumberWrapper = document.getElementById('currentNumber');
var currentNumber = 0

document.getElementById('adicionar').addEventListener('click', function increment() {
    if(currentNumber<10) currentNumber = currentNumber + 1;
    currentNumberWrapper.innerHTML = currentNumber;
    if(currentNumber>=0){
    currentNumberWrapper.style.color = 'black';
    }
})

document.getElementById('subtrair').addEventListener('click', function decrement() {
    currentNumber = currentNumber - 1;
    currentNumberWrapper.innerHTML = currentNumber;
    if(currentNumber<0){
    currentNumberWrapper.style.color = 'red';
    }
})






