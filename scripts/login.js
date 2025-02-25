document
  .getElementById("login-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const accNum = document.getElementById("account-num").value;
    const accPin = document.getElementById("account-pin").value;
    if (accNum.length === 11) {
      if (accPin.length === 4) {
        window.location.href = "./main.html";
      } else {
        alert("Enter 4 digit pin");
      }
    } else {
      alert("Enter a valid id");
    }
  });
