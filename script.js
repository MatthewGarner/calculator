
//Elements
const numberDisplay = document.querySelector('.number-display');

//Arithmetic Functions
function add (num1, num2) {
    return num1 + num2;
};

function subtract (num1, num2) {
    return num1 - num2;
};

function multiply (num1, num2) {
    return num1 * num2;
};

function divide (num1, num2) {
    return num1 / num2;
};


function operate(operator, num1, num2) {
    num1 = +num1;
    num2 = +num2;
    let result;

    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        throw new TypeError('Inputs need to be numbers');
    }

    switch (operator) {
        case '+':
            result = sum(num1, num2);
            break;
        case '-':
            result = subtract(num1, num2);
            break;
        case '*':
                result = multiply(num1, num2);
                break;
        case '/':
                result = divide(num1, num2);
                break;
    }
    updateDisplay(result);
    return result;
};


//takes an operator and 2 numbers and then calls one of the above functions on the numbers.

function updateDisplay (currentValue) {
    numberDisplay.textContent = currentValue; 
    return;
};