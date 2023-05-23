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
