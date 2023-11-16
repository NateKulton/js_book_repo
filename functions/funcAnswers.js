// Problem 1:

/*
  Answer the variable bar well equal 2 on line 7
  The code will execute because bar is a global variable
*/

// I forgot you could make a local and global variable with the same name
// This is why you don't reuse names like this
// I did know it could get reassigned, but I forgot if you use let or const it will just make a new variable instead

// Problem 2:

// I did this problem but it is another dir, I was a bit confused at first but I understood after I watched the video

// Problem 4: (3 is in a different file)

// LS: "What does the following code log to the console?"

function scream(words) {
  words = words + '!!!!';
  return;
  console.log(words);
}

scream('Yipeee');

// I was pretty sure that it wouldn't log anything to the console
// I did double check how a return statement works just to be sure...
// That isn't cheating lol

// Problem 5:

// Nothing because there is no console.log statement

// I should have added that it does return value though
// But I still got the answer right

function scream(words) {
  return words + '!!!!';
}

console.log(scream('Yipeee'));
// I wanted to keep this code so I can remember how to test my return statements


// Problem 6:

// "function multiplyNumbers(num1, num2, num3)" is the function declaration. Edit: I did not know that
//the whole body is the function declaration
function multiplyNumbers(num1, num2, num3) { //The function body is anything between this parentheses
  let result = num1 * num2 * num3;
  return result;
} // and this one

let product = multiplyNumbers(2, 3, 4); // These are the arguments passed into the function
// "multiplyNumbers(2, 3, 4)" is the function invocation
// The function name is "multiplyNumbers" and "product" is equal to the return value of the "multiplyNumbers" function
// (num1, num2, num3) are the parameters
// The return value is 24 and reslult is variable that holds its value (also product is equal to the return value aswell)
// num1, num2, num3, result, product. Edit: multiplyNumbers is also one

// Problem 7:

// "Hello" will be logged to the console once
// So I was half right
// I need to remember undefined is a value so I need to state it when it shows up in my code

// Problem 8:

// 42, 3.1415, undefined will be the output
// I looked at the arguments and kinda over looked the parameters oops
// Real answer 42, 3.1415

// Problem 9:

function multiply(left, right) {
  let product = left * right;
  return product;
}

function getNumber(prompt) {
  return parseFloat(question(prompt));
}

let left = getNumber('Enter the first number: ');
let right = getNumber('Enter the second number: ');
console.log(`${left} * ${right} = ${multiply(left, right)}`);

// Line 1: multiply, left, right
// Line 2: product, left, right
// line 3: product
// line 6: getNumber, prompt
// line 7: question, prompt. Edit: parseFloat
// line 10: left, getNumber
// line 11: right, getNumber
// line 12: left, right, multiply, left, right. Edit: console

// Problem 10:

// Line 1: multiply(global), left(local), right(local)
// Line 2: product(local), left(local), right(local)
// line 3: product(local)
// line 6: getNumber(global), prompt(local)
// line 7: parseFloat(edit: global), question(edit: global), prompt(local)
// line 10: left(global), getNumber(global)
// line 11: right(global), getNumber(global)
// line 12: console(global), left(global), right(global), multiply(global), left(global), right(global)

// Problem 11:

// No, because the left and right in the multiply function has block scope so they are different variables
//  Ls "They are not the same variables. (The function parameters shadow the variables on lines 10 and 11.)"
