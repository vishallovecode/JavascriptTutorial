// there is not return needed for javascript function
// Javascript function by default return undefined value;
// javascript  function can take any number parameter;

function callMe() {
  return "This is my number";
}

function callMe1(mobile, b, c, d, e, f, g, h, i) {
  console.log(b, c, d, e, f, g, h, i);
  return "This is my number " + mobile;
}

function dilip() {
  console.log("Hey i am not returning any thing");
}

var a1 = callMe();
console.log("a1", a1); //This is my number

var a2 = callMe1(123, 1, 2, 3, 4, 5, 6);
console.log("a2", a2); // This is my number +mobile

var a3 = dilip(123, 1, 2, 3, 4, 5, 6); //
console.log("a3", a3); //

// while (true) {
//   // infinite loop
// }

// switch(type) {
//     case 1: {
//         // code and break
//         break;
//     }
//     case 2:  {

//     }
//     default: {

//     }
// }

// Ternary opearator

// function checkNumber (value) {
//     if(isNaN(value)) {
//         return false
//     } else {
//         return true;
//     }
// }

function checkNumber(value) {
  var isNumber = isNaN(value) ? "this not a number" : "this is a number";
  console.log(isNumber);
}

checkNumber(1);
checkNumber("123");
checkNumber("hello");
