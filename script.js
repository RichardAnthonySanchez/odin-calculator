function addNumbers(x,y){
    resultToDom(x + y);
}

function subtractNumbers(x,y){
    resultToDom(x - y);
}

function multiplyNumbers(x,y){
    resultToDom(x * y);
}

function divideNumbers(x,y){
    resultToDom(x / y);
}

function operate(operator, x, y){
    if (operator === '+'){
        return addNumbers(x,y);
    } else if (operator === '-'){
        return subtractNumbers(x,y);
    } else if (operator === '*'){
        return multiplyNumbers(x,y);
    } else if (operator === '/'){
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

//operation button gets interpreted
function operationClick(x){
    if (x === 'plus'){
        operationToDom('+');
    } else if (x === 'minus'){
        operationToDom('-');
    } else if (x === 'multiply'){
        operationToDom('*');
    } else if (x === 'divide'){
        operationToDom('/');
    } else {
        operationToDom(null);
    }
}

//operator button click
const operatorClick = document.querySelectorAll('.operator-btn')
operatorClick.forEach((opBtn) => {
    opBtn.addEventListener('click', () => {
        const userOperation = operationClick(opBtn.classList[0]);
    });
});

//send final result to the dom
function resultToDom(x){
    const display = document.querySelector('.display-content');
    display.textContent = x;
    display.append();
}

//send operation to the dom
function operationToDom(x){
    const display = document.querySelector('.display-content');
    display.textContent += x;
    display.append();
    operationArr.push(x);
}

//display value
const displayArr = [];
const operationArr = [];
const displayArrTwo = [];


//send button's result to the dom
function buttonToDom(x){
    const display = document.querySelector('.display-content');
    display.textContent += x;
    display.append();
    if (operationArr[operationArr.length - 1] === undefined){
        displayArr.push(display.textContent);
    } else {
        displayArrTwo.push(x); 
    }
}

//when a button is clicked send input to be interpreted
const digits = document.querySelectorAll('.digit-btn')
digits.forEach((digitBtn) => {
    digitBtn.addEventListener('click', () => {
        buttonPress(digitBtn.classList[0]);
    });
});

//when the equal button is clicked send inputs to operate
const equals = document.querySelectorAll('.equals')
equals.forEach((equalsBtn) => {
    equalsBtn.addEventListener('click', () => {
        operate(operationArr[operationArr.length - 1], displayArr[displayArr.length -1], displayArrTwo[displayArrTwo.length -1]);
    });
});