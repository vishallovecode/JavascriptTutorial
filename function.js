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
// this
// syntax
