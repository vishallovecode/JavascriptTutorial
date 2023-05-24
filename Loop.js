for (var i = 0; i < 5; i++) {
  console.log(i);
}

var array = [1, 2, 3, "vishal", "hello", "6", 8, 9]; // =>1*2*3*6*8*9
var result = 1;
// while for loop

for (var i = 0; i < array.length; i++) {
  console.log(i, "==", array[i]);
  // have to check whther array[i] is number or not
  //   condition?
  if (isNaN(array[i])) {
    continue;
  } else {
    result = result * array[i];
  }
}

isNaN(" "); // false
// isNaN will try to convert value into number if that is convertable than it will return false else it will return true
// isNaN() =>  what it does ?

// using loop multiply the above array element if they are numeric number
// and console.log() the result
//

//! => this will convert this just opposite
// true  => false
// false => true
// this operator always convert it operands into the boolean

var b = "vishal";

Boolean(b); // true  ''
console.log(!b); // => false

// let i =0;
// while(i>8) {
//     if(any) {
//         i= i+2
//     } else {
//         i = i+5;
//     }
// }
// it is recommended if you are using two pointer approach you go with the whileloop
// you can chhose any loop there is no specific things

// do while  loop

// this loop will will run one time whether the condition is true or false
//In  second iteration loop condition will check
// first iteration there is no loop check

// let p = 2;
// do {
//   console.log("hey i am running");
//   p = p + 1;
// } while (p > 5);

// for loop for array traversal

var dataArray = [1, 2, 3, 45, 6, 78];

for (var i = 0; i < dataArray.length; i++) {
  // here we are printing the index and value
  console.log("value=>", dataArray[i], "index=> ", i);
}

// I dont care about the value

// for in

const listOfAnimal = ["Dog", "Cat", "Parrot"];
// 0,1,2
for (let index in listOfAnimal) {
  console.log("Index=>", index); // 0 ,1,2
}

// for of

for (let value of listOfAnimal) {
  console.log("value=>", value); // Dog , Cat , Parrot
}

var employe = { name: "Vishal", lastName: "Sharma", mobile: 9915378881 };
// key  => name , lastName , mobile
for (let key in employe) {
  console.log("dilip dilip dilip  =>", key);
}

// for of in object (you cannot use) this is not supported by the object
// employee iterable

// for (let value of employe) {
//   console.log("object value=>", value);
// }

// for in  => it will give the key of the iterable item

// for of will give you the value of the iterable item (this will not work in the object)

var c = [1, 2, 3, 4, 5, 6]; // =>  // 1 2,3,4,5,6,
c[0]; // here zero is the key which is use for getting value of specific element
employe.name; // Vishal
