// create five variables and assign them values
// each variable should reference a different primitive data type
// REMEMBER: you should never DELIBERATELY assign "undefined" to a variable
let thing1;
let thing2 = "Happy Days";
let thing3 = 44;
let thing4 = true;
let blankspace = null;
let thing5 = false;
// print the type of each variable in this order:
// string, number, boolean, undefined, null
console.log(
  typeof thing2,
  typeof thing3,
  typeof thing4,
  typeof thing1,
  typeof blankspace,

);
// create a variable that references a template literal
// inside the template literal, use two of the above variables
let temp = `I am fascinated with ${blankspace} and ${thing1}`;
// reassign the value of the variable that references "null"
blankspace = "The moon";
// print the value and its type
console.log(blankspace, typeof blankspace);
// print a variable that causes a ReferenceError
let thing5 = 45;
console.log(thing5 = 45);
// alter the previous line to no longer cause a ReferenceError


