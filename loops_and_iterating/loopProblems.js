// Problem 2:

/*
function factorial(number) {
  let result = 1;
  for (let counter = number; counter > 0; counter -= 1) {
    result *= counter;
  }

  return result;
}

console.log(factorial(1));     // => 1
console.log(factorial(2));     // => 2
console.log(factorial(3));     // => 6
console.log(factorial(4));     // => 24
console.log(factorial(5));     // => 120
console.log(factorial(6));     // => 720
console.log(factorial(7));     // => 5040
console.log(factorial(8));     // => 40320
*/

// This is a copy and paste because I had to watch the video. I was a little confused

// Problem 3:

// Look in loopNotes.md for info

// Problem 4:

/*
let i;
for (i = 0; i < 5;) {
  console.log(i += 1);
} // output: => 1, 2, 3, 4, 5

let j;
for (j = 0; j < 5; j += 1) {
  console.log(j);
} // output: => 0, 1, 2, 3, 4
*/

// Problem 5:

// I see why my code is different, I think it mostly boils down to the fact that,
//I used a while loop instead of a do while loop. EDIT: it was becaue I got rid of the 'result' variable

/*
function randomNumberBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
let tries = 0
let result;

  do {
    result = randomNumberBetween(1, 6);
    tries += 1;
} while (result <= 2)

console.log('It took ' + String(tries) + ' tries to get a number greater than 2');
*/

// Problem 6:

// This is a copy and paste

function factorial(number) {
  if (number === 1) {
    return 1;
  }

  return number * factorial(number - 1);
}

console.log(factorial(1));     // => 1
console.log(factorial(2));     // => 2
console.log(factorial(3));     // => 6
console.log(factorial(4));     // => 24
console.log(factorial(5));     // => 120
console.log(factorial(6));     // => 720
console.log(factorial(7));     // => 5040
console.log(factorial(8));     // => 40320
