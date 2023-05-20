// console.log("First Javascript code line");

// chrome developer tools

// browser developer tools

// variable

// for storing the data
// whole the world all the website , software everything is nothing without the
// data

// text , number  , array , true/false

// java  => diff , diff data tyep for variable

// it is dynamic type conversion langauge
//it is not  static typed language => JAVA

//In Javascript we have three keyword which is used for defining or
// creating a  variable => var , let , const

// var => form initial  (before 7 June 2015)
// let and const came on ecmascript=>6 => es6

// var

// in javascript anything inside the single quoted , double quoted and  ``(back-tick)
var firstName = "Vishal";
var lastName = "Sharma";
var middleName = `Joshi`;
console.log(firstName, middleName, lastName);

// typeof keyword will tell you what is the data type of variable

console.log(typeof middleName, typeof lastName, typeof firstName);

// this part we will later this for explanation dont consider it for now
// document.getElementById("navbar").innerHTML = firstName + lastName + middleName;
// document.getElementById("button").addEventListener("click", () => {
//   alert("hi");
// });

// dynamic type conversion

var a = `Vishal`; // typeof a = string
console.log(typeof a);
a = 1234; // typeof a number
console.log(typeof a);
var a = 234; // this will not give any error re-declaration allowed for var variable
console.log(a);

// for declaring new variable you need to use either var , let and const

console.log(window.a);
console.log(a);

// variable terms nothing about type (let var const)
b = 30; // =>  var b=30 ; this will be directly attached with the window object
console.log(b);

// Javascript Language is case sensitive

// window is nothing it is the simple object having key and value pair

// number

var c = 40.123;
console.log(typeof c);

// how many types are there in js main
// number
// string
// boolean
// BigInt
// Object
// Symbol
// undefined
//  null

// any mathmatical number whether float , integrer , negative number all will be type of number in js
// below are the keywords provided by the JS
// Infinity
// -Infinity

// InterView Important Questions
console.log("positive=>", typeof Infinity); // Number
console.log("negative=> ", typeof -Infinity); // Number

//  boolean

var check = true;
// typeof always return the string avlue
console.log(typeof check); // 'boolean'
const checker = typeof check; // => 'boolean'
console.log(typeof checker); //string// what  type exactly typeof return  => typeof always return string type
