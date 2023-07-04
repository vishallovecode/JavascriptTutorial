// // console.log("DOM Tutorial");

// // const rootElement = document.getElementById("root"); // null

// // const root = document.getElementsByClassName("firstDiv");

// // rootElement.innerText = "Hey Dom Tutorial";
// // rootElement.style.fontSize = "34px";
// // rootElement.style.color = "red";
// // rootElement.style.margin = "auto";
// // rootElement.style.width = "100%";
// // rootElement.style.textAlign = "center";

// // // We have created new div using createElement
// // const root2 = document.createElement("div"); //Node
// // root2.innerText = "Hey this is dynamically added div";
// // root2.style.fontSize = "34px";
// // root2.style.color = "red";
// // root2.style.margin = "auto";
// // root2.style.width = "100%";
// // root2.style.textAlign = "center";

// // console.log(root2, "root2");

// // document.body.appendChild(root2);
// // root2.style.color = "blue";

// //  appendChild into the body

// const box1 = document.createElement("div");
// box1.className = "box1";
// box1.id = "box_1";

// document.body.appendChild(box1);

// const box2 = document.createElement("div");

// box2.style.background = "blue";
// box2.style.width = "300px";
// box2.style.height = "300px";
// box2.style.border = "2px solid black";
// box2.style.display = "flex";
// box2.style.justifyContent = "center";
// box2.style.alignItems = "center";
// box2.id = "box_2";

// box1.appendChild(box2);

// const box3 = document.createElement("div");

// box3.style.background = "yellow";
// box3.style.width = "200px";
// box3.style.height = "200px";
// box3.style.border = "2px solid white";
// box3.id = "box_3";
// box3.style.display = "flex";
// box3.style.justifyContent = "center";
// box3.style.alignItems = "center";
// box3.id = "box_2";

// box2.appendChild(box3);

// // span text
// const spanText = document.createElement("span");
// spanText.innerHTML = `<b style = "color:blue ">COOL!!!</b>`;
// box3.appendChild(spanText);

// //

// // getElementById,getElementsByClassName,getElementsByTagName , querySelector and querySelectorAll this all are the properties(method) attached to the document object

// // element selectors getElementById()
// // this will take one argument and argument will be string and that will be the id of html element
// // if id found in dom it will return the that particular node correspond to the id
// // this will always return the single node

// //getElementsByTagName will return the collection of element with specific tage

// const elementByTag = document.getElementsByTagName("div");

// console.log(Array.isArray(elementByTag));
// console.log(elementByTag);
// for (let value of elementByTag) {
//   console.log(value);
// }

// //getElementsByClassName will return the collection of element with specific class
// const elementByclass = document.getElementsByClassName("box1");
// console.log(elementByclass, "elementByclass");

// const documentsv = document;
// console.log(documentsv);

// // querySelector('div') => it will return the first element that matches the div slector

// const getByQuery1 = document.querySelector("div");
// console.log(getByQuery1, "getByQuery1");

// // it will serch in whole dom and return the first match value

// const getByAllQuery1 = document.querySelectorAll("div");
// // argumewnts
// console.log(getByAllQuery1, "getByQuery1");

// const getByAllQuery2 = document.querySelectorAll(".abc"); // id #idvalue

// console.log(getByAllQuery2, "getByAllQuery2");

// const getByAllQuery3 = document.querySelectorAll("#box_2"); // id #idvalue

// console.log(getByAllQuery3, "getByAllQuery3");

// // selecting element through attributes // i will take it later

// // documents events
// // anything happen inside or in html element

// const button = document.createElement("button");

// button.textContent = "Click Me";

// box3.appendChild(button);

//addEventListener

// button.addEventListener("click" , (e)=>{
//     console.log(e)
// } );

const eventCallback = (event) => {
  console.log(event.target);
};
// button.addEventListener("click", (e) => {
//   console.log(e.target); //
// });

// button.addEventListener("click", eventCallback);

function button2(arg1) {
  const buttoNode = arg1.target;
  console.log(arg1.target);
  if (buttoNode.textContent === "Send") {
    buttoNode.textContent = "Undo";
  } else {
    buttoNode.textContent = "Send";
  }
}

// create one button on clicking that you need to change the color of another div
// color inputwill ['red' ,'blue' , 'green' , 'yellow]
