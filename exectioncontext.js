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

console.log(a);
var a = 30;

// console.log(c);
const c = 30;

function call(a, b, c) {
  var result = a + b + c;

  console.log("helo0");

  return result;
}

// console.log(result);
let result = call(10, 20, 30);

console.log(result);