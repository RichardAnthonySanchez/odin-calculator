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