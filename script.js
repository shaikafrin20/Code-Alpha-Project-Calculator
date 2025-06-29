const display = document.getElementById("display");

function appendNumber(num) {
  if (display.innerText === "0") {
    display.innerText = "";
  }
  display.innerText += num;
}

function appendOperator(op) {
  display.innerText += op;
}

function clearDisplay() {
  display.innerText = "0";
}

function deleteLast() {
  display.innerText = display.innerText.slice(0, -1) || "0";
}

function calculate() {
  try {
    const result = eval(display.innerText);
    display.innerText = result;
  } catch {
    display.innerText = "Error";
  }
}
