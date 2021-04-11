//Select dynamic content areas
const calculatorDisplay = document.getElementById('calculator-output');
const numberButtons = document.querySelectorAll('.number-input');
const operatorButtons = document.querySelectorAll('.operator-input');

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
            return divide(a,b);
        default: 
            return "ERROR";
    }
}

//Default page load
    //TODO - Define default behaviour
function loadDefault() {
    console.log("test");
}

//Add event listeners for inputs
numberButtons.forEach(element => element.addEventListener('click', e => console.log(e.target.textContent)));
operatorButtons.forEach(element => element.addEventListener('click', e => console.log(e.target.textContent)));


let displayNumber = "1";
calculatorDisplay.textContent = displayNumber;

/*
Create the functions that populate the display when you click the number buttons… 
you should be storing the ‘display value’ in a variable somewhere for use in the next step.
*/

//listen for button press
//check which key was pressed and match to number
//add number to screen display