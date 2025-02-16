//Challenge 1: String Manipulation Basics//
// Write a function that takes a string as input and returns the string in uppercase//

//function toUppercaseString(input) {
// return input.toUpperCase();
//}

//  Find both indices of the word "fox" in the sentence "The quick brown fox jumps over the lazy fox."

const sentence = "The quick brown fox jumps over the lazy fox";
const search = "fox";
const indexOfFirst = sentence.indexOf("fox");
console.log(`${indexOfFirst}`);
console.log(sentence.indexOf(search, indexOfFirst));

//  Combine ["apple", "banana"] and ["cherry", "date"] into a single array, and join the array into a string separated by commas.
let f1 = ["apple", "banana"];
let f2 = ["cherry", "date"];
const Combine = f1 + f2;



// Grab the first three months of the year from an array of months . Then, replace "Mar" with "March" in the original array.
// ["Jan", "Feb", "Mar", "Apr", "May"]

let months = ["Jan", "Feb", "Mar", "Apr", "May"];
let newArray = months.splice(0, 3, "March");

console.log;

// Add "grape" and "orange" to the array ["apple", "banana"].
// Then, remove the second element and reverse the array. reverse

let n1 = ["apple", "banana"];
n1.push("grape", "orange");
//console.log(n1);

n1.splice(1, 1);
console.log(n1);

n1.reverse();
console.log(n1);

let n2 = n1.slice(0, 3);
