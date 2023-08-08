//Akash =>1
//Aditya  =>1

// Type Conversion

// What is type casting in JS? developer(explicit)
// What is type coersion ? js compiler convert(implicit)

const data = 2 + "2"; // 22

const data1 = parseInt("2"); // 2

// Note:1 => All the string except empty string javascript consider a true value
// Note: 2 => all the number except 0 and -0 Javascript consider a true value
// Note: 3 => All the array either empty or some value consider a true value
// Note: 4 => All the object is consider as a true value

var ls = "Vishal";
var ls2 = "";
console.log(Boolean(ls)); // true
console.log(Boolean(ls2)); // false
console.log(Boolean(-0)); // false
console.log(Boolean(0)); // false
console.log(Boolean(1)); // true
console.log(Boolean(-11)); // true
console.log(Boolean([])); // true
console.log(Boolean({})); // true

console.log(+[]); //

var tts = -("20" + "30" + "50") - ("30" - "30" + 60);

console.log("tts=>>", tts);

///

console.log(true == "Vishal"); // false
// true == "Vishal" => 1 == NaN //  false
console.log(true == "1"); //
// true == "1" => 1 ==1 // true

console.log(false == 0);
console.log(" " == "");
console.log(" " == 0);
console.log(false === 0);
console.log([] == "");
console.log({} == "");
console.log([] == false);
console.log({} == false);

console.log(-0 === +0); //
console.log(parseInt("12vishal")); //12
console.log(parseInt("1v234ishal")); // 1
console.log(parseInt("v234ishal122")); // NaN
console.log(parseInt("vishal123")); // NaN

console.log(+"12vishal"); // NaN
console.log(+"vishal123"); // NaN

console.log(Number("12vishal")); // NaN
console.log(Number("vishal123")); // NaN

console.log(isNaN("Vishal"));
console.log(isNaN("124"));
console.log(isNaN(parseInt("123Vishal"))); //  false

console.log(2 > 3); //
console.log(2 < 3); //

console.log(' "2" < 3', "2" < 3);
console.log("A" < "B"); //
console.log("a" < "A"); //

console.log(' "2" < 3', "2" < 3);
