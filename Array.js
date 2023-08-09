// // Array

// // var a = 20;
// // console.log(typeof a); // number

// // a = function () {};

// // console.log(typeof a); // function

// // a = [1, 2, 34];
// // console.log(typeof a); // object

// const a = [
//   1,
//   2,
//   3,
//   [1, 2, 3],
//   true,
//   false,
//   "Hey i am array",
//   function () {
//     return 8;
//   },
// ];

// function callme() {
//   console.log("hey");
// }

// // console.log(a);
// // console.log(callme());
// // console.log(a[7]());

// for (let value of a) {
//   console.log(value);
// }
// for (let index in a) {
//   console.log(index);
//   break;
// }

// //imperative approach

// for (let i = 0; i < a.length; i++) {
//   console.log(a[i]);
//   break;
// }

// // method   Js

// // for of
// // for in
// // loop method
// // forEach
// //======>// map
// // reduce
// // filter
// // some
// // any
// // every

// // reverse string

// // split()

// const s = "vishal"; // => [v , i , s , h , a , l]

// const setence = "Hey I am Vishal Sharma";

// const array = s.split("");
// console.log(array);
// console.log(s.split("s"));

// const array23 = setence.split(" ");
// console.log(typeof array23); // Object

// const commadata = "Hey , I am vishal Sharma, I am from kanpur uttar pradesh";
// const array4 = commadata.split(",");

// // Join function

// // 1-2-3-4-4-5
// const data = [1, 2, 3, 4, 4, 5];

// const ss = data.join("-");
// console.log(ss);

// console.log(typeof data.join("/")); // string

// // how to push the element in array

// const data2 = [1, 2, 3, 4, 5, 6];
// // in array if you did not given any value to given index js automatically set that index value to undefined
// // data2[10] = 10;
// // console.log(data2);

// //push
// const pushlen = data2.push("hello");
// console.log(data2);
// console.log(pushlen);

// // pop
// const popvalue = data2.pop();
// data2.pop();
// data2.pop();
// data2.pop();
// console.log(popvalue);
// console.log(data2);

// // indexOf

// const data1234 = [1, 2, 3, 4, 5, 5, 67, [1, 2, 34], "hello"];

// // indexof function take value as parameter and it will return the index of that value if that value present inside tha rray else it will return -1
// // if there us multilpe value exist than it will print first ocuurenece
// console.log("indexOf", data1234.indexOf(5, 5));
// console.log("indexOf", data1234.indexOf(55));

// console.log("indexof", data1234.indexOf([1, 2, 34]));
// // includes alsoe take value if value exist inside the array it will return true else it will return  false
// console.log("includes", data1234.includes("hello"));
// console.log("includes", data1234.includes("hell1"));

// // Length
// // this will give you the lenght of arrtay

// // concat

// const aa = [1, 2, 34];
// const bb = [3, 4, 5];

// const cc = aa.concat(bb);
// console.log(cc);

// // reverse
// console.log(aa.reverse());

// // toString

// console.log(aa.toString()); //  '34,2,1' join(',')

// const data123 = [1, 1, 1, 1, 12, 2, 2, 2, 2, 4, 5, 5, 5];
// console.log(data123.lastIndexOf(1)); //  3
// console.log(data123.indexOf(1)); // 0

// console.log(data123.lastIndexOf(12)); //  4
// console.log(data123.indexOf(12)); // 4

// // function expression

// // var myNormalFunction = function () {
// //   return "Hey I am happy!! 🥰";
// // };

// // var myNormalFunction = () => "Hey I am happy!! 🥰";

// // const myNormalFunction = () => {
// //   const data = "Hey I am happy!! 🥰 😄";
// //   return data;
// // };

// console.log("15 june 2023");

// const array2 = [1, 2, 3, "hey", "chill", 5, "relax"];
// // new array =>  [1,2,3,{key: 'hey'} , {key: 'chill'} , 5 , {key: 'relax'}]

// const array3 = [];

// for (let i = 0; i < array2.length; i++) {
//   if (typeof array2[i] === "string") {
//     array3[i] = { name: array2[i] };
//   } else {
//     array3[i] = array2[i];
//   }
// }
// console.log(array3);

// //  higher order functions

// // declarative approach
// // forEach => it higher order function provided by array in js , it is used to iterate the array in js , you can this is the iterative method ,
// //it will take to parameter callback function and this  , this is optional here  ,
// // callbaack function accept three parameter , value   , index , and array itself

// // forEach function always return the undefined
// const random = [1, 2, 3, "hey", "chill", 5, "relax"];

// const call1 = (value, index, array) => {
//   console.log("value=>", value, "index=>", index);
// };

// // random.forEach(call1);
// const chimchom = (value, index, array) => {
//   console.log("value=>", value, "index=>", index);
// };
// // const forReturn = random.forEach(chimchom);
// const forReturn = random.forEach((value, index, array) => {
//   console.log("value=>", value, "index=>", index);
// });

// console.log(forReturn); // undefined

// //  Map  higher  order Functions

// // Higher order iterative method
// // it mostly use for modification of given array , this will return the modfied array with same length
// // map function is only use for the array varable if you use this for another variable it will throw the error
// // map function also except the callback
// // callback of map function also have three value  => (value , index , array)

// // for map callback function is mandatory
// // firsr parameter shoudl be function
// const employee = [40000, 300000, 400000, 23000, 450000, 45000, 600000, 80000];

// const modifyEmployeeArray = (value, index, array) => {
//   if (index == 4) {
//     return;
//   }
//   const obj = {
//     salary: value,
//   };
//   return obj;
// };
// const randomwArray = employee.map(modifyEmployeeArray);
// console.log(randomwArray);

// // Uncaught TypeError: undefined is not a function
// //     at Array.map (<anonymous>)
// //     at Array.js:211:29
// // (anonymous) @ Array.js:211

// const numbers = [3, 4, 5, 6, 8, 9, 10, 15, 16];
// // result
// const result = [
//   { isEven: false },
//   { isEven: true },
//   { isEven: false },
//   { isEven: true },
//   { isEven: true },
//   { isEven: false },
//   { isEven: true },
//   { isEven: true },
//   { isEven: false },
// ];

// const callbackFunc12 = (value, index, array) => {
//   return {
//     isEven: value % 2 == 0 ? true : false,
//   };
// };

// // const modifiedNumber = numbers.map((value, index, array) => {
// //   return {
// //     isEven: value % 2 == 0 ? true : false,
// //   };
// // });
// const modifiedNumber = numbers.map(callbackFunc12);
// console.log(modifiedNumber);

// // opposite of shift is pop
// // shift and unshift in javascript array
// // it will use to remove the element of array from starting

// const value = numbers.shift();
// console.log(value, numbers);

// // push is use for adding the element at the end
// // unshift is use for adding the element at the initial and return the lenght if modified array
// const updatedLen = numbers.unshift("unshift"); //
// console.log("updatedArray", updatedLen);

// var number1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// //=> [false , true , false , true , false , true , false , true , false , true]

// function mymap(callbackfunc, array) {
//   const result = [];
//   for (let i = 0; i < array.length; i++) {
//     result[i] = callbackfunc(array[i], i, array);
//   }
//   return result;
// }

// const func = (v, index, array) => {
//   return v % 2 === 0;
// };

// const mapExample2 = mymap(func, number1);

// const mapExample = number1.map(func);

// console.log("mapExample", mapExample);
// console.log("mapExample2", mapExample2);

// // higher order function

// var number1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// number1.map(func);

// // const mapExample2 = mymap(func, number1);

// // how filter work

// //filter is declrative way to iterate throught the array
// // filter function is provided by javascript
// // filter function is higher order function of javascript array
// // filter function takes first argument as func , if first argument is not function code will not work
// // as name suggest filter use to filter out the data from array and give the new array with filtered data//
// // filter hof always return the array/
// // if condition match its return that element with array else its return empty array

// var number1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// // i want only even number ??

// const func2 = (v, index, array) => {
//   return v % 2 === 0;
//   // true or false
// };

// const filteredData = number1.filter(func2);
// console.log("filter", filteredData);

// function myFilter(f, arr) {
//   const result = [];
//   // array and object primitive datatyye  they are reference type
//   for (let i = 0; i < arr.length; i++) {
//     const isTruthy = f(arr[i], i, array);
//     if (isTruthy) {
//       result.push(arr[i]);
//     }
//   }
//   return result;
// }

// const filter1 = myFilter(func2, number1);
// console.log("mtfilter", filter1);
// const ddd = [];

// // ddd = [1, 2, 4];

// // how to know giveb variable is array or not

// // map , filter , reduce , find

// // if you want to check that given variable is falsy or not

// // // null , undefine , 0  , ''
// // student &&
// //   Array.isArray(student) &&
// //   student.forEach((data) => {
// //     console.log("data", data);
// //   });
// // console.log("hey");

// const student = undefined;
// const student2 = null;
// const student3 = "";
// const student4 = 0;
// const student5 = false;
// const student6 = "vishal";

// // if (student) {
// //   console.log(student);
// // }

// student && console.log("student2", student);
// student2 && console.log("student2", student2);
// student3 && console.log("student3", student3);
// student4 && console.log("student4", student4);
// student5 && console.log("student5", student5);
// student6 && console.log("student6", student6);

// student &&
//   student.forEach(() => {
//     console.log("IT WILL NOT RUN");
//   });

// const student7 = [1, 2];
// Array.isArray(student6) &&
//   student6.forEach(() => {
//     console.log("HEY");
//   });

// // if(Array.isArray(student7)) {
// //   student7.forEach((data) => {
// //     console.log("student7", data);
// //   });
// // }

// // Array.isArray(student7) &&
// //   student7.forEach((data) => {
// //     console.log("student7", data);
// //   });

// // const student8 = {};

// // student8.forEach(() => {});

// // REDUCE

// const companyEmployee = [
//   { name: "Vishal", salary: 20000 },
//   { name: "tiro", salary: 100000 },
//   { name: "verr", salary: 30000 },
//   { name: "tom", salary: 200000 },
//   { name: "rim", salary: 10000 },
//   { name: "chim", salary: 30000 },
// ];

// companyEmployee[0]; //  { name: "Vishal", salary: 20000 },
// companyEmployee[0].name; // 'Vishal'

// let totalSum = 0;
// const sum = (employee, index, array) => {
//   console.log(employee);
//   totalSum = totalSum + employee.salary;
// };

// companyEmployee.forEach(sum);

// console.log(totalSum);

// let employeeSum = 0;
// for (let i = 0; i < companyEmployee.length; i++) {
//   employeeSum = employeeSum + companyEmployee[i].salary;
// }
// console.log(employeeSum);

// const reduceCallback = (acc, value) => {
//   console.log(value); //
//   return acc + value.salary;
// };

// let totalSalary = companyEmployee.reduce(reduceCallback, 0);

// // let totalSalary = companyEmployee.reduce((acc, value) => {
// //   return acc + value.salary;
// // }, 0);

// console.log(totalSalary, "totalSalary");

// // home work is writing my reduce which should behave like reduce

// // edge cases

// // my reduce
// //

// // const myReduce = (callback, array, initial) => {
// //   const acc = typeof initial == "undefined" ? array[0] : initial;
// //   for (let i = 0; i < array.length; i++) {
// //     acc = callback(acc, array[i], index);
// //   }
// //   return acc;
// // };

// const ddddata = [1, 2, 3, 4];

// const sumCllaback = (acc, value, index, array) => {
//   return acc + value;
// };

// const ttSum = ddddata.reduce(sumCllaback);

// console.log(ttSum);

// // find ?? i want to find

// const employeedFinder = (value, index) => {
//   return value.salary === 20000;
// };

// // const selectedEmloyeee = companyEmployee.find((value, index) => {
// //   return value.salary === 20000;
// // });

// const selectedEmloyeee = companyEmployee.find(employeedFinder);
// console.log(selectedEmloyeee);

// //
// const stundetAssi = [
//   { name: "Vishal", assin: 60 },
//   { name: "tiro", assin: 70 },
//   { name: "verr", assin: 80 },
//   { name: "tom", assin: 90 },
//   { name: "rim", assin: 70 },
//   { name: "chim", assin: 70 },
// ];

// // if all the student have assigment % greater  or equal that 60 eligible for gift
// const isEligigbleForGift = stundetAssi.every((value) => {
//   return value.assin >= 60;
// });

// console.log(isEligigbleForGift, "isEligigbleForGift");

// const stundetAssi1 = [
//   { name: "Vishal", assin: 60 },
//   { name: "tiro", assin: 70 },
//   { name: "verr", assin: 80 },
//   { name: "tom", assin: 90 },
//   { name: "rim", assin: 70 },
//   { name: "chim", assin: 10 },
// ];

// const checker = (value) => {
//   return value.assin >= 60;
// };

// // const isEligigbleForGift1 = stundetAssi1.every(checker);

// const isEligigbleForGift1 = stundetAssi1.every((value) => {
//   return value.assin >= 60;
// });

// console.log(isEligigbleForGift1, "isEligigbleForGift1");

// // 60>=  // true => gift
// // 60< // false

// const stundetAssi2 = [
//   { name: "Vishal", assin: 60 },
//   { name: "tiro", assin: 70 },
//   { name: "verr", assin: 95 },
//   { name: "tom", assin: 90 },
//   { name: "rim", assin: 70 },
//   { name: "chim", assin: 10 },
// ];

// const isEligigbleForGift2 = stundetAssi2.some((value) => {
//   return value.assin >= 90;
// });

// console.log(isEligigbleForGift2, "isEligigbleForGift2");

// if anyone of the student have assigment % greater that 90 eligible for gift

// spread operator in array

//  Slice and Splice

// splice => join

// slice =>

// Slice(startIndex , endIndex)

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// your original is not modifying

const slice1 = nums.slice();

console.log("slice1", slice1);

const slice2 = nums.slice(0, 7);

console.log("slice2", slice2); //

const slice3 = nums.slice(2, 2);

console.log("slice2", slice3); //

const slice4 = nums.slice(2, -2);

console.log("slice4", slice4); //

const slice5 = nums.slice(-8, -2); // [3,4,5,6,7,8]

console.log("slice5", slice5); //

console.log(nums);

// splice

// // your original array will  modify

const rank = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

//

const element = rank.splice(0, 2);

//  it will return the effected or deleted element

console.log(element, "element");
console.log(rank); // [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

const element3 = rank.splice(0, 0);
console.log(element3);

const element4 = rank.splice(3, 5);
console.log("element4", element4); //[6, 7, 8, 9, 10]
console.log(rank); //[3, 4, 5, 11, 12, 13, 14, 15]

// joining the element in array

const animalsCount = [4, 5, 6, 7, 8, 11, 2, 3, 5];

const updatedList = animalsCount.splice(
  1,
  0,
  "hello",
  "hey",
  "tit",
  "tot",
  "lol",
  [1, 2, 3, 4],
  { name: "name" }
);

console.log(updatedList); // [8, 11]
console.log(animalsCount); // [4, 5, 6, 7, 'hello', 'hey', 'tit', 'tot', 'lol', 2, 3, 5]

// sorting the array

const mystudents = ["Vishal", "Tim", "ABC", "Zida"];

// Arrays.sort

mystudents.sort();

console.log("mystudents", mystudents);

const assigmentMarks = [90, 30, 60, 10, 600, 10000];

assigmentMarks.sort();

console.log(assigmentMarks, "assigmentMarks");

// sort that accept one more parameter which is called compar function

// const compareFunc = (a, b) => a - b;
const compareFunc = (a, b) => b - a;

// if compare function greater than 0  b will be push  before a
// if compare function less than 0  a will be push  before b
//// if compare function is equal to  0  means both value will be push one by one

assigmentMarks.sort(compareFunc);

console.log(assigmentMarks, "assigmentMarks123");

// Example 1

// sorting array of object

const myEmployee = [
  { name: "Vishal", salary: 20000 },
  { name: "tiro", salary: 100000 },
  { name: "verr", salary: 30000 },
  { name: "tom", salary: 200000 },
  { name: "rim", salary: 10000 },
  { name: "chim", salary: 30000 },
];

myEmployee.sort((a, b) => a.salary - b.salary);
console.log(myEmployee);

//
const employeeName = "V-i-s-h-a-l";

const dataee = employeeName.replace("-", "++");
const dataee1 = employeeName.replaceAll("-", "++");

console.log(dataee);
console.log(dataee1);

// split => convert string into the array

const studentName = "RavanRaj";

console.log(studentName.toLowerCase());
console.log(studentName.toUpperCase());
console.log(studentName.substring(0, 3));
console.log(studentName.indexOf("R"));
console.log(studentName.length);
console.log(studentName.includes("Raj"));
console.log(studentName.includes("Raj"));
studentName.charAt(0);
