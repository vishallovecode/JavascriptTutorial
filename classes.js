// function Employee(name) {}

// const emp1 = new Employee('vishal);

// classes are nothing they are also type of fucntion

class Employee {
  // this => {}
  constructor(name) {
    this.name = name;
  }

  // function
  printName() {
    console.log(this.name);
  }

  // setter
  set setName(value) {
    if (value.length >= 1) this.name = value;
    else throw Error("Name should not be less than zero");
  }

  // getter
  get getName() {
    return this.name;
  }
}

// oops
console.log(typeof Employee); // function

const emp1 = new Employee("Vishal");
console.log(emp1);
emp1.setName = "TIm tom";

emp1.printName();

console.log(emp1.getName);

//  20%
// inheritance
// polymorphism
// overriding
// super
// constructor
// parent method
// privarte

class Vehicle {
  constructor(brand, name, color, tyre) {
    this.brand = brand;
    this.name = name;
    this.color = color;
    this.tyre = tyre;
  }
  getVehicleName() {
    return this.name;
  }
  getVehicleColor() {
    return this.color;
  }
  getVehicleTyre() {
    return this.tyre;
  }
  speed(value) {
    console.log("this is the speed", value);
  }
}

class FourWheeler extends Vehicle {
  constructor(...args) {
    // args  =>
    super(...args);
  }
  getMileage(value) {
    console.log("this is the mileage", value);
  }
  // overriding
  getVehicleTyre() {
    return super.getVehicleTyre();
  }
}

const four = new FourWheeler("mahindra", "xuv700", "black", 4);
four.speed(200);
four.getMileage(400);
console.log(four.getVehicleName());

console.log(four);

// Private  member and method in Javascipt classes

class Newton {
  // we use #
  #studentCount = 0; // class member and field
  _instrutorCount = 0;
  get instrutorCount() {
    return this._instrutorCount;
  }
  set setStudentCount(value) {
    this.#studentCount = value;
  }
  // proctecting route
  set setInstructorCount(count) {
    if (count <= 0) {
      return 0;
    }
    return count;
  }
  publicPrint() {
    this.#printData();
  }
  get studentCount() {
    return this.#studentCount;
  }
  #printData() {
    console.log("hey", this.#studentCount);
  }
  // you cannot access the private member
  // all the static method are accessible through the class only not with it object
  static increaseStudentCount(value) {
    console.log("hey");
  }
}

class Org extends Newton {
  // can i get private member of Newton inside this class (no.)
}

const obj = new Newton();
// console.log(obj.#studentCount); error
console.log(obj.instrutorCount); //
// obj.instrutorCount = 40;
obj.setStudentCount = 30;
console.log(obj.studentCount);
// console.log(obj.#printData()); error
// console.log(obj.printName());
// obj.increaseStudentCount(); error
Newton.increaseStudentCount(100);

// function Newton() {
//   // this  => {}
//   this.studentCount = 0;
// }
// const obj1 = new Newton();

// Mixins

// mixing a object with  class is called mising

// Nullish Coalesching
