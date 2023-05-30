const userInput = document.getElementById("userInput");
let expresions = "";

function press(num) {
  expresions += num;
  userInput.value = expresions;
}
function equal() {
  userInput.value = eval(expresions);
  expresions = "";
}
function erase() {
  expresions = "";
  userInput.value = expresions
}
