// curried

function multiply(a) {
  //closures
  return (b) => {
    return (c) => {
      return a * b * c;
    };
  };
}

const data = multiply(2)(5)(6); //  2*5*6=> 60
console.log(data); // 60

// in higher order function we use currying // redux => connect()()

// In Javascript currying is the concept where function takes only one parameter and return another function which will take another parameter(next)

// Inifinite currying

// infinitCurryingSum(1)(2)(3)(4)(5)(6)(7)(8)(9)...(n)();
