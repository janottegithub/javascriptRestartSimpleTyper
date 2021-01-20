var input = document.querySelector("input");
var generate = document.querySelector("button");
var writing = document.getElementById("writing");


input.addEventListener("keydown", myScript);

function myScript() {
    writing.textContent = (input.value)
}

generate.addEventListener("click", generator);

function generator() {
    var randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
    writing.style.color = randomColor
}