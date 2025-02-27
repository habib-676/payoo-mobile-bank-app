document
  .getElementById("withdraw-money-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const amount = document.getElementById("cash-out-amount").value;
    const pin = parseInt(document.getElementById("cash-out-pin").value);
    let balance = parseFloat(document.getElementById("main-balance").innerText);

    if (pin === 1234) {
      if (balance > amount) {
        document.getElementById("main-balance").innerText = balance - amount;
      } else {
        alert("Enter amount correctly");
        return;
      }
    } else {
      alert("This pin is not correct !!!!!!");
    }
  });
