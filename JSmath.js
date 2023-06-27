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

// .8*80=> 6.4+20 => 26.4

Math.random() * 80; // =>  // 0 => 80
// 0.73 +20 => 20
// 79.111 => 99..111

// generate the random number with minimum 20 value

// 23.4567 //

console.log(Math.round(6.2)); // 6
console.log(Math.ceil(6.1)); // 7

console.log(Math.round(5.6)); // 6
console.log(Math.floor(5.9)); // 5
