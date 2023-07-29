const employee = {
  firstName: "Vishal",
  lastName: "Sharma",
};

let dsecriptor = Object.getOwnPropertyDescriptors(employee);

console.log(dsecriptor, "dsecriptor");

// configurable  // true if this is true than value of key can be change else it will be read only
// value// the value of key
// enumerable // true  // while traversing the object you want to give value or not
// writable // true // modification  deletion

// how to update these value

// we have function called definedPropety

Object.defineProperty(employee, "firstName", { writable: false });

let dsecriptor1 = Object.getOwnPropertyDescriptors(employee);

employee.firstName = "Rimo";
console.log(dsecriptor1);
