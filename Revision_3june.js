// Function Statement vs Function expression

// function statment
function mutliply(a, b) {
  return a * b;
}

// const data = mutliply(a, b); // doing function call assignining value to the data

// function expression
const addTwoNumber = function (a, b) {
  return a + b;
};

const divide = (a, b) => {
  return a / b;
};

console.log(mutliply(3, 5)); // 15
console.log(addTwoNumber(3, 5)); // 8
console.log(divide(10, 5)); // 2

// console.log("add", add); //
// console.log(add(1, 2)); // this will give you the error

// anonymous function

const getData = function () {};

console.log(getData);

getData();

function addMe(func, a, b) {
  // func is here reference
  func(a, b);
}

const printData = (x1, x2) => {
  console.log(x1, x2);
};
addMe(printData);

addMe((x1, x2) => {
  console.log(x1, x2);
});

let count = 0;

// setInterval(() => {
//   console.log("hey", count++);
// }, 1000);

var b = 30;

var c = 30;

var a1 = 20;
var a2 = "20";
var a11 = 30;
a11 = "20";

console.log(b, c);

console.log(b, c);

//

// error type in javascript

// Syntax Error
// Logic Error
// Runtime Error

// Reference Error  => You are trying to access the variable which is not defined
// console.log(school);

// Type Error
// there is some function and properties for particular data type , if you try to use that function property outside of that data type than you will this error

var lastName = "    Vishal    ";
console.log(lastName.trim());

var data = [1, 2, 3];

// console.log(data.trim());
// throw "handling proper message";

try {
  throw "handling proper message";
} catch (error) {
  console.log(error);
}

var data = [1, 2, 3, 4];

// destructing
const [c1, c2, c3] = data;

console.log(c1, c2, c3);

console.log(data);

const a111 = [1, 2, 3];

function add(f1, f2, f3) {
  console.log("hey", f1, f2, f3);
}

add(...a111); //add(1,2,3)

// a =1 ,
// b=2 ,
// c=3
