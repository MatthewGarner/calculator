//Global vars
let savedNumber;
let savedOperation;

//Select dynamic content areas
const calculatorDisplay = document.getElementById('calculator-output');
const numberButtons = document.querySelectorAll('.number-input');
const operatorButtons = document.querySelectorAll('.operator-input');
const clearButton = document.getElementById('button-clear');
const equalsButton = document.getElementById('button-equals');

//Basic functions for maths operations
function add(a, b) {
    return a + b;
}

function subtract (a, b) {
    return a - b;
}

function multiply (a, b) {
    return a * b;
}

function divide (a, b) {
    if (b == 0){
        alert('You cannot divide by zero');
        return;
    }
    return a / b;
}

//General operator function
function operate(operator, a, b) {
    switch (operator) {
        case "+":
           return add(a,b);
        case "-":
            return subtract(a,b);
        case "*":
            return multiply(a,b);
        case "/":
            return roundResult(divide(a,b));
        default: 
            return "ERROR";
    }
}

function roundResult(number) {
    return (Math.round(number * (10 ** 5))) / (10 ** 5);
}

//Updating display
function updateDisplay(method, newNumber) {
    switch(method) {
        case 'numberPress':
            calculatorDisplay.textContent += newNumber.toString();
            break;
        case 'resolveOperation':
            calculatorDisplay.textContent = newNumber.toString();
            break;
        case 'clearDisplay':
            calculatorDisplay.textContent = "";
            break;
        case 'clearDisplayAndNumbers':
            calculatorDisplay.textContent = "";
            clearSavedData();
            break;
    }
}

function clearSavedData() {
    savedOperation = null;
    savedNumber = null;
}

//Default page load - add listeners

function loadDefault() {
    numberButtons.forEach(element => element
        .addEventListener('click', function(e){
            if ( savedOperation && (calculatorDisplay.textContent === "" || calculatorDisplay.textContent == savedNumber)) {
                updateDisplay('clearDisplay');
                updateDisplay('numberPress', e.target.textContent);
            } else {
                updateDisplay('numberPress', e.target.textContent);
            }       
    }));

    operatorButtons.forEach(element => element
        .addEventListener('click', e => {

            const localSavedNumber = +calculatorDisplay.textContent;
            const localSavedOperation = e.target.textContent;

            if ( !savedOperation || !savedNumber ) {
                savedNumber = localSavedNumber;
                savedOperation = localSavedOperation;
                updateDisplay('clearDisplay');
                return true;
            } else {
                let result = operate(savedOperation, savedNumber, localSavedNumber);
                updateDisplay('resolveOperation', result);

                savedNumber = result;
                savedOperation = localSavedOperation;
            }
        }));

    clearButton.addEventListener('click', () => updateDisplay('clearDisplayAndNumbers'));

    equalsButton.addEventListener('click', () => {
        const localSavedNumber = +calculatorDisplay.textContent;

        if ( !savedOperation || !savedNumber ) {
            updateDisplay('clearDisplay');
            return true;
        } else {
            let result = operate(savedOperation, savedNumber, localSavedNumber);
            updateDisplay('resolveOperation', result);

            savedNumber = result;
            savedOperation = null;
        }
    });

    console.log('page loaded');
}


loadDefault();
