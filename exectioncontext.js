// // Single Threaded
// // Synchrnous
// // AsynChrnous
// // Multi Threaded
// // Execution Context
// // Type Of execution context

// // mallinath
// // neha
// // dilon

// console.log(a);

// var a = 20;

// console.log(a);

// // hoisting is the process of allocating memory to the javascript variable due to  this process , you can access
// // variable before its declration or you can access variable top of it declaration

// // console.log(b);

// // let b = 30;
// // console.log(b);

// console.log(c); // temporal dead zone

// let c = 30;
// console.log(c);

// // Temporal Dead Zone  => the period of time during which the let and const declarations cannot be accessed

// console.log(a);
// var a = 30;

// // console.log(c);
// const c = 30;

// function call(a, b, c) {
//   var result = a + b + c;

//   console.log("helo0");

//   return result;
// }

// console.log(result); // undefined
// var result = call(10, 20, 30);

// console.log(result); // 60

// callstack

var a = 20;
var b = 40;

call1();

function call1() {
  console.log(a);
}

call2();

console.log(call2);

function call2() {
  var a = 30;
  console.log(a);
}

function getSum() {
  return a + b;
}

// function declaration

function check() {
  const a = getSum();
  console.log(a);
}

// variable
// function expression
console.log(arrowFunction); // undefined => undefined()
// console.log(arrowFunction()); // this will give you the error undefined is not a function
var arrowFunction = () => {};

// console.log(arrowFunction1); // error referece
let arrowFunction1 = () => {};

// console.log(arrowFunction2); // error referece
const arrowFunction3 = () => {};

// function expression and function declaration

// function  with function statement or declaration can be call before declaration but function declare with expression cannot be called before declaration

// in arrow function function variable  at the time of compilation or
// memory allocation or hositing it will get the value as undefined initally and variable behave like let const and var how they behave in hositing

// call stack is the stack where the  execution context put inside it one by one  , first global execution context , and after that function exection context is pushed if nested exection context that is alos push
