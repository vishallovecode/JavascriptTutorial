// Array

// var a = 20;
// console.log(typeof a); // number

// a = function () {};

// console.log(typeof a); // function

// a = [1, 2, 34];
// console.log(typeof a); // object

const a = [
  1,
  2,
  3,
  [1, 2, 3],
  true,
  false,
  "Hey i am array",
  function () {
    console.log("hey");
  },
];

function callme() {
  console.log("hey");
}

console.log(a);
console.log(callme());
console.log(a[7]());
