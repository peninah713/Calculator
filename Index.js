let currentOperand = '';
let previousOperand = '';
let currentOperator = null;

// Append a number to the display
function appendNumber(number) {
  if (currentOperand === '0') {
    currentOperand = number.toString();
  } else {
    currentOperand += number.toString();
  }
  updateDisplay();
}

// Choose an operator (+, -, *, /)
function chooseOperator(operator) {
  if (currentOperand === '') return;
  if (previousOperand !== '') {
    calculate();
  }
  currentOperator = operator;
  previousOperand = currentOperand;
  currentOperand = '';
}

// Perform calculation
function calculate() {
  if (previousOperand === '' || currentOperand === '' || currentOperator === null) return;
  const prev = parseFloat(previousOperand);
  const current = parseFloat(currentOperand);
  let result;
  
  switch (currentOperator) {
    case '+':
      result = prev + current;
      break;
    case '-':
      result = prev - current;
      break;
    case '*':
      result = prev * current;
      break;
    case '/':
      result = current !== 0 ? prev / current : 'Error';
      break;
    default:
      return;
  }
  
  currentOperand = result.toString();
  currentOperator = null;
  previousOperand = '';
  updateDisplay();
}

// Clear the display
function clearDisplay() {
  currentOperand = '';
  previousOperand = '';
  currentOperator = null;
  updateDisplay();
}

// Update the display screen
function updateDisplay() {
  const display = document.getElementById('display');
  display.textContent = currentOperand || '0';
}
