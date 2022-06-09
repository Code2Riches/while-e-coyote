const prompt = require("prompt-sync")({ sigint: true });

let tenString = "";
let inputString = prompt("Enter a string ");

while (tenString.length <= 10) {
  tenString = tenString + inputString;
  console.log(tenString);
}
