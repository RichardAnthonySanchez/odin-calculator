function addNumbers(x,y){
    return x + y;
}

function subtractNumbers(x,y){
    return x - y;
}

function multiplyNumbers(x,y){
    return x * y;
}

function divideNumbers(x,y){
    return x / y;
}

function operate(operator, x, y){
    if (operator === "+"){
        return addNumbers(x,y);
    } else if (operator === "-"){
        return subtractNumbers(x,y);
    } else if (operator === "*"){
        return multiplyNumbers(x,y);
    } else if (operator === "/"){
        return divideNumbers(x,y);
    } else {
        return null;
    }
}

//finds the button that was pressed
function buttonPress(x){
    console.log("your button is " + x)
    if (x === 'seven'){
        buttonToDom(7);
    } else if (x === 'eight'){
        buttonToDom(8);
    } else if (x === 'nine'){
        buttonToDom(9);
    } else if (x === 'four'){
        buttonToDom(4);
    } else if (x === 'five'){
        buttonToDom(5);
    } else if (x === 'six'){
        buttonToDom(6);
    } else if (x === 'one'){
        buttonToDom(1);
    } else if (x === 'two'){
        buttonToDom(2);
    } else if (x === 'three'){
        buttonToDom(3);
    } else if (x === 'zero'){
        buttonToDom(0);
    } else if (x === 'decimal'){
        buttonToDom('.');
    } else {
        buttonToDom(null);
    }

}

//send button's result to the dom
function buttonToDom(x){
    const display = document.querySelector('.display-content');
    display.textContent = x;
    display.append();

}

//when a button is clicked send input to be interpreted
const digits = document.querySelectorAll('.digit-btn')
digits.forEach((digitBtn) => {
    digitBtn.addEventListener('click', () => {
        buttonPress(digitBtn.classList[0]);
    });
});