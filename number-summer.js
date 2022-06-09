const prompt = require('prompt-sync')({sigint: true});


console.log("Enter some numbers (type 'done' when compete): ")
let input = prompt("> "); // Variable for user inputted data
let total = 0; // Variable for current total

while(input !== "done"){
    total = total + Number(input); // Total += input;
    input = prompt(">");
}

console.log("Your total is: " + total);