const employee = {
  firstName: "Vishal",
  lastName: "Sharma",
};

let dsecriptor = Object.getOwnPropertyDescriptors(employee);

console.log(dsecriptor, "dsecriptor");

// configurable  // true if this is true than value of key can be change else it will be read only
// value// the value of key
// enumerable // true  // while traversing the object if this is false you will not get that propertyName
// writable // true // modification  deletion

// how to update these value

// we have function called definedPropety

for (let name in employee) {
  console.log(name, "here for");
}

// writable is false than you cannot change the value
// if enumrable is fale you cannot iterate that  key
Object.defineProperty(employee, "firstName", {
  writable: false,
  enumerable: false,
  //   configurable: false,
});

// this will throw error you cannot update the propertyName again
// once configurable is make false you cannot reset the value of configurable key and writable key
// configurable : false means cannot modify cannot delete  cannot definedProperty again
Object.defineProperty(employee, "firstName", {
  configurable: true,
  writable: true,
});
for (let name in employee) {
  console.log(name, "here after making enumerable:false to firstName");
}
let dsecriptor1 = Object.getOwnPropertyDescriptors(employee);
console.log(dsecriptor1);
employee.firstName = "Rimo";
let dsecriptor2 = Object.getOwnPropertyDescriptors(employee);
console.log(dsecriptor2);
console.log(employee);

// whether the object property is enumerable or not

console.log(employee.propertyIsEnumerable("firstName"));
console.log(employee.propertyIsEnumerable("lastName"));
