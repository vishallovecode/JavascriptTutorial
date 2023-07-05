// create one button on clicking that you need to change the color of another div
// color inputwill ['red' ,'blue' , 'green' , 'yellow]

const array = ["red", "blue", "yellow", "green", "black", "pink"]; // 0 4

function random(e) {
  console.log(e.target);
  const randomIndex = Math.floor(Math.random() * array.length);
  const container = document.getElementById("container");
  container.style.backgroundColor = array[randomIndex];
}

// const button = document.createElement("button");

// button.textContent = "change color";
// button.style.marginTop = "10px";
// document.body.appendChild(button);

// button.addEventListener("click", random);
var color = "";

function changeHandler(e) {
  color = e.target.value;
}

function changeColor() {
  const container = document.getElementById("container");
  // container.style.backgroundColor = color;
  container.style.backgroundColor = document.getElementById("color").value;
}

// i have input t\ere i will type
