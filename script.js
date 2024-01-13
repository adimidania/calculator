let currentResult = 0;
let currentOperand = 0;
let currentOperator = null;

function roundResult(a) {
    return Math.round(a*1000)/1000;
}

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
    } else if (op === '×') { 
        return multiply(Number(a),Number(b));
    } else if (op === '÷') { 
        if (b == 0) {
            alert("You can't divide by 0!");
            return 0;
        }
        return divide(Number(a),Number(b));
    } else if (op === '%') { 
        return modulo(Number(a),Number(b));
    } else {
        console.log("Invalid operand!");
    }
}

function appendDigit(digit) {
    currentOperand += digit;
    displayOperand.textContent = Number(currentOperand);
}

function setOperator(operator) {
    if (currentOperator == null) {
        currentResult = Number(currentOperand);
        currentOperand = 0;
    } else {
        currentResult = operate(currentResult, currentOperand, currentOperator);
        currentOperand = 0;
    }
    currentOperator = operator;
    displayResult.textContent = currentResult + currentOperator;
    displayOperand.textContent = Number(currentOperand);
}

function changeSign() {
    currentOperand = operate('-1', currentOperand, '×');
    displayOperand.textContent = Number(currentOperand);
}

function appendDecimal() {
    if (!String(currentOperand).includes('.')) {
        currentOperand =  Number(currentOperand) + '.'
        displayOperand.textContent = currentOperand;
    }
}

function evaluate() {
    if (currentOperator != null) {
        currentResult = operate(currentResult, currentOperand, currentOperator);
        displayOperand.textContent = currentResult;
        displayResult.textContent = '';
        currentResult = 0;
        currentOperand = 0;
        currentOperator = null;
    } 
}

function clearCalculator() {
    currentResult = 0;
    currentOperand = 0;
    currentOperator = null;
    displayOperand.textContent = currentResult;
    displayResult.textContent = '';
}

function handleKeyboardInput(e) {
    if (e.key >= 0 && e.key <= 9) {
        appendDigit(e.key);
    }
    else if (e.key === '.') {
        appendDecimal();
    }
    else if (e.key === '=' || e.key === 'Enter') {
        evaluate()
    }
    else if (e.key === 'Escape') {
        clear()
    }
    else if (e.key === '+' || e.key === '-' || e.key === '*' || e.key === '/') {
        setOperator(convertOperator(e.key))
    } else {
        alert("Invalid input!");
    }
}

function convertOperator(keyboardOperator) {
    if (keyboardOperator === '/') return '÷'
    if (keyboardOperator === '*') return '×'
    if (keyboardOperator === '-') return '−'
    if (keyboardOperator === '+') return '+'
  }

const displayOperand = document.querySelector('#display #current');
const displayResult = document.querySelector('#display #result');
const digitButtons = document.querySelectorAll('.digit');
const operatorButtons = document.querySelectorAll('.operator');
const equalsBtn = document.querySelector('#equals');
const clearBtn = document.querySelector('#clear');
const signBtn = document.querySelector('#sign');
const decimalBtn = document.querySelector('#decimal');

window.addEventListener('keydown', handleKeyboardInput);
digitButtons.forEach((digit) => {
    digit.addEventListener('click', function(e) {
        appendDigit(digit.textContent);
    })
})

operatorButtons.forEach((operator) => {
    operator.addEventListener('click', function(e) {
        setOperator(operator.textContent);
    })
})

signBtn.addEventListener('click', function() {
    changeSign();
})

decimalBtn.addEventListener('click', function() {
    appendDecimal();
})

equalsBtn.addEventListener('click', function() {
    evaluate();
})

clearBtn.addEventListener('click', function() {
    clearCalculator();
})


