for (var i = 0; i < 5; i++) {
  console.log(i);
}

var array = [1, 2, 3, "vishal", "hello", "6", 8, 9]; // =>1*2*3*6*8*9
var result = 1;
// while for loop

for (var i = 0; i < array.length; i++) {
  console.log(i, "==", array[i]);
  // have to check whther array[i] is number or not
  //   condition?
  if (isNaN(array[i])) {
    continue;
  } else {
    result = result * array[i];
  }
}

isNaN(" "); // false
// isNaN will try to convert value into number if that is convertable than it will return false else it will return true
// isNaN() =>  what it does ?

// using loop multiply the above array element if they are numeric number
// and console.log() the result
//

//! => this will convert this just opposite
// true  => false
// false => true
// this operator always convert it operands into the boolean

var b = "vishal";

Boolean(b); // true  ''
console.log(!b); // => false

// let i =0;
// while(i>8) {
//     if(any) {
//         i= i+2
//     } else {
//         i = i+5;
//     }
// }
// it is recommended if you are using two pointer approach you go with the whileloop
// you can chhose any loop there is no specific things

// do while  loop

// this loop will will run one time whether the condition is true or false
//In  second iteration loop condition will check
// first iteration there is no loop check

// let p = 2;
// do {
//   console.log("hey i am running");
//   p = p + 1;
// } while (p > 5);
