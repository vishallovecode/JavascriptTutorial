//

let animal = {
  eats: true,
};

let cow = {
  sound: "bow bow !!",
};

cow.__proto__ = animal; // here __proto__ is behaving like a setter for cow object protoype
// here i am assigning [[prototype]] of cow is equal
// animal.__proto__ = cow; // cyclic proto value error
//  to the animal  now cow can access the propery of animal;

// console.log(cow.__proto__) here __proto_ is behaving like a getter
console.log(cow);
console.log(animal);

// __proto__ behave like setter and getter for prototype and prototype is hidden property
// of the objectb which  refer to the another object  or null
// Prototype Object => this is object which is point by any another object prototype
// The super prootype is Object so all object and function have it super prototype Object
// Object  have prototype which point to the null
// A object can access the property of it parent object using prototype concept this is called
// protoypical inheritance

// Prototype chaining
const robot = {
  speak: () => {
    console.log("hey I am speaking");
  },
  isPublicUse: false,
  walk: () => {
    console.log("hey I am speaking");
  },
  owner: "Robot pvt ltd.",
};
const robotBio = {
  command: "Medicines prescription",
  __proto__: robot,
  //   __proto__: dentistRobot
};
const dentistRobot = {
  name: "Dentist Leela",
  work: "Clean teeth  , remove teeth , break teeh",
  __proto__: robotBio,
};

// Rules

// The value __proto__ should not be value apart from null and Object;
//There should not  be cyclic chaining
// Every object have only one protoype

// __proto__  setter or getter  // deprceated

// Object.getPrototypeOf(args1); // it will have one parameter, it will return the protoype for the parameter // getter
// Object.setPrototypeOf(args1 , args2); // it will have two parameter where first is object where we need to set proto and second is protoype object

console.log("dentistRobot", Object.getPrototypeOf(dentistRobot));

const stud = {
  college: "Newton",
  city: "Remote",
};

const stud1 = {
  name: "Vishal Sharma",
};

// we want to set the stud as a protoype object for stud1 (stud1=> child , stud=>parent)

Object.setPrototypeOf(stud1, stud);

console.log("stud1", Object.getPrototypeOf(stud1));

// javascript  function

// // const data  = Object.create(obj123 , {
//     key:{
//         value :''
//     }
// })
// here obj123 will be protoype for data object

// this

let animal12 = {
  walk(s) {
    console.log("I can walk");
    console.log(s, this);
  },
  eat() {
    console.log("I can walk");
  },
};

const cow123 = {
  name: "apni gaye",
  callMe() {
    console.log("cow", this);
  },
  eat() {
    console.log("Rabbit eating");
  },
  __proto__: animal12,
};

cow123.callMe(); // cow
cow123.walk("Cow123"); //method call
animal12.walk("animal123"); //\

cow123.eat(); //
animal12.eat(); //

//

const array = [1234];
const array1 = [1234, 12];
// we are adding property to the Array prototype
Array.prototype.printWithMessage = function () {
  console.log("Hey I am print with message");
};

array.printWithMessage();
const a = [];
console.log(a);

Array.prototype.cityOfDeviPurnima = "Chhatisgarh";

const array123 = ["devi"];

console.log(array123);
console.log(array123.cityOfDeviPurnima);

function code() {
  console.log(this);
}

console.log(new code());

// Write a ploffill for below given function

// call
// bind
// apply
// map
// filter
// reduce
// Promise.all
// Promise.allSettled

function callMe() {
  console.log("hey I am function");
}

// if i create any function i can access call bind and apply this in any functionm

// Function.prototype.mycall = function () {

// };

// Array.prototype.myFilter = function  () {

// }

// String.prototype.myFilter = function  () {

// }
// Object.prototype.myFilter = function  () {

// }

// Number.prototype.myFilter = function  () {

// }
function Employee(name) {
  this.name = name;
}
Employee.prototype.printData = function () {
  console.log("hey just demo");
};

const emp1 = new Employee("Vishal1");
const emp2 = new Employee("Vishal2");
const emp3 = new Employee("Vishal3");
emp1.printData();
emp2.printData();
emp3.printData();

// Creating a polffill for call

Function.prototype.mycall = function () {
  // this ?? => function
  // logic for call
};

const st = {
  name: "Vishal Sharma",
};
function checker() {
  console.log(this.name);
}

// checker.call(st); //  Vishal Sharma
checker.mycall(st); //  Vishal Sharma
