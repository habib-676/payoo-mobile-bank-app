document
  .getElementById("add-money-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const amount = parseFloat(document.getElementById("amount").value);
    const pin = parseInt(document.getElementById("pin").value);
    let balance = parseFloat(document.getElementById("main-balance").innerText);

    if (pin === 1234) {
      if (amount > 0) {
        document.getElementById("main-balance").innerText = amount + balance;
      } else {
        alert("Enter amount correctly");
        return;
      }
    } else {
      alert("This pin is not correct !!!!!!");
    }
  });
