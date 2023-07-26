// Constructor Function name always start with the capital letter
// We  can create constructor function only in normal function
// We can not use arrow function for creating constructor function

function Employee(name, city, salary) {
  // this  => {}
  this.name = name;
  this.city = city;
  this.salary = salary;
}

// const employee2 = Employee(); normal function called
const employee = new Employee("Vishal", "Bangalore", 100); //this// here invoking the function using new keyword
const employe2 = new Employee("Tim", "Bangalore", 450000);

console.log("employee", employee, employe2);

// const Data = () => {
//   const obj = {};
//   let name = "Vishal";
//   return obj;
// };

// const value = Data();

const CreateObject = (name, city, salary) => {
  return {
    name,
    city,
    salary,
  };
};

const object = CreateObject("Tim", "Bangalore", 450000);
console.log(object);
