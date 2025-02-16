// Named Parameters
// write a function that takes two named parameters:
function namedFunction( param1, param2) {
  console.log(param1, param2);
  return param1 + param2;
}
// print each named parameter,
// then return the parameters added together

// invoke the function and pass in two numbers
console.log(namedFunction(4, 7));
// invoke the function and pass in more than two numbers
console.log(4, 7, 8, 9);
// invoke the function and pass in only one number
console.log(namedFunction(4));
// change the function to set default values for the parameters
function namedFunction3( param1= 0 param2 = 2) {
  console.log(param1, param2);
  return param1 + param2;
// again, invoke the function and pass in only one number
console.log(namedFunction3(0))
// Rest Operator
// add a rest operator to the function's parameters
// add a line to the function's body to print the value of the rest operator

// again, invoke the function and pass in more than two numbers
