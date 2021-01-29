//Login Button Event Handler
const loginBtn = document.getElementById("login");
loginBtn.addEventListener("click", function () {
  const loginArea = document.getElementById("loging-area");
  loginArea.style.display = "none";
  const transactionArea = document.getElementById("transaction-area");
  transactionArea.style.display = "block";
});
//Deposite button event handler
const addDeposite = document.getElementById("depositeBtn");
addDeposite.addEventListener("click", function () {
  const depositeAmountNumber = getInputNumber("depositeAmount");

  function updateSpanText(id) {
    const currentValue = document.getElementById(id).innerText;
    const currentValueNumber = parseFloat(currentValue);
    const totalAmount = depositeAmountNumber + currentValueNumber;
    document.getElementById(id).innerText = totalAmount;
  }
  updateSpanText("currentDeposit", depositeAmountNumber);
  document.getElementById("depositeAmount").value = "";
  updateSpanText("currentBalance", depositeAmountNumber);
});
//Withdraw button event handler
const addWithdraw = document.getElementById("withdrawBtn");
addWithdraw.addEventListener("click", function () {
  const withdrawAmountNumber = getInputNumber("withdrawAmount");
  console.log(withdrawAmountNumber);
});

function getInputNumber(id) {
  const amount = document.getElementById(id).value;
  const amountNumber = parseFloat(amount);
  return amountNumber;
}
