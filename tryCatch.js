//

var newton = {};
var userDetail = {
  name: "Vishal",
};
var a = "hellow";

var b = 123;

var c = [1, 2, 3, 4];

a.tiktok; //  undefined
b.geometry; //  undefined
newton.name; // undefined
userDetail.name; // Vishal
c.name; // undefined

// if there is null and undefined value  if you try to access any key
// that will through the error

const cc = {
  name: {
    name1: {
      name: "Hello",
    },
  },
};
// this will through the error
// cc.name.name1.name.x // undefined
// cc.name.name1.name.x.y; //  // this will through the error
