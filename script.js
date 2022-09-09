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
        if(number === '.' && this.currentOperand.includes('.')) {
            return;
        }
        else {
            this.currentOperand = this.currentOperand.toString() + number.toString();
        }
    }

    chooseOperation(operation) {
        if(this.currentOperand === '.') {
            return;
        }

        this.operation = operation;
        this.previousOperand = this.currentOperand;
        this.currentOperand = '';
    }

    compute() {

    }

    getDisplayNumber(number) {

    }

    updateDisplay() {
        //display current operand
        this.currentOperandElement.innerText = this.currentOperand;
        //display previous operand
        if(this.operation != null) {
            this.previousOperandElement.innerText = `${this.previousOperand} ${this.operation}`;
        }
        else {
            this.previousOperandElement.innerText = '';
        }
        
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
        // console.log(button);
    })
})

acBtn.addEventListener('click', () => {
    calculator.clear();
    calculator.updateDisplay();
})

delBtn.addEventListener('click', () => {
    calculator.delete();
    calculator.updateDisplay();
})

operationBtn.forEach(button => {
    button.addEventListener('click', () => {
        calculator.chooseOperation(button.innerText);
        calculator.updateDisplay();
    })
})

equalsBtn.addEventListener('click', () => {
    calculator.compute();
    calculator.updateDisplay();
})
