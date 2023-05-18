console.log("Hey");

// There is two type of type conversion in Javascript
// 1. Implicit Type conversion (Type Coersion) // JS
// 2. Explicit Type Conversion  (Type Casting) // self

// Implicit Type Conversion

var details = 20 + " Vishal"; // convert 20 into string and + operatoor will concatenate two string;

// Note:1 => All the string except empty string javascript consider a true value
// Note: 2 => all the number except 0 and -0 Javascript consider a true value
// Note: 3 => All the array either empty or some value consider a true value
// Note: 4 => All the object is consider as a true value

const lastName = "Sharma";
const middleName = "";
if (middleName) {
  console.log("Hey having middle name");
} else if (lastName) {
  console.log("hey having last name");
} else {
  console.log("No value");
}

// Number

var a = 30;
var b = 0;
var c = -40;
var d = -0;
// typeof b ==> number
if (a & c) {
  console.log("Hey a and c both are true===>  true&true=true");
}
if (b & c) {
  console.log("Hey b is false and c is true=>>", "false&true=false");
} else {
  console.log("Hey b is false and c is true=>>", "false&true=false");
}
if (b) {
  console.log("b is true");
} else {
  console.log("b is false");
}
if (d) {
  console.log("d is true");
} else {
  console.log("d is false");
}

// const check  = true  / false
// in the

// if()
// conditianlly writing something

// var array = [];
// var object = {};

// Explicit Type conversion

var num1 = "30"; //=> Numeric string value
//if there us any value which is numeric string you can convert that value into number using parseInt

var num2 = parseInt(num1); // deliberately i am changing the type of num1 variable

console.log("Num2=> ", typeof num2, "Num1=>", typeof num1);

// parseInt it will return the number if  value passed as parameter is numeric string value , apart from this
// if we will pass anything this will return NAN => not a number
// parseInt() => number or NaN
var collegeName = "Newton";
var collegeNameConvert = parseInt(collegeName);
console.log("collegeNameConvert", collegeNameConvert);
console.log(typeof NaN); // number

console.log(parseInt("40")); //=> string numeric => 40
console.log(parseInt("BASDYJV")); // => string =>NaN

// parseFloat return number with decimal

var float1 = "1234.5888888";
var floatNumber = parseFloat(float1);
console.log(floatNumber);

var float12 = "1234.57777777777777777777";
var floatNumber1 = parseInt(float1);
console.log(floatNumber1);

// converting into the boolean

var ls = "Vishal";
var ls2 = " ";
console.log(Boolean(ls)); // true
console.log(Boolean(ls2)); // false
