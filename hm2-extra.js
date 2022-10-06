// Additional assignments for Day 8

/* EXTRA 1
 Write a piece of code for reverting an array.
 es:
 [1, 3, 5] ==> [5, 3, 1]
*/

const arr = [1, 3, 5, 6];
console.log("The original array", arr);
const revertedArr = arr.reverse();
console.log("The reverted array", revertedArr);

/* EXTRA 2
 Write a piece of code for getting the maximum numerical value from an array.
*/

const arr2 = [10, -5, 13, 677, 100, 300];
let max = arr2[0];
for (let i = 1; i < arr2.length; i++) {
  if (arr2[i] > max) max = arr2[i];
}
console.log("The maximum value of the array: ", max);

/* EXTRA 3
 Write a piece of code for getting the minimum numerical value from an array.
*/

const arr3 = [10, -5, 13, 677, 100, 300];
let min = arr3[0];
for (let i = 1; i < arr3.length; i++) {
  if (arr3[i] < min) min = arr3[i];
}
console.log("The minimum value of the array: ", min);

/* EXTRA 4
 Write a piece of code for getting only even numerical values from an array.
*/

const arr4 = [10, -5, 13, 677, 100, 300];
let evenArray = [];

for (let i = 0; i < arr4.length; i++) {
  if (arr4[i] % 2 == 0) {
    evenArray.push(arr4[i]);
  }
}

console.log("The array with even values: ", evenArray);

/* EXTRA 5
 Write a piece of code for deleting only even entries from an array.
*/

const arr5 = [10, -6, 13, 677, 101, 302, 400];
for (let i = 0; i < arr5.length; i++) {
  if (arr5[i] % 2 == 0) {
    arr5.splice(i, 1);
    i--;
  }
}
console.log("The array after removing the even values: ", arr5);

/* EXTRA 6
 Write a piece of code for removing all the vowels from a string.
*/

let someString = "Alexandra Alexandrescu";
let lowerCaseString = someString.toLowerCase();
console.log("This is the original string with vowels: ", someString);

console.log(
  "The string without vowels: ",
  lowerCaseString.replaceAll(/[aeiou]/g, "")
);

/* EXTRA 7
 Write a piece of code for increasing all the numerical values in a array by 1.
*/

const arr7 = [2, 4, 6, 8, 10];
for (let i = 0; i < arr7.length; i++) {
  arr7[i] += 1;
}
console.log("The array increased by 1 ", arr7);

/* EXTRA 8 
 Replace all the strings contained in an array with their length.
 es.: ["strive", "is", "great"] => [6, 2, 5]
*/

const arr8 = ["strive", "is", "great"];
for (let i = 0; i < arr8.length; i++) {
  arr8[i] = arr8[i].length;
}
console.log("The length of every element of the array: ", arr8);
