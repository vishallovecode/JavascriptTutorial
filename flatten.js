const result = {};
const flatObject = (obj) => {
  //   const result = {}; // this you can do through the closure
  for (let key in obj) {
    if (typeof obj[key] === "object") {
      return flatObject(obj[key]); // flatObject({ d: 2 })
    } else {
      result[key] = obj[key];
    }
  }
  return result;
};

const flat = flatObject({ a: 2, c: { d: 2 } });
console.log(flat);
