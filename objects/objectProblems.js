// Problem 1:

/*
let person = {
  name:       'Bob',
  occupation: 'web developer',
  hobbies:    'painting',
};

console.log(person['name']);
console.log(person.name);
*/

// Problem 3:

// Read notes for info

// Problem 4:

/*
let obj = {
  b: 2,
  a: 1,
  c: 3,
};

let objKeys = Object.keys(obj);
let objKeysToCaps = objKeys.map(key => {
  return key.toUpperCase();
});

console.log(objKeysToCaps);
console.log(obj);
*/

// Problem 5:

/*
let myProtoObj = {
  foo: 1,
  bar: 2,
};

let myObj = Object.create(myProtoObj);
myObj.que = 3;
console.log(myObj.foo);
console.log(myObj.bar);
console.log(myObj.que);
*/

// Problem 6:

/*
Question 1) "foo" :primitive value
Question 2) 3.1415 :primitive value
Question 3) [ 'a', 'b', 'c' ] :object value
Question 4) false :primitive value
Question 5) foo :neither
Question 6) function bar() { return "bar"; } :object value
Question 7) undefined :primitive value
Question 8) { a: 1, b: 2 } :object value
*/

// Problem 7:

// This looks almost the same as problem 5 because I did extra on the og problem,
// and that ended up being almost the same as what they wanted here.
// Except I used the Spanish word for "what" "que" (without the accent mark) instead of qux

/*
let myProtoObj = {
  foo: 1,
  bar: 2,
};

let myObj = Object.create(myProtoObj);
myObj.qux = 3;
console.log(myObj.foo);
console.log(myObj.bar);
console.log(myObj.qux);
*/

// LS Note:

/*
for (let key in myObj) {
  if (myObj.hasOwnProperty(key)) {
    console.log(key);
  }
}
*/

// Problem 8:

// Read notes for info

// Problem 9:

/*
let foo = {
  a: 'hello',
  b: 'world',
};

let qux = 'hello';

function bar(argument1, argument2) {
  argument1.a = 'hi';
  argument2 = 'hi';
}

bar(foo, qux);

console.log(foo.a); // => 'hi'
console.log(qux);  // => 'hello'
*/

// Problem 10:

// primitive values 6 and 4 object values

// Problem 11:

/*
let obj = {
  foo: { a: "hello", b: "world" },
  bar: ["example", "mem", null, { xyz: 6 }, 88],
  qux: [4, 8, 12]
};

obj.bar[3].xyz = 606; // LS answer
console.log(obj)
*/

// Problem 12:

/*
bar = foo

function foo(bar) {
  console.log(bar, bar, bar);
}

foo("hello"); // should print "hello hello hello"
bar("hi");    // should print "hi hi hi"
*/

// Problem 13:


// LS answer:

/*
function foo(bar) {
  console.log(bar());
}

foo(function() { return "Welcome" });
foo(function() { return 3.1415 });
foo(function() { return [1, 2, 3] });
*/

// Problem 14:

/*
// hello is a function
function hello(greeting, name) { // greeting and name are parameters so they are also variables
  return greeting + ' ' + name; // this is the same variables as before
}

function xyzzy() { // xyzzy is a function
  return { a: 1, b: 2, c: [3, 4, 5], d: {} }; // this is an object with
} // and { a: 1, b: 2, c: [3, 4, 5], d: {} }; [3, 4, 5] and are both an array and an object. and all the others are
// Normal key value pairs with primitve values for them

const howdy = hello('Hi', 'Grace'); // howdy is variable that points to invocation of the
// hello function and ('Hi', 'Grace')
// are primitive values that are being passed into them
let foo = xyzzy(); // foo is a variable that points to the invocation of the xyzzy function
*/

// Problem 15:

/*
function bar(arg1, arg2) {
  let foo = 'Hello';
  const qux = {
    abc: [1, 2, 3, [4, 5, 6]],
    def: null,
    ghi: NaN,
    jkl: foo,
    mno: arg1,
    pqr: arg2,
  };

  return qux;
}

let result = bar('Victor', 'Antonina'); // Since we didn't run the code 'Victor Antonina'  is not one of the
// primitive values in this code. That primitive won't be created until we run the code.
*/
