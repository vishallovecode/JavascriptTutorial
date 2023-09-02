// setting a value in local storage
if (typeof window != "undefined") {
  localStorage.setItem("key1", "Hurrah we did it");
  // here in setItem first params is key and second is value , value can be any type
}

// getting  a value from local storage
if (typeof window != "undefined") {
  console.log(localStorage.getItem("key1"));
  // here in setItem first params is key and second is value , value can be any type
}

// removing  a value from local storage
if (typeof window != "undefined") {
  localStorage.removeItem("key1");
  // here in setItem first params is key and second is value , value can be any type
}

if (typeof window != "undefined") {
  console.log(localStorage.getItem("key1"));
  // here in setItem first params is key and second is value , value can be any type
}
