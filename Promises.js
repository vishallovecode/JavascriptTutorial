console.log("Learning Promises......");

const promise = new Promise((resolve, reject) => {
  if (2 != 2) {
    resolve("Success");
  } else {
    reject("Failure");
  }
});
console.log(promise);

// const promise1 = new Promise();

// Promise fullfilled => Success
// Promise Rejected => Failure
