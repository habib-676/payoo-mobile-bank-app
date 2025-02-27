document
  .getElementById("withdraw-money-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const amount = parseFloat(document.getElementById("cash-out-amount").value);
    const agentNum = document.getElementById("agent-num").value;
    const pin = parseInt(document.getElementById("cash-out-pin").value);
    let balance = parseFloat(document.getElementById("main-balance").innerText);
    let transactionContainer = document.getElementById("transaction-container");

    if (pin === 1234) {
      if (balance > amount) {
        document.getElementById("main-balance").innerText = balance - amount;

        // styles
        const div = document.createElement("div");
        div.style.cssText =
          "background-color: white; border-radius: 10px; border: 1px solid black; padding: 10px; display: flex; align-items: center; justify-content: space-between";

        div.innerHTML = `
        <div class="w-11 h-11 bg-gray-300 rounded-full flex justify-center items-center">
          <img class="w-6" src="./assets/purse1.png">
        </div>
        <div class="text-center">
          <p class="font-semibold">Cash Out</p>
          <p class="text-[12px]">Amount : ${amount} &nbsp; &nbsp; A/C : ${agentNum} </p>
        </div>
        <div>
          <i class="fa-solid fa-ellipsis-vertical"></i>
        </div>
        `;
        transactionContainer.appendChild(div);
      } else {
        alert("Enter amount correctly");
        return;
      }
    } else {
      alert("This pin is not correct !!!!!!");
    }
  });
