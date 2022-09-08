class Calculator {
    constructor(previousOperandElement,currentOperandElement) {
        this.previousOperandElement = previousOperandElement;
        this.currentOperandElement = currentOperandElement;
        this.clear();
    }

    clear() {
        this.currentOperand = '';
        this.previousOperand = '';
        this.operation = undefined;
    }

    delete() {
        this.currentOperand = this.currentOperand.toString().slice(0,-1);
    }

    appendNumber(number) {
        
        this.currentOperand = number;
    }

    chooseOperation(operation) {

    }

    compute() {

    }

    getDisplayNumber(number) {

    }

    updateDisplay() {
        this.currentOperandElement.innerText = this.currentOperand;
        
    }

}



//select all elements of calculator
const numberBtn = document.querySelectorAll(".number");
const operationBtn = document.querySelectorAll('.operation');
const equalsBtn = document.getElementById('equal');
const delBtn = document.getElementById('delete');
const acBtn = document.getElementById('all-clear');
const previousOperandElement = document.getElementById('previous-operand');
const currentOperandElement = document.getElementById('current-operand');


const calculator = new Calculator(previousOperandElement, currentOperandElement);

console.log(numberBtn);

numberBtn.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText);
        calculator.updateDisplay();
        console.log(button)
    })
})

