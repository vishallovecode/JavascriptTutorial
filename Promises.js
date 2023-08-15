console.log("Learning Promises......");

// here resolve and reject will be callback function first parameter function of Promise is called once promise resolved second will be called when promise rejected
const promise = new Promise((res, rej) => {
  if (2 != 2) {
    res("Success");
  } else {
    rej("Failure");
  }
});
console.log(promise);
console.log("hry");

// const promise1 = new Promise();
// console.log(promise1);

// Promise fullfilled => Success
// Promise Rejected => Failure

// const callBack = (res, rej) => {
//   setTimeout(() => {
//     rej("Hey I am rejected");
//   }, 10000);
// };
// const promise1 = new Promise(callBack);

const promise1 = new Promise((res, rej) => {
  setTimeout(() => {
    rej("Hey I am rejected");
  }, 4000);
});

console.log(promise1);

promise1
  .then(() => {
    console.log("hey");
  })
  .catch(() => {
    console.log("rejected");
  });
