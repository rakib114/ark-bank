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
  function updateTxt(id) {
    const currentValue = document.getElementById(id).innerText;
    const currentValueNumber = parseFloat(currentValue);
    const totalAmount = withdrawAmountNumber + currentValueNumber;
    document.getElementById(id).innerText = totalAmount;
  }
  updateTxt("currentWithdraw", withdrawAmountNumber);
  document.getElementById("withdrawAmount").value = "";
  const currentBalance = document.getElementById("currentBalance").innerText;
  const currentBalanceNumber = parseFloat(currentBalance);
  const totalBlacnce = currentBalanceNumber - withdrawAmountNumber;
  document.getElementById("currentBalance").innerText = totalBlacnce;
});

function getInputNumber(id) {
  const amount = document.getElementById(id).value;
  const amountNumber = parseFloat(amount);
  return amountNumber;
}
