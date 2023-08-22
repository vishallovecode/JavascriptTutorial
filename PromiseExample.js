// You have to handle loading state
// You have to show no result found page
// Have to show list of the user card
// initially there should be any data

// fetchUser(value);

// fetchUser = (value) => {
//   res = fetch(`url?q=${value}`);
//   // res.json()
//   // result
//   displayName(result);
// };

// inputChange ()=> {
//     fetchUser(e.target.value)
// }

function displayUsers(users) {
  // users will be the array  of user object
  const resultDiv = document.getElementById("userResult");
  if (users && users.length == 0) {
    resultDiv.textContent = "No Data Found";
    return;
  }

  resultDiv.innerHTML = "";
  users.forEach((user, index) => {
    const div = document.createElement("div");
    div.style = "border:2px solid red";
    const template = `<div style = "display:flex;flex-direction:column">
    <img src = "${user.image}">
    <span>${user.firstName}</span>
    <span>${user.lastName}</span>
    <span>${user.email}</span>
    <span>${user.phone}</span>
     </div>`;
    div.innerHTML = template;
    resultDiv.appendChild(div);
  });
}

async function fetchUser(search) {
  const loading = document.getElementById("loading");
  loading.style.display = "block";
  try {
    const res = await fetch(`https://dummyjson.com/users/search?q=${search}`);

    const result = await res.json();
    displayUsers(result?.users);
  } catch (error) {
  } finally {
    // this will cal always
    loading.style.display = "none";
  }
  // here response is not json type
}

function userInput(event) {
  fetchUser(event.target.value);
}

async function resolvedPromise() {
  const promise = new Promise((resolved, reject) => {
    setTimeout(() => {
      resolved("Hey I am resolved");
    }, 5000);
  });

  const promiseResult = promise.then((res) => {
    console.log("1", res);
  });

  console.log("2", promiseResult);

  const promiseResult1 = await promise;
  console.log("3", promiseResult1);
}

const value = resolvedPromise();
console.log(value, "hey value");

// Ajax
