console.clear();

const form = document.querySelector('[data-js="form"]');
const resultOutput = document.querySelector('[data-js="result"]');

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

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const formElement = event.target.elements;
  console.log(formElement);
  let result;

  // --v-- write your code here --v--
  const a = Number(formElement.numberA.value);
  const b = Number(formElement.numberB.value);
  if (formElement.addition.checked) {
    result = add(a, b);
  } else if (formElement.subtraction.checked) {
    result = subtract(a, b);
  } else if (formElement.multiplication.checked) {
    result = multiply(a, b);
  } else {
    result = b === 0 ? "nooo donntttttt do that" : divide(a, b);
  }

  // --^-- write your code here --^--

  resultOutput.textContent = result;
});
