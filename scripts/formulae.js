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
