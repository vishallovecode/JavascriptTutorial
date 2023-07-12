// //JS value vs Reference

// // Example 1
let array = [1, 2, 3, 4, 56];
function modifyArray(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i] * 2;
  }
  result = arr; // because you are trying to assign a new value to constant variable
  return result;
}

const result = modifyArray(array);
// const result2 = [];
// result = result2; // this will give you error

result[1] = "Not A number";

console.log(result); //
console.log(array); //

// let array1 = [1, 2, 3, 4, 56];
// function modifyArray1(arr) {
//   // prettier-ignore
//   let result = [];
//   const array = arr.filter((item) => {
//     return item % 2 == 0;
//   });
//   result = array;
//   return [...result];
// }

// const result1 = modifyArray1(array1);

// result1[1] = "Not A number";

// console.log(result1); //
// console.log(array1); //

// //JS value vs Reference

// // Example 1
let object = {
  name: "Vishal",
  lastName: "Sharma",
};
function modifyObject(object) {
  let result = {};
  for (let key in object) {
    object[key] = object[key] + "Joshi";
  }
  result = object; // shallow copy // because you are trying to assign a new value to constant variable
  return result;
}
const resultObject = modifyObject(object);
// const resultObject = {};
// resultObject = resultObject; // this will give you error
resultObject["name"] = "Not A number";

console.log(resultObject); //
console.log(object); //
