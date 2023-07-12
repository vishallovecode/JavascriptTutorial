function grandParent() {
  console.log("grandParent");
}

function child() {
  console.log("child");
}

function parent() {
  console.log("parent");
}

document.body.addEventListener("click", () => {
  console.log("Hey I am body");
});

function grandChild() {
  console.log("I am grandChild");
}
