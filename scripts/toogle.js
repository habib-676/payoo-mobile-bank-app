document.getElementById("add-money-section").style.display = "none";
document.getElementById("cash-out-section").style.display = "none";
document.getElementById("transaction-section").style.display = "none";

document.getElementById("add-money-box").addEventListener("click", function () {
  document.getElementById("add-money-box").style.backgroundColor =
    "rgba(8, 116, 242, 0.05)";
  document.getElementById("add-money-box").style.border = "1px solid #0874F2";

  document.getElementById("add-money-section").style.display = "block";
  document.getElementById("cash-out-section").style.display = "none";
  document.getElementById("transaction-section").style.display = "none";

  document.getElementById("cash-out-box").style = "";
  document.getElementById("transaction-box").style = "";
});

document.getElementById("cash-out-box").addEventListener("click", function () {
  document.getElementById("cash-out-box").style.backgroundColor =
    "rgba(8, 116, 242, 0.05)";
  document.getElementById("cash-out-box").style.border = "1px solid #0874F2";

  document.getElementById("add-money-section").style.display = "none";
  document.getElementById("cash-out-section").style.display = "block";
  document.getElementById("transaction-section").style.display = "none";

  document.getElementById("add-money-box").style = "";
  document.getElementById("transaction-box").style = "";
});

document
  .getElementById("transaction-box")
  .addEventListener("click", function () {
    document.getElementById("transaction-box").style.backgroundColor =
      "rgba(8, 116, 242, 0.05)";
    document.getElementById("transaction-box").style.border =
      "1px solid #0874F2";

    document.getElementById("cash-out-box").style = "";
    document.getElementById("add-money-box").style = "";

    document.getElementById("add-money-section").style.display = "none";
    document.getElementById("cash-out-section").style.display = "none";
    document.getElementById("transaction-section").style.display = "block";
  });
