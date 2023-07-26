// this keyword will refer to the object which is currenlty executing the code

// 1. Global Scope
// what object is running in this global scope
console.log(this);
var a = 30;
console.log(window);
// in the global scope keyword 'this' will always refer to the window object

// this  = window;
console.log(this === window);

//2.if you are calling  any function  from  global scope than this will again point to the window

function callMe() {
  console.log("this inside function", this); // window
}

callMe();

// if function are part of the object

// let and const

var employee = {
  name: "Vishal",
  lastName: "Sharma",

  // this cann happen only in noraml function not in arrow function
  printName: function () {
    return this.name + " " + this.lastName;
  },
  printNameWithArrow: () => {
    // this will point out to the window
    // if there arrow function this will always point to the its nearest parent this context
    // here window  will be the this
    return this.name + " " + this.lastName;
  },
};

const fullName = employee.printName();
console.log(fullName);
const fullName2 = employee.printNameWithArrow();
console.log(fullName2);

// Scope of let and const are block
// Scope of var are function scope

// if you define let and const in global execution context than let and const is not attached with window object
// but if you define var in global execution context than var is  attached with window object

// let name = "Vishal";
// console.log(window.name); // undefined
// var lastName = "Sharma"; //
// console.log(window.lastName); //  'Sharma'
// console.log(lastName); //  Sharma

// function callme11234() {
//   let name = "Vish12213234al";
//   console.log(window.name); // undefined

//   var lastName = "TITOTO"; //
//   console.log(window.lastName); //  'Sharma'
//   console.log(lastName); //TITOTO
// }

// console.log(lastName); //Sharma
