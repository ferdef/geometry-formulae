const allButtons = document.querySelectorAll('button');

console.log(allButtons);
allButtons.forEach(button => {
    button.addEventListener('click', onButtonClick);
});

function onButtonClick(element) {
    console.log(element);
    const button = element.currentTarget;
    console.log(button);
    const callFunction = button.dataset["calc"];
    window[callFunction]();
}

function squareArea() {
    const side = document.querySelector("#sa-side").value;
    const result = document.querySelector("#sa-answer");
    if (side) {
        result.innerHTML = side * side;
    } else {
        alert("Introduce los valores necesarios para el cálculo");
    }
}

function rectangleArea() {
    const base = document.querySelector("#ra-base").value;
    const height = document.querySelector("#ra-height").value;
    const result = document.querySelector("#ra-answer");
    if (base && height) {
        result.innerHTML = base * height;
    } else {
        alert("Introduce los valores necesarios para el cálculo");
    }
}

function circleArea() {
    const radius = document.querySelector("#ca-radius").value;
    const result = document.querySelector("#ca-answer");
    if (radius) {
        result.innerHTML = (Math.PI * (radius * radius)).toFixed(2);
    } else {
        alert("Introduce los valores necesarios para el cálculo");
    }
}

function triangleArea() {
    const base = document.querySelector("#ta-base").value;
    const height = document.querySelector("#ta-height").value;
    const result = document.querySelector("#ta-answer");
    if (base && height) {
        result.innerHTML = ((base * height) / 2).toFixed(2);
    } else {
        alert("Introduce los valores necesarios para el cálculo");
    }
}
