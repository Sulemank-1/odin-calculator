
let num1 = 0;
let num2 = 0;
let operator = "";
const displayArea = document.querySelector(".display");
let displayContent = 0;
let lastDigit;

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function operate(num1, operator, num2) {
  if (operator === "+") return add(num1, num2);
  else if (operator === "-") return subtract(num1, num2);
  else if (operator === "*") return multiply(num1, num2);
  else if (operator === "/") return divide(num1, num2);
  else window.alert("Wrong operator");
}

function display(digit) {
  displayArea.textContent += digit;
  // if (digit >= 0 && digit <= 9) {
  //   num1 = digit;
  // } else if (["+", "-", "x", "/", ".", "="].includes(digit)) {
  //   operator = digit;
  // }

  // if (["="].includes(digit))
  //   operate()
}


const clearButton = document.querySelector('.clearButton');

clearButton.addEventListener('click', function(){
  displayArea.textContent = " ";
});

const deleteButton = document.querySelector('.deleteButton');

deleteButton.addEventListener('click', function(){
  const stringLength = displayArea.textContent.length;
  if(stringLength > 0)
      displayArea.textContent = displayArea.textContent.slice(0,stringLength-1);
});





