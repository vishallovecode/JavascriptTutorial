// // Examlpe 1
// // console.log(a); // undefined
// // var a = 30;

// // console.log(a); // 30
// // var a = 40;

// //Example 2

// // console.log(a); //  error
// // let a = 40;

// // console.log(a); // 40

// // a = 60;

// // // console.log(b); //  error

// // const b = 40;

// // console.log(b); // 40

// //Example 3

// // let a = 40;
// // var a = 30;

// // console.log(a);

// // console.log(a);

// // function callMe() {
// //   return 20;
// // }

// // let a = callMe;
// // console.log(a);

// // console.log(callMe); // undefined

// // var callMe = () => {
// //   console.log("Hey");
// // };

// // console.log(callMe1()); // 20
// // console.log(callMe1); // function

// // function callMe1() {
// //   return 20;
// // }
// // console.log(callMe1); // function
// // console.log(callMe1()); // 20

// console.log(doRevise);
// console.log(undefined());

// // function expression
// var doRevise = function () {
//   console.log("success");
// };

// console.log(doRevise); // function
// console.log(doRevise()); // success

// let a = 50;
// var b = 40;

// {
//   console.log(b); // 40
//   console.log(a);

//   var b = 90;
//   let a = 200;
//   function call() {
//     // console.log(b); error
//     console.log(a); // undefined
//     let b = 55;
//     var a = 65;
//     console.log(a); // 65
//     console.log(b); // 55
//   }
//   call();
//   console.log(a); // 200
//   console.log(b); // 90
// }
// console.log(a); // 50
// console.log(b); //  90

// 40 error error undefined 65 55 200 90 50 90

// function callMe2(a, b, c) {
//   if (a > b) {
//     var a = 60;
//     let b = 50;
//     const c = 60;
//     console.log(a, b, c); // 60  50 60
//   }
//   console.log(a, b, c);
// }

// callMe2(12, 4, 5);

// console.log(callMe);
// console.log(callMe());

// var callme = function () {
//   return 2;
// };

// function callMe() {
//   return 4;
// }

// primitive number
// []=> 0
console.log([] == ![]); // true
console.log(0 == false); // true
console.log(0 == 0); // true

// ![] => false
// []=> truthy

// function callMe2() {
//   const a = (b = c = 60);
//   console.log(a, b, c); // 60 60 60
// }
// callMe2();

// // console.log(a); error
// console.log(b); // 60
// console.log(c); // 60

// college = "Vishal"; // by defaul
