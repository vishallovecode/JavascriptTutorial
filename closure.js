function a() {
  let firstName = "Vishal";
  return function b() {
    console.log(firstName);
  };
}

// const functionValue = a(); // here functionValue have a function reference
// functionValue();

a()();

console.log(functionValue);

// closure is nothing , it is a function with it lexical scope or environment
