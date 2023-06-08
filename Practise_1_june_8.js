// Examlpe 1
// console.log(a); // undefined
// var a = 30;

// console.log(a); // 30
// var a = 40;

//Example 2

// console.log(a); //  error
// let a = 40;

// console.log(a); // 40

// a = 60;

// // console.log(b); //  error

// const b = 40;

// console.log(b); // 40

//Example 3

// let a = 40;
// var a = 30;

// console.log(a);

// console.log(a);

// function callMe() {
//   return 20;
// }

// let a = callMe;
// console.log(a);

// console.log(callMe); // undefined

// var callMe = () => {
//   console.log("Hey");
// };

// console.log(callMe1()); // 20
// console.log(callMe1); // function

// function callMe1() {
//   return 20;
// }
// console.log(callMe1); // function
// console.log(callMe1()); // 20

console.log(doRevise);
console.log(undefined());

// function expression
var doRevise = function () {
  console.log("success");
};

console.log(doRevise); // function
console.log(doRevise()); // success
