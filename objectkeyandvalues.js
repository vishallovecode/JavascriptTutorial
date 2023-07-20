// var employee = {
//   name: "Vishal",
//   city: "Kanpur",
//   salary: 50000,
//   professional: "Engineer",
// };

// // getting the all keys of above employee object

// //Object.keys(param) => this function will return all the keys in array format
// // this method only supported by the object variable

// var employeeKeys = Object.keys(employee);
// console.log("employeeKeys", employeeKeys);

// // same way if you want to get the all the values of object

// // Object.values(param)  this method only supported by the object variable

// var employeeValues = Object.values(employee);

// console.log("employeeValues", employeeValues); // ['Vishal' , 'Kanpur'  , 50000 , 'Engineer']

var employee = {
  name: "Vishal",
  city: "Kanpur",
  salary: 50000,
  professional: "Engineer",
};

// for (var key in employee) {
//   console.log("{" + key + "}" + ":" + "{" + obj[key] + "}");
// }

// index //
// object =>keys
// for of => array not for the object
// for of loop will give you the value
// var location = "city";

console.log(employee.location); //  undefined

console.log(employee[location]); //  Kanpur

// string templating

function greetingMessage(userName, userRank) {
  // return 'Hey' + name + 'you are in top 5 and your rank is ' + rank;
  console.log(`Hey ${userName} you are in top 5 and your rank is ${userRank}`);
  //
}

function greetingMessage1(obj) {
  var titt = "rank";
  // return 'Hey' + name + 'you are in top 5 and your rank is ' + rank;
  console.log(`Hey ${obj.name} you are in top 5 and your rank is ${obj[titt]}`);
  //
}
// Hey {name} you are in top 5 and your rank is {rank}
var students = [
  { name: "Tim", rank: "5" }, // Hey Tim you are in top 5 and your rank is 5
  { name: "chom", rank: "2" }, // Hey chom you are in top 5 and your rank is 2
  { name: "Rim", rank: "1" }, //Hey Rim you are in top 5 and your rank is 1
  { name: "Rom", rank: "4" }, // Hey Rom you are in top 5 and your rank is 4
  { name: "Tin", rank: "3" }, //Hey Tin you are in top 5 and your rank is 3
];
for (var i = 0; i < students.length; i++) {
  //i=0 // students[0] => { name: "Tim", rank: "5" }
  //i=1 // students[1] => { name: "chom", rank: "2" }
  //i=2 // students[2] => { name: "Rim", rank: "1" }
  //i=3 // students[3] => { name: "Rom", rank: "4" }
  //i=4 //students[4] => { name: "Tin", rank: "3" }
  greetingMessage(students[i].name, students[i].rank);
  greetingMessage1(students[i]);
}

var check = {
  message: "Hey sab ho jayega...",
  condition: "Please do revision",
};

for (var property in check) {
  console.log(`${property}: ${check[property]}`);
}

// message   check['message']
// condition check['condition']

// What is object ??
// different way to create the object

// 1.Object Literal

const studentsData = {};
studentsData.name = "Jimo";
// studentsData variable is object

const studentData1 = {
  name: "TIRO",
  mobile: "Viro",
};

// 2.using new keybord

const employeedList = new Object({ name: "Hello" });
employeedList.company = "Zee";
console.log(employeedList, "employeedList");

// 3 Object.create

const hospitalList = Object.create(null);
const hotelList = Object.create(null);
hospitalList.name = "Manipal";
console.log("hospitalList", hospitalList);

// 4 pillars of oops

// encapsulation
// polymorphism
// abtraction
// inheritance

// spreading the object

const student = {
  firtName: "Chimo",
  lastName: "Revi",
  mobile: "991537777",
  city: "mexico",
  country: "India",
};

console.log(student); //undefined

// how you can access the object value
// const fName = students.firtName;
// const lName = students.lastName;
// const phone = students.mobile;
// const city = students.city;
// object spread //  object destructring
const { firtName: studentName, lastName, mobile, city, country } = student;

// const studentName = student.firtName;

// console.log(firtName); this will give you the errror
console.log(studentName, lastName, mobile, city, country);

//

// string tempalte literal

const message = `Hey ${studentName}`;
console.log(message);
