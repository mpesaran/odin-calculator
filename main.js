function add(num1, num2) {
    return num1 + num2
}

function subtract(num1, num2) {
    return num1 - num2
}

function multiply(num1, num2) {
    return num1 * num2
}

function divide(num1, num2) {
    if (num2 === 0) {
        return "Error";
    }
    return num1 / num2
}

function operate(num1, num2, operator) {
    switch (operator) {
        case '+':
            return add(num1, num2);
        case '-':
            return subtract(num1, num2);
        case '*':
            return multiply(num1, num2);
        case '/':
            return divide(num1, num2);
        default:
            return null;
    }
}

let currentValue = '';

const numberButtons = document.querySelectorAll('.number')
const screen = document.querySelector(".calculator-screen")
const clearButton = document.getElementById('clear')

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        handleNumberClick(button.textContent)
    })
})


function handleNumberClick(number) {
    currentValue += number;
    screen.textContent = currentValue;
}

clearButton.addEventListener('click', () => {
    screen.textContent = '0'
    currentValue = ''
})

