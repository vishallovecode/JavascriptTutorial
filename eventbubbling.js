// function grandParent() {
//   console.log("grandParent");
// }

// function child() {
//   console.log("child");
// }

// function parent(event) {
//   event.stopPropagation();
//   console.log("parent");
// }

// document.body.addEventListener("click", () => {
//   console.log("Hey I am body");
// });

// function grandChild() {
//   console.log("I am grandChild");
// }

// function cardHandler() {
//   // any logic
//   console.log("Card Clicked");
//   alert("Hey Leaving page");
//   window.location.pathname = "Dom.html";
// }

// function buttonHandler(event) {
//   // stoping  by default behaviou of javascript
//   event.stopPropagation();
//   console.log("buttonHandler");
// }

// function checkBoxHandler(event) {
//   event.preventDefault();
//   alert("Checkobox clicked");
// }

// //event capturing

// // In this case event will triggered and execute from parent to child.
// // By default behaviour of browser is bubble the event(event bubbling , bottom to down) , by pasing third parameter true on addEventListener you can achive event captuing
// const callBack = () => {
//   alert("hey I am capture parent");
// };

// document.getElementById("capture").addEventListener("click", callBack, true);

// document.getElementById("childCap").addEventListener(
//   "click",
//   () => {
//     alert("hey I am capture child");
//   },
//   true
// );

// Event delegation

function handleCard(e) {
  // card logic
  //

  console.log("ge", e.target.id);
  console.log("pe", e.currentTarget.id);
}

// event.target => it will give you the html element ref value where you have done actions or(click)
// event.currentTarget => it will give you the html element ref value where you have added event listener)
// In all scernarion in event object you will get the both object

// when will be the event.target and event.currentTarget will be equal
// when will be the event.target and event.currentTarget will be not equal
