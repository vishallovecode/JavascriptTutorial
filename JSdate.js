console.log("Learning JS Date");
// Date constructor function
// Date is object in js

// check current date timestamp

const currentDate = new Date();
console.log(currentDate); // current time date year in ist
currentDate.toTimeString()();
console.log("currentDate.getTime()", currentDate.getTime());
console.log("currentDate.getDate()", currentDate.getDate());
console.log("currentDate.getMonth()", currentDate.getMonth()); // 6
console.log("currentDate.getFullYear()", currentDate.getFullYear());
console.log("currentDate.getSeconds()", currentDate.getSeconds());
console.log("currentDate.getMilliseconds()", currentDate.getMilliseconds());
console.log("currentDate.getMinutes()", currentDate.getMinutes());
console.log("currentDate.getHours()", currentDate.getHours());
console.log("currentDate.getDay()", currentDate.getDay());

function getFormattedDate(curr) {
  return `${curr.getDate()}-${curr.getMonth() + 1}-${curr.getFullYear()}`;
}
// ${variable} rest are string in template literal
console.log(getFormattedDate(currentDate));
// Month
// 0 =>Jan
// 1=> Feb
// 2=> March
// 3=> April
// 4=> May
// 5 => June
// 6=> July
// 7=> August
// 8=> sep
// 9=> oct
// 10=> nov
// 11 =>Dec

//Day

// date string

// SYTEM DATE // IF SYTEM DATE IS WRONG OUTPUT IS WRONG
console.log(currentDate.toLocaleDateString()); // 22/07/23
console.log(currentDate.toLocaleTimeString()); //  HH:MM:SS
console.log(currentDate.toLocaleString()); //   DD//MM//YY HH:MM:SS
