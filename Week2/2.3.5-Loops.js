// Follow the steps below to create a **while** loop that TOTALS the numbers from 1 to 100

// 1) create a variable to represent the current number
let curNum = 100;
// 2) create a variable to represent the current total
let curTotal = 0;
// 3) write a while loop that sums the numbers from 1 to 100
let i = 1;
while (i <= curNum) {
  console.log("curTotal: " + curTotal);
  console.log("i: " + i);
  curTotal += 1;
  console.log("added together: " + curTotal);

  i++;
}
console.log(curTotal);
// Now using the same variables you created in steps 1 and 2, create a **for** loops that TOTALS the numbers from 1 to 100

// 1) write a for loop that sums the numbers from 1 to 100
curTotal = 0;
for (let i = 0; i <= curNum; i++) {
  curTotal += i;
}
console.log("curTotal forLoop: " + curTotal);
