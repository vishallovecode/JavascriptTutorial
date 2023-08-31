async function getUserData(searchValue) {
  const res = await fetch(
    `https://dummyjson.com/users/search?q=${searchValue}`
  );
  const result = res.json();
}

function handleInputChange(event) {
  getUserData(event.target.value);
}

// debounce function take two parameter first which we need to debounced  and another delay
// it returns a new function
function debounce(func, delay) {
  let timer;
  return function (...args) {
    if (!timer) {
      console.log(this);
      func.ll(this, ...args);

      //   func.apply(this, args);
      //   func(...args)
    }
    clearTimeout(timer);
    timer = setTimeout(() => {
      timer = undefined;
    }, delay);
  };
}

const debounceSearch = debounce(handleInputChange, 1000);
debounceSearch("search");

function debounce(fn, delay) {
  let timeId;

  return function (...args) {
    clearTimeout(timeId);
    timeId = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
}

function throttle(func, delay) {
  let shouldExecute = true;
  return function (...args) {
    if (shouldExecute) {
      func.apply(this, args);
    }
    shouldExecute = false;
    setTimeout(() => {
      shouldExecute = true;
    }, delay);
  };
}

function llMe() {
  console.log("hey");
}

const llThrottle = throttle(llMe, 1000);
llThrottle();
llThrottle();
llThrottle();

llThrottle();
llThrottle();
llThrottle();
llThrottle();

llThrottle();
llThrottle();
llThrottle();
llThrottle();

llThrottle();
llThrottle();
llThrottle();
llThrottle();
llThrottle();
llThrottle();
llThrottle();
llThrottle();
llThrottle();
llThrottle();
llThrottle();
llThrottle();
llThrottle();
llThrottle();
llThrottle();
llThrottle();
llThrottle();
llThrottle();
llThrottle();
llThrottle();
llThrottle();
llThrottle();
llThrottle();
llThrottle();
llThrottle();
llThrottle();
llThrottle();
llThrottle();
llThrottle();
llThrottle();
llThrottle();
llThrottle();
llThrottle();
llThrottle();
llThrottle();
llThrottle();
llThrottle();
llThrottle();
llThrottle();
llThrottle();
llThrottle();
llThrottle();

llThrottle();
llThrottle();
llThrottle();
llThrottle();
llThrottle();
llThrottle();
llThrottle();
llThrottle();
llThrottle();
llThrottle();
llThrottle();
llThrottle();
llThrottle();
llThrottle();
llThrottle();
llThrottle();
llThrottle();
llThrottle();
llThrottle();
llThrottle();
llThrottle();
llThrottle();
llThrottle();
llThrottle();
llThrottle();
llThrottle();
llThrottle();
llThrottle();

llThrottle();
llThrottle();
llThrottle();
llThrottle();

llThrottle();
llThrottle();
llThrottle();
llThrottle();
llThrottle();
llThrottle();
llThrottle();
llThrottle();
llThrottle();
llThrottle();
llThrottle();
llThrottle();
llThrottle();
llThrottle();
llThrottle();
llThrottle();
llThrottle();
llThrottle();
llThrottle();
llThrottle();
llThrottle();
llThrottle();
llThrottle();
llThrottle();
llThrottle();
llThrottle();
llThrottle();
llThrottle();
llThrottle();
llThrottle();
llThrottle();
llThrottle();
llThrottle();
llThrottle();
llThrottle();
llThrottle();
llThrottle();
llThrottle();
llThrottle();
llThrottle();
llThrottle();
llThrottle();
llThrottle();
llThrottle();
llThrottle();
llThrottle();
llThrottle();

llThrottle();
llThrottle();
llThrottle();
llThrottle();
llThrottle();
llThrottle();
llThrottle();
llThrottle();
llThrottle();
llThrottle();
llThrottle();
llThrottle();
llThrottle();
llThrottle();
llThrottle();
llThrottle();
llThrottle();
llThrottle();
llThrottle();
llThrottle();
llThrottle();
llThrottle();
llThrottle();
llThrottle();
llThrottle();
llThrottle();
llThrottle();

setTimeout(() => {
  llThrottle();
}, 2000);
