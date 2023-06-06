// Error Type 1
var newton = {};
var userDetail = {
  name: "Vishal",
};
var a = "hellow";

var b = 123;

var c = [1, 2, 3, 4];

a.tiktok; //  undefined
b.geometry; //  undefined
newton.name; // undefined
userDetail.name; // Vishal
c.name; // undefined

// if there is null and undefined value  if you try to access any key
// that will through the error

const cc = {
  name: {
    name1: {
      name: "Hello",
    },
  },
};
// this will through the error
// cc.name.name1.name.x // undefined
// cc.name.name1.name.x.y; //  // this will through the error

// Error Type 2

// let var const
// const ff;   =>  this will throw the error initilization is required for const variable
const ff = "Flower";
console.log(ff);
// ff = "Vegetable"; // you cant reassign value to const variable error => Uncaught TypeError: Assignment to constant variable.

// Error Type 3

// Object.keys() , Object.values , length

const object = {
  a: 1,
  b: 2,
  c: 3,
};
console.log(object.length);

const array = [1, 2, 3, 4];

console.log(Object.keys(array));

try {
  // 1....100
  array.trim(); // 101
  throw new error("error"); //
  //101 ke bad
} catch (error) {
  console.log(
    "I can handle the error here if occureed  , I can show ui later when we study the dom or react or i can proper meessage"
  );
  console.error(error);
  console.error(error.message);
}
console.log("hey");
console.log("hey");
console.log("hey");
console.log("hey");

// try {
// } catch (error) {}

// array is object only

function divide(num1, num2) {
  try {
    if (num2 === 0) {
      throw "Cannot divide by zero!";
    } else {
      return num1 / num2;
    }
  } catch (error) {
    console.error(error);
  }
}

console.log(divide(6, 0));

// error type in javascript

// Syntax Error
// Logic Error
// Runtime Error

// Reference Error  => You are trying to access the variable which is not defined
