//

let animal = {
  eats: true,
};

let cow = {
  sound: "bow bow !!",
};

cow.__proto__ = animal; // here __proto__ is behaving like a setter for cow object protoype
// here i am assigning [[prototype]] of cow is equal
// animal.__proto__ = cow; // cyclic proto value error
//  to the animal  now cow can access the propery of animal;

// console.log(cow.__proto__) here __proto_ is behaving like a getter
console.log(cow);
console.log(animal);

// __proto__ behave like setter and getter for prototype and prototype is hidden property
// of the objectb which  refer to the another object  or null
// Prototype Object => this is object which is point by any another object prototype
// The super prootype is Object so all object and function have it super prototype Object
// Object  have prototype which point to the null
// A object can access the property of it parent object using prototype concept this is called
// protoypical inheritance
