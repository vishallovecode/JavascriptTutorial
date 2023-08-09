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
