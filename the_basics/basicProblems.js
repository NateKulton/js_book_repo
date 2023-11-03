// Problem 1:
  let firstName = 'Nate ';
  let lastName = 'Kulton';
  let fullName = firstName + lastName;
  console.log(fullName);

//Problem 2:

/*
  I struggled on this one but I think I got it now.
  I was trying to write in a .js file instead of Node REPL,
  and it made it confusing because I didn't know the value of my variables as they were changing
  but I'll just count this as done because I just followed along with the video to under the principals of the problem
*/

// Problem 3:

/*
  'true' = String
  false = Boolean
  1.5 = Number (or Float in other languages)
  2 = Number
  undefined = Undefined
  { foo: 'bar' } Object (or key-value pairs in other languages)
  (I forgot to use a cap on "object" in my og answer)
*/

// Problem 4:

/*
  Because with concatenation JavaScript coerces the number into a string value before they are concatenated
*/

// Problem 5:
  console.log(Number('5')+ 10);

// Problem 6:
  let num = Number('5') + 10;
  console.log(`The value of 5 + 10 is ${num}.`);

 // Problem 7:
 /*
  This was the answer, interseting return value
  JavaScript seems like it lets you make more mistakes than other languages do
*/
  let foo = ['a', 'b', 'c'];
  console.log(foo.length);  // => 3
  console.log(foo[3]);      // undefined

 // Problem 8:
  let names = ['asta', 'butterscotch', 'puddoing', 'neptune', 'darwin'];
  console.log(names);

  // Problem 9:

pets = {
  asta: "dog",
  butterscotch: "cat",
  pudding: "cat",
  neptune: "fish",
  darwin: 'lizard'
};
console.log(pets);
/*
 At first I made my keys strings, because I forgot/didn't know
 that JavaScript coerces them into strings. I think it looks better with them without the quotes,
 because it makes it easier to see the difference between them and a multi line array
 */

// Problem 10:

/*
  false: Because that is the strict conversion operator rather than the less strict one in '=='
*/

// Problem 11:

/*
  3: because parseInt converts numbers integers, not decimal numbers
*/

// Problem 12:

/*
  NaN was my guess:
  I find it interesting that '12' < '9' evaluates  to true
*/
