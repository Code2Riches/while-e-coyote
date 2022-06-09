// cc (code credit lol) -Greyson ;-)
const prompt = require('prompt-sync')({sigint: true});

let n = Number(prompt("How many numbers deep into the fib sequence do you want to go? "));
let count = 0;

let prevNum = 0;
let currentNum = 1;
let total = 0;

console.log(prevNum);
while (count < n){
   

    console.log(currentNum);
    total = prevNum + currentNum;
    prevNum = currentNum;
    currentNum = total;

    count++;
}
