let input = document.querySelector("#textInput");

let value = parseFloat(input.value);

function logTextInput() {
  console.log(input.value);
}

input.addEventListener("input", logTextInput);
