const student = {
  name: "Vishal",
  college: "LPU",
  id: 11607932,
  "no of subject": 4,
};
// Accessing of the value
console.log(student.name); // Vishal
student["no of subject"]; //4

// deleting the key value from object (dynamically)
delete student.name;

console.log(student);

// adding the key and value in js object dynamically
student.firstName = "Vishal";
console.log(student);

// Shorthand Property

// important
// In js object if you pass variable inside it , in that case js object will consider that
// varibale as key and it the value which is obtained by variable will become a value of that key
const firstName = "Vishal";
const data = 40;
const obj1 = { firstName, data };
console.log("Shorthan Property::", obj1);

// In js let var const function  return they are reserved keyword you cannot use this reserver keyword  in any variable
// but in case of object this does impact

// let let   = 30; this will give you error

// important
const student1 = {
  const: 30,
  let: "50",
  function: "hey i am function",
  return: 34,
};
console.log("Resreved keyword of js as key::", student1);

// we can add function inside the object as well
// function getIncrementSalary {
//     return (this.salary * this.increment) / 100 + this.salary;
//   }

const employee = {
  firstName: "Chim",
  lastName: "Rim",
  getFullName: function () {
    console.log("this", this); //  employee
    return this.firstName + " " + this.lastName;
  },
  salary: 300000,
  increment: 30,
  getIncrementSalary: function () {
    return (this.salary * this.increment) / 100 + this.salary;
  },
  getIncrement: () => {
    console.log("this inside arrow function", this);
    return this.increment;
  },
};
// if you are tring to access this inside normal function insdie object than this will; point to the that object itself

// if you are tring to access this inside arrow  function inside object than this will not point to the that object this will point out window object in this case

console.log(employee.getFullName, "getFullName");
console.log(employee.getFullName(), "getFullName call");
console.log(employee.getIncrementSalary());
console.log(employee.getIncrement());
// Destructring

// {} one empyt object
const data123 = {}; // one empty

const sum = (a, b) => {
  return a + b;
};

sum; // this simple variable

sum(1, 2); // invoked functions

// Getters and setters in Javascript Object
// this are like only function

const vehicle = {
  type: "Car",
  tyre: 4,
  // this is called a getter for tyre
  get getTyre() {
    // if (this.tyre > 4) {
    //   return "car";
    // } else {
    //   return "bike";
    // }
    return this.tyre;
  },
  // setter for tyre
  set setTyre(count) {
    // you need to go through sanitization
    // if validation true than upodate else return error
    if (isNaN(count)) {
      this.tyre = 4;
    } else {
      this.tyre = count;
    }
  },
};

console.log("gettters", vehicle.tyre);

vehicle.setTyre = 6;
// vehicle.tyre = "chim";
vehicle.setTyre = "chim";
console.log("gettters", vehicle.getTyre); //  no need to invoked getter function directly

// const humane = {
//   place: "earth",
// };
// humane.place = "Moon";
