const prompt = require('prompt-sync')({sigint: true});

let var1 = true;
let num1 = 0;

num1 = Number(prompt("Enter number: "));

while (var1 === true){
    num1 = num1 * 2;
        if (num1 < 100){
            console.log(num1)
        }
        else if (num1 > 100){
            var1 = false
                console.log(num1)
        }
}

