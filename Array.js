// Array

// var a = 20;
// console.log(typeof a); // number

// a = function () {};

// console.log(typeof a); // function

// a = [1, 2, 34];
// console.log(typeof a); // object

const a = [
  1,
  2,
  3,
  [1, 2, 3],
  true,
  false,
  "Hey i am array",
  function () {
    return 8;
  },
];

function callme() {
  console.log("hey");
}

// console.log(a);
// console.log(callme());
// console.log(a[7]());

for (let value of a) {
  console.log(value);
}
for (let index in a) {
  console.log(index);
  break;
}

//imperative approach

for (let i = 0; i < a.length; i++) {
  console.log(a[i]);
  break;
}

// method   Js

// for of
// for in
// loop method
// forEach
//======>// map
// reduce
// filter
// some
// any
// every

// reverse string

// split()

const s = "vishal"; // => [v , i , s , h , a , l]

const setence = "Hey I am Vishal Sharma";

const array = s.split("");
console.log(array);
console.log(s.split("s"));

const array23 = setence.split(" ");
console.log(typeof array23); // Object

const commadata = "Hey , I am vishal Sharma, I am from kanpur uttar pradesh";
const array4 = commadata.split(",");

// Join function

// 1-2-3-4-4-5
const data = [1, 2, 3, 4, 4, 5];

const ss = data.join("-");
console.log(ss);

console.log(typeof data.join("/")); // string

// how to push the element in array

const data2 = [1, 2, 3, 4, 5, 6];
// in array if you did not given any value to given index js automatically set that index value to undefined
// data2[10] = 10;
// console.log(data2);

//push
const pushlen = data2.push("hello");
console.log(data2);
console.log(pushlen);

// pop
const popvalue = data2.pop();
data2.pop();
data2.pop();
data2.pop();
console.log(popvalue);
console.log(data2);

// indexOf

const data1234 = [1, 2, 3, 4, 5, 5, 67, [1, 2, 34], "hello"];

// indexof function take value as parameter and it will return the index of that value if that value present inside tha rray else it will return -1
// if there us multilpe value exist than it will print first ocuurenece
console.log("indexOf", data1234.indexOf(5, 5));
console.log("indexOf", data1234.indexOf(55));

console.log("indexof", data1234.indexOf([1, 2, 34]));
// includes alsoe take value if value exist inside the array it will return true else it will return  false
console.log("includes", data1234.includes("hello"));
console.log("includes", data1234.includes("hell1"));
