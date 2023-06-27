// keyword
// console.log(Math.random() * 10); // Object

// for (let i = 0; i < 100; i++) {
//   console.log(Math.random() * 10);
// }

// Math.random() // it will only give the value between 0 to 1 where 1 is exclusive

const MyMath = {
  E: 2.718281828459045,
};

// random
// pow
// floor
// ceil
// max
// min
// sqrt

//

// generate random betweeen given to number
// max and min

let max = 100;
let min = 20;
// min should be part of random number and max should not be the part of random number

const randNo = Math.random() * (max - min) + min;
console.log("Hey", randNo);
