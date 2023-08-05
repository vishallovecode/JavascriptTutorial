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

//
