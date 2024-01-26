/**
 * #1 Hobbies
 * ----------
 * 1. Create an array of group member hobbies
 * 2. Write a loop that logs out each hobby
 * 3. After the loop, log out the total number of
 *    hobbies
 *
 *
 */

let hobbies = ["carpentry", "camps", "soccer"];

console.log(hobbies.length);
console;
for (let index = 0; index < hobbies.length; index++) {
  console.log(hobbies[index]);
}
console.log("the total number of hobbies", hobbies.length);

// Example output
// 1. swimming
// 2. board games
// 3. painting
// Total hobbies: 3

/**
 * #2 Colors
 * ---------
 * 1. Create an array of colors as strings
 *    (include the color 'teal' at least once)
 * 2. Create a variable tealCount
 * 3. Write a loop that counts the number of times teal
 *    is in the array
 * 4. Output the array and number of times teal was found
 */
let colors = ["blue", "yellow", "teal", "violet", "teal", "green"];
let tealCount;
for (let index = 0; index < colors.length; index++) {
  if (colors[index] === "teal") {
    tealCount = colors.indexOf("teal");
    console.log(colors[index], "found", tealCount);
  }
}
console.log(colors);

// Example output
// green, red, teal, orange, teal
// Teal was found 2 times

/**
 * #3 Even & Odd
 * -------------
 * 1. Create an array of numbers (at least 5 numbers)
 * 2. Create variables oddNumbers and evenNumbers (empty arrays)
 * 3. Write a loop that puts all the odd numbers in the oddNumbers
 *    array and even numbers in the evenNumbers array.
 * 4. Output the original array, odd number array and even number array
 */
let numbers = [10, 15, 7, 4, 9];
let oddNumbers = [];
let evenNumbers = [];
for (let index = 0; index < numbers.length; index++) {
  if (numbers[index] % 2 == 0) {
    evenNumbers[index] = numbers[index];
  } else {
    oddNumbers[index] = numbers[index];
  }
}
console.log(
  "The Original Array is",
  numbers,
  "Even numbers",
  evenNumbers,
  "Odd numbers",
  oddNumbers
);

// Example output
// 3, 7, 2, 8, 11, 4, 2
// Odd 3, 7, 11
// Even 2, 8, 4, 2

/**
 * #4 Flipping Switches
 * --------------------
 * 1. Create an array of boolean values (some true and some false)
 * 2. Create a variable toggled (empty array)
 * 3. Write a loop that adds the opposite value to the toggled array
 * 4. Output both arrays
 */

let values = [true, false, true, true];
let toggle = [];

for (let index = 0; index < values.length; index++) {
  toggle[index] = !values[index];
}
console.log("The origin is ", values);
console.log("Toggle is", toggle);

// Example output
// true, false, true, true
// Toggled false, true, false, false

/**
 * #5 (STRETCH) Remove 0's
 * --------------------
 * 1. Create an array of numbers which has one or more 0's
 *    at the end (e.g. 3, 0, 2, 8, 0, 0, 0)
 * 2. Write a loop that removes 0 from the end of the array
 *    NOTE: You should not need a second array here.
 * 3. Output the array
 *
 * Hint: Try using a while loop for this one.
 */

// Example output
// Before loop 3, 0, 2, 8, 0, 0, 0
// After loop 3, 0, 2, 8

let removeValues = [3, 0, 2, 8, 0, 0, 0];
let count = 0;

for (let index = removeValues.length - 1; index > 0; index--) {
  if (removeValues[index] === 0) {
    removeValues.pop();
  } else {
    break;
  }
}
console.log(removeValues);

/**
 * #6 (STRETCH) Highest & Lowest
 * --------------------
 * 1. Create a largish array of numbers (e.g. 2, 2, -3, 7, 4, 1, 7, 12, 8)
 * 2. Create two variables high & low.
 * 3. Loop over all numbers in the array keeping track of the highest
      and lowest numbers.
 * 3. Log the highest and lowest number to the console
 */

// Example output
// 2, 2, -3, 7, 4, 1, 7, 12, 8
// High: 12
// Low: -3

let maxnumbers = [2, 2, -3, 7, 4, 1, 7, 12, 8];
let max = maxnumbers[0];
let min = maxnumbers[0];

for (let index = 0; index < maxnumbers.length; index++) {
  if (maxnumbers[index] > max) {
    max = maxnumbers[index];
  }
  if (maxnumbers[index] < min) {
    min = maxnumbers[index];
  }
}
console.log(max);
console.log(min);
