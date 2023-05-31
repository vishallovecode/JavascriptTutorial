// CallBack Function
// Higher Order Function
// Function expression and function declaration
// Rest operator
// first class function

// here the func variable is typeof function and it is called callback function
// addThreeNumber is called the Higher order functions
// Callback is passed as reference and called inside the HOF;

function addThreeNumber(func, c) {
  return func() + c;
}

function twoNumber() {
  return 20 + 30;
}

const arrow = () => {
  return 50 + 30;
};

//
const a = addThreeNumber(twoNumber, 40);
const b = addThreeNumber(arrow, 40);

// callback
const chimchom = () => {
  return 60 + 60;
};

const c = addThreeNumber(() => {
  return 60 + 60;
}, 40);

console.log(a, b, c);

// Callback hell

// function parent(func1, func2, func3, func4, func5) {
//   func1(func2, func3, func4, func5);
// }

// function func1(f1, f2, f3, f4) {
//   f1(f2, f3, f4);
// }

// function func2(ff1, ff2, ff3) {
//   ff1(ff2, ff3);
// }

// function func3(fff1, fff2) {
//   fff1(fff2);
// }

// function func4(f4) {
//   f4();
// }

// parent(func1, func2, func3, func4);
