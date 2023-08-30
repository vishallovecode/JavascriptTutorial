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
      func.call(this, ...args);
      //   func.apply(this, args);
      //   func(...args)
    }
    timer = setTimeout(() => {}, delay);
  };
}

const debounceSearch = debounce(handleInputChange, 1000);
debounceSearch("hello");
