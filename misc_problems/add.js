function add(left, right) { // left & right are parameters here
  let sum = left + right;   // left & right are arguments here
  return sum;
}

let sum = add(3, 6); // 3 and 6 are arguments
console.log(sum);


function add(left, right) { // left & right are parameters here
  let sum = left + right;   // left & right are arguments here
  return sum;
}

console.log(add(3, 6, 5)); // 5 is ignored; prints 9
console.log(add(3));       // second argument missing; prints NaN
// 3 + undefined is NaN

// I copy and pasted these
