// function Employee(name) {}

// const emp1 = new Employee('vishal);

// classes are nothing they are also type of fucntion

class Employee {
  // this => {}
  constructor(name) {
    this.name = name;
  }

  //   constructor(name , salary) {
  //     this.name  =name
  //     this.salary =salary;
  //   }
}

const emp1 = new Employee("Vishal");
const emp2 = new Employee("Vishal12", 200000);

console.log(emp1);
console.log("emp2=>", emp2);
console.log(typeof Employee); // function
