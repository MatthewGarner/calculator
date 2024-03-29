//Calculator Variables
let firstNum; 
let secondNum;
let currentOperator = null;
let displayValue = 0;


//Elements
const numberDisplay = document.querySelector('.number-display');
const operationsKeys = document.querySelectorAll('.operations button');
const numKeys = document.querySelectorAll('.numpad button');

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
    if (num2 == 0) {
        return null;
    }
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
            result = add(num1, num2);
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
    console.log(`${num1} ${operator} ${num2}`);
    displayValue = result
    updateDisplay(displayValue);
    return result;
};

function clearDisplay() {
    firstNum = '';
    secondNum = '';
    displayValue = '';
    currentOperator = null;
    updateDisplay (displayValue);
}

//takes an operator and 2 numbers and then calls one of the above functions on the numbers.
function updateDisplay (currentValue) {
    numberDisplay.textContent = currentValue; 
    return;
};

function handleNumpadInput (e) {
    const numInput = e.target.name;

    if(displayValue === 0) {
        displayValue = numInput;
    } else {
        displayValue = parseInt(displayValue + numInput.toString());
    }

    updateDisplay(displayValue);
}


function setOperation (operationPressed) {

    if (currentOperator !== null) {
        saveCurrentNumber(displayValue);
        firstNum = operate(currentOperator, firstNum, secondNum);
    }

    currentOperator = operationPressed;
    saveCurrentNumber(displayValue);
    displayValue = '';
}

function saveCurrentNumber (num) {
    (!firstNum) ? firstNum = num : secondNum = num;
    return num;
}

//Add Listeners to keys
numKeys.forEach(function(button) {
    button.addEventListener("click", handleNumpadInput);
});

operationsKeys.forEach(function(button) {
    button.addEventListener("click", e => {
        const operationPressed = e.target.name;

        switch(operationPressed) {
            case '=': 
                if (!currentOperator) {
                    return;
                }
                saveCurrentNumber(displayValue);
                firstNum = operate(currentOperator, firstNum, secondNum); 
                
                currentOperator = null;
                break;
            case 'clear':
                clearDisplay();
                break;
            default:
                setOperation(operationPressed);
        }
    });
});
