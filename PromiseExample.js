// // You have to handle loading state
// // You have to show no result found page
// // Have to show list of the user card
// // initially there should be any data

// // fetchUser(value);

// // fetchUser = (value) => {
// //   res = fetch(`url?q=${value}`);
// //   // res.json()
// //   // result
// //   displayName(result);
// // };

// // inputChange ()=> {
// //     fetchUser(e.target.value)
// // }

// function displayUsers(users) {
//   // users will be the array  of user object
//   const resultDiv = document.getElementById("userResult");
//   if (users && users.length == 0) {
//     resultDiv.textContent = "No Data Found";
//     return;
//   }

//   resultDiv.innerHTML = "";
//   users.forEach((user, index) => {
//     const div = document.createElement("div");
//     div.style = "border:2px solid red";
//     const template = `<div style = "display:flex;flex-direction:column">
//     <img src = "${user.image}">
//     <span>${user.firstName}</span>
//     <span>${user.lastName}</span>
//     <span>${user.email}</span>
//     <span>${user.phone}</span>
//      </div>`;
//     div.innerHTML = template;
//     resultDiv.appendChild(div);
//   });
// }

// async function fetchUser(search) {
//   const loading = document.getElementById("loading");
//   loading.style.display = "block";
//   try {
//     const res = await fetch(`https://dummyjson.com/users/search?q=${search}`);

//     const result = await res.json();
//     displayUsers(result?.users);
//   } catch (error) {
//   } finally {
//     // this will cal always
//     loading.style.display = "none";
//   }
//   // here response is not json type
// }

// function userInput(event) {
//   fetchUser(event.target.value);
// }

// async function resolvedPromise() {
//   const promise = new Promise((resolved, reject) => {
//     setTimeout(() => {
//       resolved("Hey I am resolved");
//     }, 5000);
//   });

//   const promiseResult = promise.then((res) => {
//     console.log("1", res);
//   });

//   console.log("2", promiseResult);

//   const promiseResult1 = await promise;
//   console.log("3", promiseResult1);
// }

// const value = resolvedPromise();
// console.log(value, "hey value");

// Ajax

// Promise.all

const pr1 = new Promise((resolved, rejected) => {
  setTimeout(() => {
    rejected("Pr1 rejected");
  }, 5000);
});

const pr2 = new Promise((resolved, rejected) => {
  setTimeout(() => {
    rejected("pr2 rejected");
  }, 1000);
});

const pr3 = new Promise((resolved, rejected) => {
  setTimeout(() => {
    rejected("pr3 rejected");
  }, 2000);
});

const pr4 = new Promise((resolved, rejected) => {
  setTimeout(() => {
    rejected("pr4 rejected");
  }, 5000);
});
const promise = Promise.all([pr1, pr2, pr3, pr4]);

// if all promise is fullfilled than it will give you the result of all promise in array else it will  return the value of first rejected promise

console.log(promise, "promise.all");

promise
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log("error::", error);
  });

// api1 , api2 , api3 , api4

const res1 = new Promise((resolved, rejected) => {
  setTimeout(() => {
    resolved("res1 resolved");
  }, 1000);
});

const res2 = new Promise((resolved, rejected) => {
  setTimeout(() => {
    rejected("res2 rejected");
  }, 2000);
});

// const pr3 = new Promise((resolved, rejected) => {
//   setTimeout(() => {
//     rejected("pr3 rejected");
//   }, 2000);
// });

// const pr4 = new Promise((resolved, rejected) => {
//   setTimeout(() => {
//     rejected("pr4 rejected");
//   }, 5000);
// });

const promise12 = Promise.all([res1, res2]);

promise12.then(()=>{
  console.log()
})
MyAll (pr1 , pr1) {
  // pr1 => fullfilled 
  // result.push(pr1value)
  // // pr2 => fullfilled
  // // result.push(pr2value)
  // return result



//pr1 => resolved
// result.push(pr1)
//pr2 => rejected end return pr2 value

}