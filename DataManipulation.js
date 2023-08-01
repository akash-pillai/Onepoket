import readlineSync from 'readline-sync';


function sum(a) {

    let sum = 0;
    for (let i = 0; i < a.length; i++) {

        sum = sum + a[i];
    }
    return sum;
}

let input=readlineSync.question("Enter an array of numbers ");
let numbersArray = input.split(' ').map(Number);
console.log(sum(numbersArray));