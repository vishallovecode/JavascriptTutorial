const object = {
  name: "Vishal",
  city: {
    address: {
      pincode: "208002",
    },
  },
};

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
console.log(a?.name?.name); // undefined

const array = null;

const data = array?.filter((a) => a);
console.log(data); //

const array1 = 2345;
const data1 = array1?.filter((a) => a);
console.log(data1); //

// isArray
// isprototypeof
