// // // console.log("Learning Promises......");

// // // // Promises have three state  => Pending , fullfilled and rejected

// // // // here resolve and reject will be callback function first parameter function of Promise is called once promise resolved second will be called when promise rejected
// // // const promise = new Promise((resolved, rejected) => {
// // //   if (2 != 2) {
// // //     resolved("Success");
// // //   } else {
// // //     rejected("Failure");
// // //   }
// // // });
// //PROMISE IS RESOLVED => EITHER IT CAN GIVE SUCCES RESULT REJECTED

// // // console.log("promise", promise);

// // // // const promise1 = new Promise();
// // // // console.log(promise1);

// // // // Promise fullfilled => Success
// // // // Promise Rejected => Failure

// // // // const callBack = (res, rej) => {
// // // //   setTimeout(() => {
// // // //     rej("Hey I am rejected");
// // // //   }, 10000);
// // // // };
// // // // const promise1 = new Promise(callBack);

// // // const promise1 = new Promise((resolved, rejected) => {
// // //   console.log("Hey called immediate"); // this is not async
// // //   setTimeout(() => {
// // //     console.log("Hey123 inside timeout");
// // //     rejected("Hey I am rejected");
// // //   }, 4000);
// // // });

// // // console.log(promise1); // pending

// // // setTimeout(() => {
// // //   console.log("5 second", promise1); // Rejected state
// // // }, 5000);

// // // // Immediate resolved promise
// // // const impromise = new Promise((resolved, rejected) => {
// // //   resolved("Hey"); // this will be consider
// // //   rejected("Hey"); // this will be ignore
// // //   resolved("1234"); //  this will be ignore
// // // });
// // // // Immediate rejected promise
// // // const impromiserej = new Promise((resolved, rejected) => {
// // //   rejected("Hey"); // this will be consider
// // //   resolved("hey"); // this will be ignore
// // // });

// // const promiseObject = new Promise((resolved, reject) => {
// //   setTimeout(() => {
// //     resolved("Success");
// //   }, 5000);
// // });

// // promiseObject
// //   .then((value) => {
// //     console.log(value);
// //   })
// //   .catch((error) => {
// //     console.log("error", error);
// //   })
// //   .finally(() => {
// //     console.log("HEY I WILL CALL ALWAYS");
// //   });

// // const promiseObject1 = new Promise((resolved, reject) => {
// //   setTimeout(() => {
// //     reject("OOPS ERROR!!");
// //   }, 5000);
// // });

// // console.log("promiseObject1", promiseObject1);

// // promiseObject1
// //   .then((value) => {
// //     console.log(value);
// //   })
// //   .catch((error) => {
// //     console.log("error", error);
// //   })
// //   .finally(() => {
// //     console.log("this will call always");
// //   });

// // // const data = fetch("https://dummyjson.com/products");
// // // console.log("apid data", data);

// // // data.then((res) => {
// // //   console.log(res);
// // // });

// // function callbackFunc1(value) {
// //   // any code
// //   console.log("run if promise success", value);
// // }
// // function callbackfun2(error) {
// //   // any code
// //   console.log("run if promise rejected", error);
// // }

// // function callbackfun3() {
// //   console.log("run evcerytim");
// // }
// // promiseObject1.then(callbackFunc1).catch(callbackfun2).finally(callbackfun3);
// // // pass the function callBackfunc1 when promise resolved

// const promise1234 = new Promise((resolved, rejected) => {
//   setTimeout(() => {
//     resolved("SuccessFully Resolved");
//   }, 2000);
// });

// const promise1235 = new Promise((resolved, rejected) => {
//   setTimeout(() => {
//     rejected("SuccessFully Rejected");
//   }, 2000);
// });

// // promise1234.then(
// //   (value) => {
// //     console.log(value);
// //   },
// //   (error) => {
// //     console.log(error);
// //   }
// // );

// // this for your understanding
// promise1235.then(
//   (value) => {
//     console.log(value);
//   },
//   (error) => {
//     console.log(error);
//   }
// );

const displayProduct = (productList) => {
  console.log("productList", productList);
  const container = document.getElementById("container");
  productList?.map((product) => {
    console.log("product", product);
    const div = document.createElement("div");
    div.innerHTML = `<div style="display:flex ; flex-direction:column ; border:2px solid blue ; border-radius:12px ;width:250px; padding:10px; min-height:300px;max-height:20px">
    <img  class = 'img' src= ${product?.images[0]}>
    <div class= 'title'>${product.title}</div>
    <div class= 'description'>${product.description}</div>
    <div class= 'price'>${product.price}</div>
  </div>`;
    container.appendChild(div);
  });
};

const getAllProducts = () => {
  // fetch is browser api which return promises everytime
  // ES6
  // BEFORE XMHTTPREQUEST AJAX CALL
  // by default Request method of fetch is GET
  const response = fetch("https://dummyjson.com/products"); // ENDPOINT
  // response will be here promise i need promise chaining chaining for resolving
  console.log("return value of fetch", response);
  response
    .then((res) => {
      // whenever api gives 200 when the api gives success
      // here res value is not in json format to convert it into json format we need res.json() function , this json() return promises we need to resolved it agai using
      //  promise chaining
      console.log("before json()", res);
      return res.json().then((response) => {
        console.log("after response", response);
        displayProduct(response?.products); // here response.products is list of product array
      });
    })
    .catch((error) => {
      // console.log(
      //   "handling error in catch block this is promise rejected case",
      //   error
      // );
      showErrorScreen(error);
    });
};

getAllProducts();

function showErrorScreen(error) {
  const errorDiv = document.createElement("div");
  errorDiv.innerHTML = error
    ? `<h2 style= 'color: red;
    width: 100vw;
    display: flex;
    justify-content: center;'>${error}`
    : `<h2 style= 'color: red;
    width: 100vw;
    display: flex;
    justify-content: center;'>Their some error Please try again later`;
  document.getElementById("container").appendChild(errorDiv);
}

// diff between json and object
const data = {
  name: "Vishal",
};

// pseudocode
// function fetch(url) {
//   return new Promise((resolved, reject) => {
//     // some xmhttprequest  => and fetching data
//     // if http response status is 200  then
//    if(status==200) {
//     resolved(result)
//     // here result will be response return value
//    } else {
//     reject(error)
//     // error means error throw by the server
//    }
//   });
// }

// promise chain
