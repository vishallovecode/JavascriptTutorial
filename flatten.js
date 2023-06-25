const result = {};
const flatObject = (obj) => {
  for (let key in obj) {
    if (typeof obj[key] === "object") {
      return flatObject(obj[key]);
    } else {
      result[key] = obj[key];
    }
  }
  return result;
};

const flat = flatObject({ a: { b: { c: 2 } } });
console.log(flat);
