//

let animal = {
  eats: true,
};

let cow = {
  sound: "bow bow !!",
};

cow.__proto__ = animal; // here i am assigning [[prototype]] of cow is equal
// animal.__proto__ = cow; // cyclic proto value error
//  to the animal  now cow can access the propery of animal;

console.log(cow);
console.log(animal);
