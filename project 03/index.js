let display = document.getElementById("display");

// Add value (digit or operator) to the display
function appendValue(value) {
  display.value += value;
}

// Clear the display
function clearDisplay() {
  display.value = "";
}

// Calculate the result
function calculateResult() {
  let expression = display.value;

  // Check if expression includes division by 0
  if (expression.includes("/0")) {
    display.value = "Error";
    return;
  }

  // Evaluate the expression
  let result = eval(expression);
  display.value = result;
}
