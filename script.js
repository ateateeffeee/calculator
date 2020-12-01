function addNumbers(num1, num2) {
    return num1 + num2
}

function subtractNumbers(num1, num2) {
    return num1 - num2
}

function multiplyNumbers(num1, num2) {
    return num1 * num2
}

function divideNumbers(num1, num2) {
    return num1 / num2
}

function operate(operator, num1, num2) {
    //set this up so the button sets the operator
    if (operator == '+') {
        return addNumbers(num1, num2);
    }

    else if (operator == '-') {
        return subtractNumbers(num1, num2);
    }

    else if (operator == '*') {
        return multiplyNumbers(num1, num2);
    }

    else if (operator == '/') {
        return divideNumbers(num1, num2);
    }
}