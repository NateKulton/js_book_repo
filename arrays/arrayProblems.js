// Problem 3:

/*
let myArray = [
  [1, 3, 6, 11],
  [4, 2, 4],
  [9, 17, 16, 0],
];

myArray[0].forEach(function(value) {
  if (value % 2 === 0) {
    console.log(value);
  }
});

myArray[1].forEach(function(value) {
  if (value % 2 === 0) {
    console.log(value);
  }
});

myArray[2].forEach(function(value) {
  if (value % 2 === 0) {
    console.log(value);
  }
});
*/

// Problem 4:

/*

let myArray = [
  1, 3, 6, 11,
  4, 2, 4, 9,
  17, 16, 0,
];



let secondArray = myArray.map(function(value) {
  if (value % 2 === 0) {
   console.log('Even'); // This should be this instead: return 'Even';
  } else {
   console.log('Odd'); // This should be this instead: return 'Odd';
  }
});

*/

// And the conesole.log should be out here to check the answer

// Problem 5:

/*

let things = [1, 'a', '1', 3, NaN, 3.1415, -4, null, false];
let integers = things.filter(function(value) {
  if (Number.isInteger(value)) {
    return value;
  }
});

console.log(integers);

*/

/*

let things = [1, 'a', '1', 3, NaN, 3.1415, -4, null, false];
let integers = things.filter(function(value) {
return Number.isInteger(value);
});

console.log(integers);

*/

// Problem 6:

// LS: answer

/*
function oddLengths(strings) {
  let lengths = strings.map((letters) => letters.length);
  let oddLengths = lengths.filter((number) => number % 2 === 1); // I tried to write mine like this
  return oddLengths;                                             // (!((number) => number % 2 === 1))
}                                                                // It seems like JS doesn't treat this as a boolean
                                                                 // Like I thought it did
let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
console.log(oddLengths(arr));
*/

/*
function oddLengths(strings) {
  let lengths = strings.map((letters) => letters.length);
  let oddLengths = lengths.filter((number) => number % 2 !== 0);
  return oddLengths;
}

let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
console.log(oddLengths(arr));
*/

// Probleme 7

/*
let array = [3, 5, 7];
let timesArray = [];
array.forEach((times) => timesArray.push (times * times))
let squaredNum = timesArray.reduce((accumulator, currentValue) => accumulator + currentValue)

console.log(squaredNum); // output => 83
*/

// LS School code:

/*
function sumOfSquares(numbers) {
  return numbers.reduce((accumulator, number) => {
    return accumulator + number * number;
  }, 0);
}

let array = [3, 5, 7];
console.log(sumOfSquares(array)); // => 83
*/

// Problem 8:

//LS school answer:

/*
function oddLengths(strings) {
  return strings.reduce((filteredNumbersArray, letters) => {
    let length = letters.length;
    if (length % 2 === 1) {
      filteredNumbersArray.push(length);
    }

    return filteredNumbersArray;
  }, []);
}

let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
console.log(oddLengths(arr));
*/

// Problem 9:


// LS answer:

/*
let numbers1 = [1, 3, 5, 7, 9, 11];
let numbers2 = [];
let numbers3 = [2, 4, 6, 8];

console.log(numbers1.includes(3));

console.log(numbers2.includes(3));

console.log(numbers3.includes(3));
*/

// Problem 10:

let arr = [
  ["hello", "world"],
  ["example", "mem", null, 6, 88],
  [4, 8, 12]
];

arr[1][3] = 606;

console.log(arr);
