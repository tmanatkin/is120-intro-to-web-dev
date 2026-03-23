let billAmount = document.querySelector("#bill-amount");

let tip1 = document.querySelector("#tip-1");
let tip2 = document.querySelector("#tip-2");
let tip3 = document.querySelector("#tip-3");
let tip4 = document.querySelector("#tip-4");

let body = document.querySelector("body");

// let tips = document.querySelectorAll("input[name='tip']");

// set default checked
tip1.checked = true;

// tip calculation
function calculateTip() {
  let bill = parseFloat(billAmount.value) || 0; // get updated value on change

  if (bill < 0) {
    bill *= -1;
    body.style.backgroundColor = "red";
  } else {
    body.style.backgroundColor = "white";
  }

  let tipPercent = parseFloat(document.querySelector('input[name="tip"]:checked').value); // get updated value on change

  let tip = bill * (tipPercent / 100);
  let total = bill + tip;

  document.querySelector("#result").textContent = `Tip: $${tip.toFixed(2)} | Total: $${total.toFixed(2)}`;
}

// trigger calculation when bill input changes
billAmount.addEventListener("input", calculateTip);

// trigger calculation when any radio button is selected
tip1.addEventListener("change", calculateTip);
tip2.addEventListener("change", calculateTip);
tip3.addEventListener("change", calculateTip);
tip4.addEventListener("change", calculateTip);

// document.addEventListener("input", calculate);

// tips.forEach((radio) => {
//   radio.addEventListener("change", calculateTip);
// });
