function calculate() {
  let num1 = Number(document.getElementById("num1").value);
  let num2 = Number(document.getElementById("num2").value);

  let sum = num1 + num2;
  let difference = num1 - num2;
  let product = num1 * num2;

  document.getElementById("result").textContent =
    `Result: ${sum} (Addition), ${difference} (Subtraction), ${product} (Multiplication)`;
}
