//Java  =>  same data type collection , contigous memrory location

// Javascript

// it is store the collection of any type data =>[1,2,3 'visja' , []]

// declare the array
// it will behave like a normal variable

var array;

// initialize

var array1 = ["12", "Vishal", "sharma", [], {}, true, false];

var obj1 = {}; // empty object iniatiliation  => {}

// how to know that give variable is array
console.log("Array1", typeof array1); // object
console.log("obj1", typeof obj1);

// THIS FUNCTION WILL RETUR TRUE IF GIVEN ARGUMENT IS  ARRAY
Array.isArray(array1); // true
console.log("Array.isArray", Array.isArray(array1)); // true

// how to add data  into array

array1.push("34567");

console.log(array1);

// how can i know how many elements are inside the array
// here  goes .length we can use
console.log(array1.length);

// here indexing will also start from zero only

// Ok fine how can i access the elements
console.log(array1[7]);

// What is the data type of array and how to find it?
// if you want to find the data type of any variable than you have to use typeof
// data type of array in javascript is object

// non-primitive type

// object
// array

// number , boolean . string

// in the java what happesn if you try to access the element more than or equal length of the array
// but in js this does not happen it will give you the undefined

const a = [1, 2, 4];
console.log("index greater than lenght of array", a[10000]);

console.log("dekho me chal rha hun or run ho rha hun");

// Object

var obj1 = {};
// variable obj1 is now the object data type
// object is somehow equivalent to the hashmap
// object will store the key and value pair
// key should be unique
// key can have string and number

// how to add key and value in object

obj1 = { name: "Vishal", rollNo: 12345 };

obj1.lastName = "Sharma";
obj1["city"] = "Kanpur";

// print the object
console.log(obj1);

// if you want to access the value using key

console.log(obj1.lastName); // 0(1)
console.log(obj1["name"]); // 0(1)

// basic of functions

// obj1.1 = 12356; this will give you the array
// obj1.'selected location' = 'bangalore'  //this will give you the array
obj1["selected location"] = "bangalore";
obj1[1] = "1234";

console.log(obj1);

// console.log(obj1.'selected location')

console.log(obj1["selected location"]);

// Basic loop in JS

// for loop
