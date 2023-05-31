// // CallBack Function
// // Higher Order Function
// // Function expression and function declaration
// // Rest operator
// // first class function

// // here the func variable is typeof function and it is called callback function
// // addThreeNumber is called the Higher order functions
// // Callback is passed as reference and called inside the HOF;

// function addThreeNumber(func, c) {
//   return func() + c;
// }

// function twoNumber() {
//   return 20 + 30;
// }

// const arrow = () => {
//   console.log("Hye");
//   return 50 + 30;
// };

// //

// const d = 40;
// // const a = addThreeNumber(twoNumber, d);
// const b = addThreeNumber(arrow(), 40);

// // callback
// const chimchom = () => {
//   return 60 + 60;
// };

// const c = addThreeNumber(() => {
//   return 60 + 60;
// }, 40);

// console.log(a, b, c);

// // Callback hell

// // function parent(func1, func2, func3, func4) {
// //   func1(func2, func3, func4);
// // }

// // function func1(f1, f2, f3, f4) {
// //   f1(f2, f3, f4);
// // }

// // function func2(ff1, ff2, ff3) {
// //   ff1(ff2, ff3);
// // }

// // function func3(fff1, fff2) {
// //   fff1(fff2);
// // }

// // function func4(f4) {
// //   f4();
// // }

// // parent(func1, func2, func3, func4, );

// function harsh(fun2, a) {
//   a = a + fun2();
//   console.log("this is a before fun 2 added ", a);

//   console.log("this is a after fun 2 added", a);
// }
// function twoadd() {
//   return 20 + 30;
// }
// harsh(twoadd, 50);
// const arrow2 = () => {
//   console.log("this is from arrow");
//   return 20 + 20;
// };

// harsh(arrow2, 30);

// Niklhil

// function threeadd(func, a) {
//   return func + a;
// }

// function twoadd(a, b) {
//   return a + b;
// }

// console.log(threeadd(twoadd(1, 2), 5));

// const a = threeadd(twoadd(1, 2), 5);

// console.log(
//   twoadd(() => {
//     return 30 + 40;
//   }, a)
// );

// In javascript we can assign a function in a variable , we can pass as arguments , thats why javascript function is called
// first class

// first class function behave like a javascript variable .

// example
const add = (A, B, C) => {
  return A + B + C;
};
add(1, 2, 34);
