console.log("Today class is more about the functions and it type");

// if number or numeric number return true else false
// Normal Function
function isNumber(value) {
  if (isNaN(value)) {
    return false;
  } else if (value) {
    return true;
  } else {
    return false;
  }
}

// value = 0 , '0', '   ' , '' , '123vishal' , '1234' , 1234

function isAarray() {}
console.log(isNumber("hello"));
console.log(isNumber("")); // true
console.log(isNumber("hello"));
console.log(isNumber(1234));

console.log(isNumber("       "));
// trim()
// if you want to remove empty space from startting and ending from string you can use function trim()
// which is only supported by the string variable

// var a = "";
// var b = "     "; // trim
// var c = "   bbc     ";

// if (a) {
//   console.log("Hey a is empty");
// }

// if (b.trim()) {
//   console.log("Hey a is empty space");
// }
// console.log("chill" + c + "with space");
// console.log("chill" + c.trim() + "without space");

// if there is empty string and some mathmatical operations is happening on that , that
// empty string will give you the result as 0
// if any conditional things is happening on that case empty string is consider as a falsy value
// the  string value with  only white space consider as true in the case of conditionally comparsion but
// it will give you 0 if any mathmatically calculations is happeing

// es6 , arrow function

var arrowFunction = (message) => {
  console.log(message);
  // console.log(arguments);
};

var normalFunction = function (message) {
  console.log(arguments);
  console.log(message);
};

arrowFunction("hey we are learning arrow function");
normalFunction("hey we are learning arrow function");

//  normal function vs arrow function
// arguments
// this => Pending
// syntax

const call = () => {
  // in this case arguments are not defined and  it will through the reference error
  // typeof function return undefined for the not defined variable
  console.log(typeof arguments); //
};
const ncall = function () {
  // here we will able to access the arguments variable ,  that will be array of arguments
  // typeof array return the object
  console.log(typeof arguments); //
};

call();
ncall();

// CallBack functions
// first class function
// Immediately invoked functions
// Function statement and expression
// Higher order functions
// Anonymous function
// default parameter
// diff b/w arguments and parameter

// Immediately invoked functions expression

// => the functions which call or invoked at the time of declaration or definition
// => this functions can we call only once not more than once
// => We can call this functions in shorthand way which is IIFE

// Syntax using normal functions

(function callOnce() {
  console.log("Hey calling only one time");
})();

// callOnce(); // Error:: referece error not  defined
// What is difference b/w not defined and undefined

// Syntax using arrow functions

// defining IIFE with arrow function arrow functions should be anonymous function

(() => {
  console.log("Hey calling only one time using arrow function");
})();

// Some edge cases

// Edge Case: 1
const data = (function callOnce() {
  console.log("Hey calling only one time second time defining");
  return 123;
})();

console.log(data); // 123

// Edge Case: 2
const data2 = (function callOnce() {
  console.log("Hey calling only one time second time defining");
})();
console.log(data2); // undefined

// before es6 => 2015
// we only able to use normal function
// normal function always start with the function keyword

// syntax
function normalFunction() {}

// after es6 => 2015
// arrow function

// var callMe = ()=>{

// }

// Edge Case: 3

const function1 = () => {
  console.log("function1");
};
function function2() {
  console.log("function2");
}
console.log("hey");

// This is not IIFE

// (
//   function1
// )() ;

// (
//   function2
// )()

// Passing parameter

(function functionwithpara(a, b) {
  console.log(a, b);
})(12345, 1234);

((c, d, e) => {
  console.log(c, d, e);
})(12, "hELLO");

// DIFFERENCE B/W PARAMETERS AND ARGUMENTS

// here a and message are parameter
function fancy(a, message) {
  console.log(a, message);
}

fancy(20, "Looks good"); // here 20 and looks good are arguments

// Defaul parameters

function senMesssage(message = "Hey chill i amher", messag2 = "ahjscvs") {
  console.log(message, messag2);
}
senMesssage(); // Hey chill i amher

// prmomises
// callback
// generator
// async

// Anonymous function  =>  the function without name is called anonymous function

// IIFE WITH NORMAL ANONYMOUS FUNCTION

(function () {
  console.log("Hey hi");
})();

//  const data = ()=> {

//  }

// function () {

// }
