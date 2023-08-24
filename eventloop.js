console.log("1"); // first

function callback() {
  console.log("2"); // fifth
  setTimeout(function callbackkababu() {
    console.log("Hey i am babu.. sona");
  }, 100);
}

setTimeout(callback, 1000);

console.log("2"); // second

setTimeout(function name() {
  console.log("3"); // fourt
  setTimeout(function nameChild() {
    console.log("Inside named function");
  }, 0);
}, 0);

console.log("4"); // third

setTimeout(function chirkoot() {
  console.log("5"); // six

  setTimeout(function chirkootkabaccha() {
    console.log("Hey i am chrikoot child");
  }, 0);
}, 2000);

// saturday we will talk about promises , event oberver , priority task queque , microtask queuqe
