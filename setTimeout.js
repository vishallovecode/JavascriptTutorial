// // console.log("hey");
// var a = 30;

// // let waitingTime = 10000;

// // const callbackFunc = () => {
// //   console.log("I am calling after", waitingTime, "ms");
// // };
// // setTimeout(callbackFunc, waitingTime);

// // console.log("code after setTimeOut");

// // setTimeout takes two parameter as input , first paramater will  be the  callback func second will  be the
// // threhhold
// // setTimeout wait till given threshold and once that threshhold(delay) is reach after that it will call the function callback

// console.log("hey before setTimeout");

// // setTimeout(() => {
// //   console.log("hey i am inside timeout");
// // }, 0);

// // console.log("hey after setTimeout");

// const object = {
//   name1: "Vishal",
//   fullName: function () {
//     console.log("hey", this.name1);
//     return "hello";
//   },
// };

// // setTimeout(object.fullName(), 1000);
// const timer1 = setTimeout(object.fullName, 1000);
// clearTimeout(timer1);
// // pseudo code
// // function MysetTimeout(callback, delay) {
// //   // //if (delay) {
// //   //  callback() // function call this => window
// //   // }
// // }
// // MysetTimeout(object.fullName, 1000);

// const callMe = (useRanme) => {
//   console.log("username", useRanme);
// };

// const getUserName = () => {
//   console.log("username,hey");
//   return "vishal";
// };

// callMe();

// // polyfill setTimeout

// // setInterval
// var count = 0;
// const timer = setInterval(() => {
//   count = count + 1;
//   console.log(count);
//   if (count > 10) {
//     clearInterval(timer);
//   }
// }, 1000);

// VAR FUNCTINAL SCOPE AND BLOCK SCOPE

for (var i = 0; i <= 5; i++) {
  callMe(i);
  function callMe(a) {
    setTimeout(() => {
      console.log("i value=>", a); // ?
    }, 0);
  }
}

for (var i = 0; i <= 5; i++) {
  setTimeout(() => {
    console.log("i value=>", a); // ?
  }, 0);
}
// funco a=0 , a=1 , a=2 , a=3, a=4, a=5

// for (let i = 0; i <= 5; i++) {
//   console.log(i);
//   setTimeout(() => {
//     console.log("i value=>", i); // ?
//   }, 1000);
// }

// I WANT TO PRINT 0,1,2,3,4,5
// USING VAR KEYWORD ?/

for (var i = 0; i <= 5; i++) {
  const a = i;
  setTimeout(() => {
    console.log("i value=>", a); // ?
  }, 1000);
}

//Promises
// call back
// callback  hell
// why Promise  ?
// when promise introduced ?
// What is event loop?
// What is api ?
// what is Fetch?
// How async programming works ?
// How js browser and enginer handle async programming?
// How to call api ??
// how to add items dynamically in dom ?
// Web apis
// setTimeout , setInterVal
// localstorage vs session Storage vs cookies
// Async and await
