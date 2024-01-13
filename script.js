function add(a, b) {
    return a + b;
}

function substract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function modulo(a, b) {
    return a % b;
}

function operate(a, b, op) {
    if (op === '+') {
        return add(Number(a),Number(b));
    } else if (op === '-') {
        return substract(Number(a),Number(b));
    } else if (op === '*') { 
        return multiply(Number(a),Number(b));
    } else if (op === '/') { 
        return divide(Number(a),Number(b));
    } else if (op === '%') { 
        return modulo(Number(a),Number(b));
    } else {
        console.log("Invalid operand!");
    }
}

let currentResult = 0;
let currentOperand = 0;
let currentOperator = undefined;

const displayOperand = document.querySelector('#display #current');
const displayResult = document.querySelector('#display #result');
const digits = document.querySelectorAll('.digit');
const operators = document.querySelectorAll('.operator');
const equals = document.querySelector('#equals');
const clear = document.querySelector('#clear');
const sign = document.querySelector('#sign');
const decimal = document.querySelector('#decimal');

digits.forEach((digit) => {
    digit.addEventListener('click', function(e) {
        currentOperand += digit.textContent;
        displayOperand.textContent = Number(currentOperand);
        console.log(currentOperand);
    })
})

operators.forEach((operator) => {
    operator.addEventListener('click', function(e) {
        if (currentOperator == undefined) {
            currentResult = Number(currentOperand);
            currentOperand = 0;
        } else {
            currentResult = operate(currentResult, currentOperand, currentOperator);
            currentOperand = 0;
        }
        currentOperator = operator.textContent;
        displayResult.textContent = currentResult;
        displayOperand.textContent = Number(currentOperand);
    })
})

sign.addEventListener('click', function() {
    currentOperand = operate('-1', currentOperand, '*');
    displayOperand.textContent = Number(currentOperand);
})

decimal.addEventListener('click', function() {
    if (!String(currentOperand).includes('.')) {
        currentOperand =  Number(currentOperand) + '.'
        displayOperand.textContent = currentOperand;
    }
})

equals.addEventListener('click', function() {
    if (currentOperator != undefined) {
        currentResult = operate(currentResult, currentOperand, currentOperator);
        displayOperand.textContent = currentResult;
        displayResult.textContent = '';
        currentResult = 0;
        currentOperand = 0;
        currentOperator = undefined;
    } 
})

clear.addEventListener('click', function() {
    currentResult = 0;
    currentOperand = 0;
    currentOperator = undefined;
    displayOperand.textContent = currentResult;
    displayResult.textContent = '';
})
