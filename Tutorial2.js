console.log("Hey");

// There is two type of type conversion in Javascript
// 1. Implicit Type conversion (Type Coersion) // JS
// 2. Explicit Type Conversion  (Type Casting) // self

// Implicit Type Conversion

var details = 20 + " Vishal"; // 20 Vishal convert 20 into string and + operatoor will concatenate two string;

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
var ls2 = "";
console.log(Boolean(ls)); // true
console.log(Boolean(ls2)); // false
console.log(Boolean(-0)); // false
console.log(Boolean(0)); // false
console.log(Boolean(1)); // true
console.log(Boolean(-11)); // true
console.log(Boolean([])); // true
console.log(Boolean({})); // true

// git status

// git add .  //(for adding all the local changes)
// // alternat git add file_name
// git commit  -m  'any message regarding your changes'
// git push

// Conveerting in string

var num3 = 12345;
console.log(typeof num3); // number

var num3s = String(num3);
console.log(typeof num3s); // string

// Equlity Operator

// Loose coupled equality ==
// Type coupled eqaulity  ===

// Note:5 => Double equal operator only compare the value it does not care about the data type
// if value is equal than it will return true whether it is number or string or another data type

// Note:5 => Triple equal operator  compare the value   and its type as well
// if value is equal or data type is equal than only it will return true

var p = 20;
var m = "20";
console.log("==", p == m); // true // == is comparing the value of p and m it does not checking its type

console.log("===", p === m); // false // ==- is comparing the value of p and m it is also checking its type

// Primitive data types
/* 
 number
 string 
 boolean
 Bigint
 null 
 undefined
 Symbol
 */

// except object and array all data type are primitive data type

var concatenate = 20 + 30 + "30";
var concatenate2 = "20" + 30 + 30;

console.log("concatenate=>", concatenate); //5030
console.log("concatenate2=>", concatenate2);

console.log("typeof=>", typeof concatenate); //
console.log("typeof=>", typeof concatenat2); //

// 5030
// 80
// 203030
// 2060
// None of these

var t = 20 + +"30" + 40 + "40" + +"40";

console.log("checker", t);

// if there is any numeric string value  if you add plus operator before it , it will convert numeric string value into numbern like parseInt.

console.log(typeof +"40"); // number

console.log(typeof +"20");
console.log(typeof parseInt("20"));

var tt = +("20" + "30" + "40") + +"120" + "230";

console.log("tt=>", tt);

var tts = -("20" + "30" + "50") - ("30" - "30" + 60);

console.log("tts=>>", tts);

// minus operator

var minus1 = 20 - 20; // 0

var minus2 = 20 - "20";

console.log(minus2);

// Note:4 Except plus operator all other mathmatical operator which used b/w two value
//EX:  value1+value2
// if value1 is numeric string and value2 is numeric string operator will convert numeric to the number and apply the its working
// Any mathmaticl applied b/w two value will convert value into number if any of that number is numeric string

// isNaN => this is javascript inbuilt function

// this is the function which will return true if the parameter of this function is string

// isNaN(param)
// global  => window

var value1 = "vishal"; // THIS IS NOT A NUMBER

console.log(isNaN(value1)); // TRUE

var valu2 = "23450"; // THIS NUMERIC STRING

console.log(isNaN(valu2)); // FALSE

var valu3 = "23";

console.log(isNaN(valu2)); // FALSE

var value = 23;

console.log(isNaN(value)); // FALSE

// Comparison Operator
// == ,  ===
// < , > ,<=, >=

console.log(2 > 3); // false
console.log(2 < 3); // true

// console.log(' "2" < 3', "2" < 3);

console.log("A" < "B"); //  true
console.log("a" < "A"); // FALSE

console.log(' "2" < 3', "2" < 3);

console.log("checker::");

//isNaN('') // false

//isNaN(' ') // false
// '' == +' '

// Note: if any one of the value is boolean, convert boolean to number
// if any one of the value is string  it will try to convert into number
//

//

//
console.log(true == "Vishal");
//1 == NaN; // => false
console.log(true == "1"); //  1 == '1'
console.log(false == 0); //  true

console.log(" " == ""); // false
console.log(" " == 0); // false
console.log(false === 0); // 0==0

console.log([] == ""); // 0 == 0 // true
console.log({} == ""); // NaN == 0 // FALSE
console.log([] == false); // 0 == 0 // true
console.log({} == false); // NaN == 0

let checker = 0;
if (checker) {
  console.log("checker");
}

let checker2 = [];
if (checker2) {
  console.log("checker2");
}

let checker3 = {};
if (checker3) {
  console.log("checker3");
}

let checker4 = NaN;
if (checker4) {
  console.log("checker4");
}

//

if (typeof checker5) {
  console.log("Hey checker5");
}

// false

// true

// true

// true

console.log("0" == false); //true 0== 0
console.log("0" == true); // false 0==1
if ("0") {
  console.log("Hey zero"); //
}
console.log(null == 0); // false
console.log(undefined == 0); // false

console.log(null == undefined); // true

console.log(null == null);

var tt = +("20" + "30" + "40") + +"120" + "230"; // 203040+120+ '230' =>2031601230

console.log("tt=>", tt); //2031601230

var tts = -("20" + "30" + "50") - ("30" - "30" + 60);

console.log("tts=>>", tts); //

console.log(2 > 3); //
console.log(2 < 3); //

console.log(' "2" < 3', "2" < 3); //

console.log("A" < "B"); //
console.log("a" < "A"); //

console.log(' "2" < 3', "2" < 3); //

console.log(+"12vishal"); // NaN
console.log(+"vishal123"); // NaN

console.log(Number("12vishal")); // NaN
console.log(Number("vishal123")); // NaN

console.log(parseInt("12vishal")); // NaN
console.log(parseInt("vishal123")); // NaN

// null and undefined in the case of equal operator  does not happen type conversion it simply compare the given value directly

console.log(NaN == NaN);
console.log(NaN === NaN);

console.log(-0 === +0);

// null  undefined //

console.log(NaN == NaN);
console.log(NaN === NaN);

console.log(-0 === +0);

console.log(parseInt("12vishal"));
console.log(parseInt("vishal123"));

console.log(+"12vishal");
console.log(+"vishal123");

console.log(Number("12vishal"));
console.log(Number("vishal123"));
