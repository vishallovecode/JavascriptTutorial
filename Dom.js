console.log("DOM Tutorial");

const rootElement = document.getElementById("root"); // null

const root = document.getElementsByClassName("firstDiv");

rootElement.innerText = "Hey Dom Tutorial";
rootElement.style.fontSize = "34px";
rootElement.style.color = "red";
rootElement.style.margin = "auto";
rootElement.style.width = "100%";
rootElement.style.textAlign = "center";

// We have created new div using createElement
const root2 = document.createElement("div"); //Node
root2.innerText = "Hey this is dynamically added div";
root2.style.fontSize = "34px";
root2.style.color = "red";
root2.style.margin = "auto";
root2.style.width = "100%";
root2.style.textAlign = "center";

console.log(root2, "root2");

document.body.appendChild(root2);
