console.log("hey");

let waitingTime = 10000;

const callbackFunc = () => {
  console.log("I am calling after", waitingTime, "ms");
};
setTimeout(callbackFunc, waitingTime);

console.log("code after setTimeOut");

// setTimeout takes two parameter as input , first paramater will  be the  callback func second will  be the
// threhhold
// setTimeout wait till given threshold and once that threshhold(delay) is reach after that it will call the function callback
