function grandParent() {
  console.log("grandParent");
}

function child() {
  console.log("child");
}

function parent(event) {
  event.stopPropagation();
  console.log("parent");
}

document.body.addEventListener("click", () => {
  console.log("Hey I am body");
});

function grandChild() {
  console.log("I am grandChild");
}

function cardHandler() {
  // any logic
  console.log("Card Clicked");
  alert("Hey Leaving page");
  window.location.pathname = "Dom.html";
}

function buttonHandler(event) {
  // stoping  by default behaviou of javascript
  event.stopPropagation();
  console.log("buttonHandler");
}
