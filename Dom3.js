function clickme(e) {
  var count = 0;
  alert("Hey Successfully clicked");

  for (let i = 1; i <= 10; i++) {
    document
      .getElementById("button1")
      .addEventListener("click", function chill() {
        console.log("hey count3");
      });
    // document.getElementById("button1").addEventListener("click", hello);
  }
}

function hello() {
  console.log("count");
}
// You can add multiple event listener
