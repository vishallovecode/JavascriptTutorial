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
