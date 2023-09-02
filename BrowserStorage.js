// setting a value in local storage
if (typeof window != "undefined") {
  localStorage.setItem("key1", "Hurrah we did it");
  // here in setItem first params is key and second is value , value can be any type
}

// getting  a value from local storage
if (typeof window != "undefined") {
  console.log(localStorage.getItem("key1"));
  // here in setItem first params is key and second is value , value can be any type
}

// removing  a value from local storage
// if (typeof window != "undefined") {
//   localStorage.removeItem("key1");
//   // here in setItem first params is key and second is value , value can be any type
// }

// if (typeof window != "undefined") {
//   console.log(localStorage.getItem("key1"));
//   // here in setItem first params is key and second is value , value can be any type
// }

const employeeDetails = {
  user: {
    name: "Vishal",
    address: {
      india: {
        state: {
          city: {
            district: {
              name: "Kanpur",
            },
          },
        },
      },
    },
  },
};

// localStorage.setItem("userDetails", employeeDetails);
// const fetchData = localStorage.getItem("userDetails");
// console.log(fetchData.user);

localStorage.setItem("userDetails", JSON.stringify(employeeDetails));

console.log(typeof localStorage.getItem("userDetails"));

const fetchData = JSON.parse(localStorage.getItem("userDetails"));

console.log(fetchData.user);

const value1 = { name: "Vishal" };
console.log(value1.name); // Vishal
const value = JSON.stringify({ name: "Vishal" });
console.log(value.name); // Vishal
console.log(typeof value);

const jsonValue = JSON.parse(value);
// JSON.parse() arguments should be object and that should be string
console.log(jsonValue.name);
