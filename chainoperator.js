// Optinal Chaining
const object = {
  name: "Vishal",
  city: {
    address: {
      pincode: "208002",
    },
  },
};
object.rajKumar; //  udefined
const pincode = object?.city?.address?.pincode;

// if (object) {
//   if (object.city) {
//     if (object.city.adress) {
//       const pincode = object.name.city.address.pincode;
//     }
//   }
// }

const employee = [
  { name: "Chim Chom", salary: 200000 },
  { name: "Tim Tom", salary: 4500000 },
];

const callback = (value, index, array) => {
  return value.salary > 45500000;
};

// if callback function return true for given array element  tahn filter will add that element in newe array an return that new array
const filterEmployee = employee.filter(callback);

console.log(filterEmployee); //  [tim tom]  { name: "Tim Tom", salary: 4500000 },  // 450000
// [{ name: "Tim Tom", salary: 4500000 }]

//Why only array can access filter function not another data type??

// null undefined
const a = { name: null };
console.log(a?.name); // undefined

const array = null;

const data = array?.filter((a) => a);
console.log(data); //

const array1 = 2345;
console.log("array1.filter", array1.filter); //
// const data1 = Array.isArray(array1) && array1?.filter((a) => a);
const data1 = typeof array1?.filter === "function" && array1?.filter((a) => a);
console.log(data1); //

// isArray
// // isprototypeof
// const data12 = "";
// console.log(data12.filter); // undefined.

const data123 = undefined;
// console.log(data123()); // error data123 is not defined

// Nullish Coalescing Operator  ??

// '||' (XOR) operator return first truthy value
const name = "Vishal" || "Ram";
const name1 = "" || null || 0 || 1 || 2 || 4;
const data11 = null || undefined || false || "Hello";
console.log("data11", data11);

//  returns the first value whioch is defined  not defined (null , undefined)

const nullish = "" ?? 0 ?? false ?? "Hello";
console.log(nullish);

const data112 = null ?? undefined ?? false ?? "hellow d";
const aa = undefined ?? null ?? undefined;
console.log(aa);
