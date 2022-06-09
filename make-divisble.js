const prompt = require('prompt-sync')({sigint: true});

let x = Number(prompt("Entera number for x: "));
let y = Number(prompt("Entera number for y: "));

while(x % y !== 0) {
    console.log(x)
    x++
}

console.log([x] + " is divisible by " + [y]);

