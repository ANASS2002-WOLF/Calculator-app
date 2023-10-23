
const display = document.querySelector('.display');
const numbers = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator');
const equals = document.querySelector('.equals');
const clear = document.querySelector('.clear');

let currentNumber= '';
let firstNumber = null;
let operator = null;

numbers.forEach((number) => {
    number.addEventListener('click', (e) => {

        currentNumber = currentNumber + e.target.textContent;
        updateDisplay();

    })
})

operators.forEach((op) => {
    op.addEventListener('click', (e) => {
   

        

 if (firstNumber === null) {

            firstNumber = currentNumber;
            operator = e.target.textContent;
            currentNumber = ''; 
            
        }
        else {
            firstNumber = calclateResult();
            operator = e.target.textContent;
            currentNumber = '';
            updateDisplay()
        }

    })
})

equals.addEventListener('click', () => {

    const result = calculateResult();
    currentNumber = result;
    firstNumber = null;
    operator = null;
    updateDisplay();

}
)

clear.addEventListener('click', () => {
    currentNumber = '';
    firstNumber = null;
    operator = null;
    updateDisplay();
}
)

function updateDisplay() {
    if (display.textContent.length <10) {
    display.textContent = currentNumber;
}
   else {
       display.textContent = currentNumber.slice(0,10);
   }
}




function calculateResult() {
    const num1 = parseInt(firstNumber);
    const num2 = parseInt(currentNumber);
    let result = null;
    switch (operator) {
        case '+':
          result = num1 + num2;
          break;
        case '-':
          result = num1 - num2;
          break;
        case '*':
          result = num1 * num2;
          break;
        case '/':
          result = num1 / num2;
          break;
      }
      return result.toString();
}
