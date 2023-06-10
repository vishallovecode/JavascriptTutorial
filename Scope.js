// var a = 40;

// function call() {
//   a = 60;
//   let b = 500;
//   console.log(a);
// }

// call();
// console.log(b);

// scope => the area or boundary or environment where you can access the defined variable
// lexical environment => its own scope + its parent scope

// var  => redeclared, reassign  , it will be not in tdz , top declaration we can access
// let => reassign  , it will be  in tdz , top declaration we cant access
// cont => it will be  in tdz , top declaration we cant access

// var is functional scope
// let and const is block scope

if (true) {
  var lastName = "SHARMA";
  let firstName = "VISHAL";
  const city = "Kanpur";
  console.log(lastName); // SHARMA
  console.log(firstName); // VISHAL
  console.log(city); // Kanpur
}

console.log(lastName); // SHARMA
console.log(firstName); // error
console.log(city); // error
// // block scope
// if(true) {

// }
// // block scope
// for() {

// }

// // while switch
