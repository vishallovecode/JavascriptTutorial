// this keyword will refer to the object which is currenlty executing the code

// 1. Global Scope
// what object is running in this global scope
console.log(this);
var a = 30;
console.log(window);
// in the global scope keyword 'this' will always refer to the window object

// this  = window;
console.log(this === window);

//2.if you are calling  any function  from  global scope than this will again point to the window

function callMe() {
  console.log("this inside function", this); // window
}

callMe(); // function invocation here this will point out to the window object

// if function are part of the object

// let and const

var employee = {
  name: "Vishal",
  lastName: "Sharma",
  // this cann happen only in noraml function not in arrow function
  printName: function () {
    // this === emplyee
    function callMe4() {
      console.log("callMe4", this); //  this != employee // this  => window
    }
    callMe4(); // function invocation  this => window
    return this.name + " " + this.lastName;
  },
  printNameWithArrow: () => {
    // this will point out to the window
    // if there arrow function this will always point to the its nearest parent this context
    // here window  will be the this
    return this.name + " " + this.lastName;
  },
};

const fullName = employee.printName(); // method call this will point to the value before .
console.log(fullName);
const fullName2 = employee.printNameWithArrow();
console.log(fullName2);

// Scope of let and const are block
// Scope of var are function scope

// if you define let and const in global execution context than let and const is not attached with window object
// but if you define var in global execution context than var is  attached with window object

// let name = "Vishal";
// console.log(window.name); // undefined
// var lastName = "Sharma"; //
// console.log(window.lastName); //  'Sharma'
// console.log(lastName); //  Sharma

// function callme11234() {
//   let name = "Vish12213234al";
//   console.log(window.name); // undefined

//   var lastName = "TITOTO"; //
//   console.log(window.lastName); //  'Sharma'
//   console.log(lastName); //TITOTO
// }

// console.log(lastName); //Sharma

//

//In normal function this does not depends on the what is the parents context it always depends on how it call
[1, 2, 3].join("");

//Function call
// Method Invocation
// Function Invocation
// Constructor Invocation
// In-direct invocation

// the value this depends how you are calling the funcgtion
const employee123 = {
  name: "Vishal",
  lastName: "Sharma",
  printName: function () {
    const innerFunction = () => {
      console.log("innerFunction", this);
    };
    innerFunction();
    function normalInnerFunction() {
      console.log("normalInnerFunction", this);
    }
    normalInnerFunction();
    return this.name + this.lastName;
  },
};

const fullName1 = employee123.printName(); // method invocation
console.log(fullName1); //??

// In arrow function this will take the context of its immediate parent  (function)context
// In arrow function this will take the 'this' of its immediate parent  (function)context
// In arrow function this will not point to its own context  it will always point to it parent context

const arrowFunction = () => {
  //  this = > window
  function normalFunction() {
    // this  =>  window
    const arrow = () => {
      console.log("nested", this); // ?? window
    };
    arrow();
  }
  normalFunction(); // function invocation
};

arrowFunction(); // function invocation  =>

//Example

const students = {
  name: "Vishal",
  lastName: "Sharma",
  college: "Newton",
  printCollegeName: () => {
    console.log(this.college); // this  => windwo //  undefined
  },
  printName: function () {
    // this  => students
    console.log("1==>", this.name, this.lastName); //   Vishal Sharma
    function Func1() {
      console.log("2==>", this.name); // this=>window// window.name  => ''
      function func2() {
        console.log("3==>", this.name); // // this => window
        const fun3 = () => {
          console.log("3==>", this.name); // this  => window
        };
        fun3();
      }
      func2();
    }
    Func1(); // function invocation this  => window
  },
};
students.printName(); // method invocation
students.printCollegeName(); // in thr case of arrow it will always point to its parent context(this)

// this  => context  constructor function
// in constructor this will be always initialize with empty {}

function Student() {
  this; // {}
  this.name = "Vishal";
}

const student = new Student();
// student  ==> {name: 'Vishal'}

// default binding => JS  => this

// but if we want to give our own this to the function how can we do ?? ( this will note will apply in case normal function)
// We cannot give or provide explicit this to the arrow function

const girl = {
  firstName: "Barbie Girl",
  printName: function () {
    function nestedPrintFucntion() {
      // this  ==> girl  => object
      console.log("this", this.firstName); //  udefined => Barbie Girl
    }
    nestedPrintFucntion.call(girl);
    // nestedPrintFucntion.call(this); this is equal tot the line 175
  },
};

girl.printName();

const doctor = {
  firstName: "Vishal",
  lastName: "Sharma",
  age: 27,
  printFullName: function () {
    console.log(this.firstName, this.age, this.lastName);
  },
};

const doctor1 = {
  lastName: "Timo",
  firstName: "Rimo",
};
doctor.printFullName();

doctor.printFullName.call(doctor1); //
doctor.printFullName.apply(doctor1); //

// prototype  => bind  , call , apply/

// In call and apply first argument will be this for the function which is using call and apply
// there is differec in second argument  in apply you have to pass the argument as array of list
// but in the case of call you can pass the seperated argument

function getEmployeeSalary(variable, tds, th) {
  console.log(this, variable, tds, th);
}

const emp1 = {
  firstName: "Vishal",
  increment: "30%",
  salary: 10000,
};
const emp2 = {
  firstName: "Timo",
  increment: "10%",
  salary: 100000,
};
const emp3 = {
  firstName: "Rimo",
  increment: "20%",
  salary: 200000,
};
getEmployeeSalary.call(emp1, 400000, 30);
getEmployeeSalary.apply(emp1, [400000, 30, 134, 3445]);
getEmployeeSalary.call(emp1, 20000, 30);
getEmployeeSalary.apply(emp1, [300000, 30]);

// function biding  => bound function

// here bind return a new function  binded with the first srgument pass in the bind
const boundFuction = getEmployeeSalary.bind(emp1, 123, 356, 12324, 23454);
// boundFuction variable is function reference which is binded with emp1
// inside  boundFuction we can access emp1 as this
boundFuction("Vishal", "Vishal", "Vishal");

// window
const students123 = {
  name: "Vishal",
  lastName: "Sharma",
  college: "Newton",
  printCollegeName: () => {
    console.log("0=>", this.college); // ?? undefined
  },
  printName: function () {
    // this  => students123
    console.log("1==>", this.name, this.lastName); // ?? Vishal Sharma
    function Func1() {
      console.log("2==>", this.name); // ?? this => window.namr  = ""
      function func2() {
        console.log("3==>", this.name); // this  => students123
        const fun3 = () => {
          console.log("4=>", this.name); //??  this => window
        };
        fun3();
      }
      func2.call(students123); //  here we pass argument as comma seperated function invocation this=>window
      func2.apply(students123); // we pass argument as array
    }
    Func1(); // function invocation  this  => window
  },
};
students123.printName(); // method invocation
students123.printCollegeName();

// arrow function this  => will point to the its parent context

const employee1234 = {
  name: "Vishal",
  lastName: "Sharma",
  printName: function () {
    // this => employe1234
    const innerFunction = () => {
      console.log("innerFunction", this); //  this  => 1234
    };
    innerFunction();
    function normalInnerFunction() {
      console.log("normalInnerFunction", this); //  window this  => context
      const CallMe = () => {
        console.log(this); // ?? window
      };
      CallMe();
    }
    normalInnerFunction(); // function invocation this => window
    return this.name + this.lastName;
  },
};

employee1234.printName();

// this  => object   ||  undefined  (strict-mode)
