var counter = 0;

var counterDisplay = document.getElementById('counter');
var incrementButton = document.getElementById('increment');
var decrementButton = document.getElementById('decrement');

incrementButton.addEventListener('click', () => {
    counter++;
    updateCounter();
    counterDisplay.style.color = 'green';
});

decrementButton.addEventListener('click', () => {
    if (counter > 0) {
        counter--;
        updateCounter();
        counterDisplay.style.color = 'red';
    }
});

function updateCounter() {
    counterDisplay.textContent = counter;
}


var X = document.querySelector('#X')
var Y = document.querySelector('#Y')
var block = document.querySelector('.block')

block.style.width = "500px"
block.style.height = "500px"
block.style.backgroundColor = "aqua"

block.addEventListener('mousemove', (e) =>{
    X.innerHTML = e.screenX;
    Y.innerHTML = e.screenY;

});



var colors=prompt("введите цвет светофора").toLowerCase()
if (colors === "красный"){
    document.getElementById("red").style.backgroundColor = "red";

} else if (colors === "желтый"){
    document.getElementById("yellow").style.backgroundColor = "yellow";

} else if ( colors === "зеленый"){
    document.getElementById("green").style.backgroundColor = "green";

} else{
    alert("ошибка данных")
}
