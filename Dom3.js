document.getElementById("button1").addEventListener("click", clickme);

function clickme(e) {
  console.log("click me called");
  document.getElementById("button2").addEventListener("click", hello);
}

function hello() {
  console.log("Button 2 clicked");
  document.getElementById("button1").removeEventListener("click", clickme);
}
// You can add multiple event listener

document.getElementById("button3").addEventListener("click", removeALL);

function removeALL() {
  console.log("button3");
  document.getElementById("button2").removeEventListener("click", hello);
  document.getElementById("button3").removeEventListener("click", removeALL);
}

function setTheme(e) {
  document.querySelector("body").style.background = e.target.value;
}
