// Problem 1:

// const { prompt } = require("readline-sync");

/*
let readlineSync = require('readline-sync');

let name = readlineSync.question('What is your name? ');
console.log(`Hello, ${name}!`);
*/

// Problem 2:

/*
let rlSync = require('readline-sync');

let firstName = rlSync.question('What is your first name? ');
let lastName = rlSync.question('What is your last name? ');
let fullName = firstName + ' ' + lastName;
console.log(`Hello, ${fullName}!`);
*/

/*
  so at first I used all the same values 'rlySync' because
  I wasn't sure if it was the same as 'require', 'question', or "readline-sync".
  So I learned that that is just a place holder variable.
  I thought it was a placeholder but I wasn't 100% sure tbh
*/

// This is Browser Style
// let name = prompt('What is your name? ');
// console.log(`Hello, ${name}!`);




//console.log(`Hello, ${fullName}!`);
//let fullName = firstName + ' ' + lastName;

// This is the edit from the function lesson


function getName(prompt) {
  let rlSync = require('readline-sync');
  let name = rlSync.question(prompt);
  return name;
}

let firstName = getName('What is your first name? ');
let lastName = getName('What is your last name? ');
let fullName = firstName + ' ' + lastName;
console.log(`Hello, ${fullName}!`);
