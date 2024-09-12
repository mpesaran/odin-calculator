let currentValue = '';
let firstNumber = null;
let operator = null;
let shouldReset = false;

const numberButtons = document.querySelectorAll('.number')
const screen = document.querySelector(".calculator-screen")
const clearButton = document.getElementById('clear')
const operatorButtons = document.querySelectorAll('.operator')
const equalsButton = document.getElementById('equals')
const decimalButton = document.getElementById('decimal')

// decimalButton.addEventListener('click', () => {
//     if (!currentValue.contains('.')) {
//         // currentValue += '.';
//         screen.textContent = currentValue;
//         decimalButton.disabled = true;
//     }
// })

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        handleNumberClick(button.textContent)
    })
})

operatorButtons.forEach(button => {
    button.addEventListener('click', () => {
        handleOperatorClick(button.textContent)
    })
})

clearButton.addEventListener('click', () => {
    handleClearClick()
})

equalsButton.addEventListener('click', () => {
    handleEqualsClick()
})

function operate(num1, num2, operator) {
    switch (operator) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            if (num2 === 0) {
                return "Error";
            }
            return num1 / num2;
        default:
            return num2;
    }
}

function handleNumberClick(number) {
    if (shouldReset) {
        currentValue = '';
        shouldReset = false;
        // resetDecimal();
    }
    if (number === '.' && currentValue.includes('.')) {
        return; // If there's already a decimal in the currentValue, do nothing
    }
    currentValue += number;
    screen.textContent = currentValue;
}


function handleOperatorClick(selectedOperator) {
    if (firstNumber !== null && operator !== null) {
        const result = operate(firstNumber, parseFloat(currentValue), operator)
        screen.textContent = result;
        firstNumber = result;
        resetDecimal();
    } else {
        firstNumber = parseFloat(currentValue);

    }
    operator = selectedOperator;
    currentValue = '';
    shouldReset = true;
}

function handleEqualsClick() {
    if (firstNumber !== null && operator !== null) {
        let result = operate(firstNumber, parseFloat(currentValue), operator);
        screen.textContent = result;
        currentValue = result;
        operator = null;
        firstNumber = null;
        shouldReset = true;
        resetDecimal()
    }
}

function handleClearClick() {
    currentValue = ''
    firstNumber = null;
    operator = null;
    shouldReset = false;
    screen.textContent = '0'
}

function resetDecimal() {
    decimalButton.disabled = false;  // Enable the decimal button after each operation
}
