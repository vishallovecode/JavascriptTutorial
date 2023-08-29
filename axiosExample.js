async function callApi() {
  // here axios is automatically converting response in json
  // axios also return the promises
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/users"
  );

  const data = await fetch("https://jsonplaceholder.typicode.com/users");
  const result = await data.json();
  console.log(response, result);
}

callApi();

// Reuqest method  => GET , POST , PUT , PATCH , DELETE
// How to send data to backend
