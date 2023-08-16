console.log("Learning Promises......");

// Promises have three state  => Pending , fullfilled and rejected

// here resolve and reject will be callback function first parameter function of Promise is called once promise resolved second will be called when promise rejected
const promise = new Promise((resolved, rejected) => {
  if (2 != 2) {
    resolved("Success");
  } else {
    rejected("Failure");
  }
});

console.log("promise", promise);

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

const promise1 = new Promise((resolved, rejected) => {
  console.log("Hey called immediate"); // this is not async
  setTimeout(() => {
    console.log("Hey123 inside timeout");
    rejected("Hey I am rejected");
  }, 4000);
});

console.log(promise1); // pending

setTimeout(() => {
  console.log("5 second", promise1); // Rejected state
}, 5000);

// Immediate resolved promise
const impromise = new Promise((resolved, rejected) => {
  resolved("Hey"); // this will be consider
  rejected("Hey"); // this will be ignore
  resolved("1234"); //  this will be ignore
});
// Immediate rejected promise
const impromiserej = new Promise((resolved, rejected) => {
  rejected("Hey"); // this will be consider
  resolved("hey"); // this will be ignore
});

//
// promise1
//   .then(() => {
//     console.log("hey");
//   })
//   .catch(() => {
//     console.log("rejected");
//   });
