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

// generate whole positive between min to max  here min  and max should be the part of range

function generateRandomNumber(max, min) {
  return Math.ceil(Math.random() * (max - min + 1) + min);
}

generateRandomNumber(20, 100); //  20 ... 99.999999 => 100

Math.max(0, -1, 1, 2, 2, 3, 4, 5, 6, 7, 9000); //  9000

const array = [100, 200, 300, 400, 500, 12, 30, 40];

// one function which takes a array as input and return maximum element from array using math.max

function getMax(arr) {
  return Math.max(...arr);
}

function getMan(arr) {
  return Math.min(...arr);
}

const maxSum = getSum(array); // 500
const maxMin = getMin(array); // 500

console.log("maxSum", max);
console.log("maxSum", maxMin);
