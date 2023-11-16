// Problem 3:

function getNum(prompt) {
  let readlineSync = require('readline-sync');
  let num = readlineSync.question(prompt);
  return num;
}

let firstNum = getNum('What is your first number? ');
let lastNum = getNum('What is your last number? ');
console.log(Number(firstNum) * Number(lastNum));

/*

function multiply(left, right) {
  return left * right;
}

function getNumber(prompt) {
  let readlineSync = require('readline-sync');
  return parseFloat(readlineSync.question(prompt));
}

let left = getNumber('Enter the first number: ');
let right = getNumber('Enter the second number: ');
console.log(`${left} * ${right} = ${multiply(left, right)}`);

*/

// This is how they did it
// The two differences are that I didn't coeres my strings in my function
// and that I forgot to make a use a template literal in myl code
