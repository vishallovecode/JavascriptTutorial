// Constructor Function name always start with the capital letter
// We  can create constructor function only in normal function
// We can not use arrow function for creating constructor function

function Employee(name, city, salary) {
  this.name = name;
  this.city = city;
  this.salary = salary;
}

// const employee2 = Employee(); normal function called
const employee = new Employee("Vishal", "Bangalore", 100); // here invoking the function using new keyword
const employe2 = new Employee("Tim", "Bangalore", 450000);

console.log("employee", employee, employe2);

// const Data = () => {
//   const obj = {};
//   let name = "Vishal";
//   return obj;
// };

// const value = Data();
