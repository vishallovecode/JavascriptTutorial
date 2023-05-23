for (var i = 0; i < 5; i++) {
  console.log(i);
}

var array = [1, 2, 3, "vishal", "hello", "6", 8, 9]; // =>1*2*3*6*8*9
var result = 1;
// while for loop

for (var i = 0; i < array.length; i++) {
  console.log(i, "==", array[i]);
}

// using loop multiply the above array element if they are numeric number
// and console.log() the result
