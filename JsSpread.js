let A = {
  a: 123,
};

A.b = 2345;
A["B"] = 234567;

console.log(A);
// deep copy
const C = {
  ...A, //  { a: 123}; a:123 , b: 2345 , B: 234567
  operator: "*",
};
console.log(C);

// merge two object or multiple object

const studentAdress = {
  city: "Kanpur",
  locality: "Vishnupuri",
  pincode: 208002,
  landmark: "Emerland",
  flatNo: "4/278B-1",
};

const studentCollegeDetails = {
  college: "Newton School",
  mode: "Online",
  degree: "FSD",
  city: "Bangalore",
};

const studentDetails = {
  ...studentAdress,
  // Line no 83 code is exactly doing code from 85 to 89
  // city: "Kanpur",
  // locality: "Vishnupuri",
  // pincode: 208002,
  // landmark: "Emerland",
  // flatNo: "4/278B-1",
  ...studentCollegeDetails,
  // Line no 89 code is exactly doing code from 91 to 94
  // college: "Newton School",
  // mode: "Online",
  // degree: "FSD",
  // city: "Bangalore",
};

const result = {
  ...studentAdress,
  college: {
    ...studentCollegeDetails,
  },
};
//  {
//   city: "Kanpur",
//   locality: "Vishnupuri",
//   pincode: 208002,
//   landmark: "Emerland",
//   flatNo: "4/278B-1",
//  college: {
//   college: "Newton School",
//   mode: "Online",
//   degree: "FSD",
//   city: "Bangalore",
//  }
// };

console.log(studentDetails);

// spread operator is use for merging two object
// adding key and item to the object
// updating nested object

const array = [
  {
    city: "Kanpur",
    locality: "Vishn112upuri",
    pincode: 208121002,
    landmark: "Em11erland",
    flatNo: "4/27118B-1",
  },
  {
    city: "Kanpur12",
    locality: "Vishnupuri",
    pincode: 208002,
    landmark: "Emerland",
    flatNo: "4/278B-1",
  },
  {
    city: "sasdxa",
    locality: "Vish1csnupuri",
    pincode: 2080344502,
    landmark: "Emscdserland",
    flatNo: "4/278ddB-1",
  },
];

const arrayObject = array.map((obj) => {
  console.log(obj);
  return {
    ...obj,
    isDelivered: true,
  };
});
console.log(arrayObject);

// i want to add one more key which nested object

// let employee = {
//   user: {
//     address: {
//       country: {
//         state: {
//           city: {
//             postOffice: {
//               pinCode: 208001,
//             },
//           },
//         },
//       },
//     },
//   },
// };

// // ...

// // updating the poncode 208002

// console.log("Employyee", employee);

// // I did not explain
// employee = {
//   ...employee,
//   user: {
//     ...employee.user,
//     address: {
//       ...employee.user.address,
//       country: {
//         ...employee.user.address.country,
//         state: {
//           ...employee.user.address.country.state,
//           city: {
//             ...employee.user.address.country.state.city,
//             postOffice: {
//               ...employee.user.address.country.state.city.postOffice,
//               pinCode: 560102,
//             },
//           },
//         },
//       },
//     },
//   },
// };

let employee1 = {
  name: "Vishal",
  college: "LPU",
  city: {
    name: "Kanpur",
    state: "UP",
    locality: "Vishnupuri", // need to change
    pincode: "208002",
    info: {
      id: "1234",
      dm: "Rajesh mittal",
    },
  },
};
employee1 = {
  ...employee1,
  college: "Newton",
  city: {
    ...employee1.city,
    locality: "Nawabganj",
    info: {
      ...employee1.city.info,
      dm: "Rimo",
    },
  },
};

console.log(employee1);
// employee1 = {
//   name: "Vishal",
//   college: "Newnton",
// };

// employee1.name ='timo'

// {
//   keys spread
// }
