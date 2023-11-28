// Problem 1:

/*

1: true *false

2: true

3: true *3

4: true *3

5: false

6: true

7: false

8: false

9: false

10: true

11: false

12: true

*/

// I didn't pay enough attention to the symbols that were used
// I also forgot that the || operator returns the first operand in the example

// Problem 2 and 3:

// This is mine
/*
function evenOrOdd(num) {
  if (num % 2 === 0) {
    console.log('even');
  } else if (num.isInteger !== Number) {
    console.log('Not a num');
  } else {
    console.log('odd');
  }
}
evenOrOdd('cat')
*/
/*

function evenOrOdd(number) {
  if (!Number.isInteger(number)) {
    console.log('Sorry, the value you passed is not an integer');
    return;
  }

  if (number % 2 === 0) {
    console.log('even');
  } else {
    console.log('odd');
  }
}

*/

//Their anwser gives the same answer as mine, but mine doesn't seem to be as good for debugging

// Problem 4:

// case '113' will excute because '113' was passed into it and the output will be 'Product2'
// Bruh I  didn't see there was no breaks, rip


// Problem 5

/*
return foo() ? 'bar' : qux();
*/

/*
if (foo()) {
  return 'bar';
} else {
  return qux();
}
*/

// I got really confused with them being functions in this problems.
// I didn't know that ternary operators also worked on them. It makes sense after I saw the video

// Problem 6:

/*
function isArrayEmpty(arr) {
  if (arr) {
    console.log('Not Empty');
  } else {
    console.log('Empty');
  }
}

isArrayEmpty([]);
*/

// interesting that an empty array is a truthy value

// Problem 7:

// My code

/*
function maxOfTen(word) {
  if (word.length > 10) {
    console.log(word.toUpperCase())
    return word;
  } else {
    console.log(word)
  }
}

maxOfTen('hello world')
maxOfTen('goodbye')
*/

// My code is more hard coded than the walkthrough code is

/*
function capsLong(string) {
  if (string.length > 10) {
    return string.toUpperCase();
  } else {
    return string;
  }
}

console.log(capsLong("hello world"));     // => HELLO WORLD
console.log(capsLong("goodbye")); // => goodbye
*/

// Problem 8:

function numRange(num) {
  if (num <= 50 && num >= 0) {
    console.log(`${num} is between 0 and 50`)
  } else if (num <= 100 && num >= 51) {
    console.log(`${num} is between 51 and 100`)
  } else if (num > 100) {
    console.log(`${num} is greater than 100`)
  } else if (num < 0) {
    console.log(`${num} is less than 0`)
  }
}

numRange(25);
numRange(75);
numRange(125);
numRange(-25);

// Problem 9:

/*

console.log(false ?? null); // Output => false
console.log(true ?? (1 + 2)); // Output => true
console.log((1 + 2) ?? true); // Output => 3
console.log(null ?? false); // Output => false
console.log(undefined ?? (1 + 2)); // Output => 3
console.log((1 + 2) ?? null); // Output => 3
console.log(null ?? undefined); // Output => undefined
console.log(undefined ?? null); // Output => undefined *null

*/


// Problem 10:

// Output => 5, 7
// Output => 0, 0
// Output => 4, 42
// Output => 3, 42
