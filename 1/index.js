//1. Convert the string "123" to a number and add 7. (0.5 Grade)
// • Output Example: 130

let str = "123";
console.log(+str + 7);

/*
2. Check if the given variable is falsy and return "Invalid" if it is. (0.5 Grade)
• Input Example: 0
• Output Example: "Invalid"
*/

let val = null;
console.log(val ? "Valid" : "Invalid");

/*
 3. Use for loop to print all numbers between 1 and 10, skipping even numbers using continue (0.5 Grade)
• Output Example:1, 3, 5, 7, 9
 */

for (let i = 0; i < 10; i++) {
  if (i % 2 == 0) continue;
  console.log(i);
}

/*
4. Create an array of numbers and return only the even numbers using filter method. (0.5 Grade)
• Input Example: [1, 2, 3, 4, 5]
• Output Example: [2,4]
*/

let arr = [1, 2, 3, 4, 5];
let newarr = arr.filter((item) => item % 2 == 0);
console.log(newarr);

/*
5. Use the spread operator to merge two arrays, then return the merged array. (0.5 Grade)
• Input Example: [1, 2, 3], [4, 5, 6]
• Output Example: [1, 2, 3, 4, 5, 6]
*/
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
arr1.push(...arr2);
console.log(arr1);

/*
6. Use a switch statement to return the day of the week given a number (1 = Sunday ...., 7 = Saturday). (0.5 Grade)
• Input Example: 2
• Output Example: “Monday”
*/

let dayNum = 2;
let dayName = "";

switch (dayNum) {
  case 1:
    dayName = "Sunday";
    break;
  case 2:
    dayName = "Monday";
    break;
  case 3:
    dayName = "Tuesday";
    break;
  case 4:
    dayName = "Wednesday";
    break;
  case 5:
    dayName = "Thursday";
    break;
  case 6:
    dayName = "Friday";
    break;
  case 7:
    dayName = "Saturday";
    break;
  default:
    dayName = "Invalid Number";
}
console.log(dayName);
/*
7. Create an array of strings and return their lengths using map method (0.5 Grade)
Input: ["a", "ab", "abc"]
Output Example: [1, 2, 3]
 */
let arr3 = ["a", "ab", "abc", "cde"];
let newarr2 = arr3.map((item) => item.length);
console.log(newarr2);

/*
8. Write a function that checks if a number is divisible by 3 and 5. (0.5 Grade)
• Input Example: 15
• Output Example: “Divisible by both”
*/
function devby3and5(num) {
  return num % 3 === 0 && num % 5 === 0
    ? "Divisible by both"
    : "not Divisible by both";
}
console.log(devby3and5(5));

/*
9. Write a function using arrow syntax to return the square of a number (0.5 Grade)
• Input Example: 5
• Output Example: 25
*/
let square = (num) => num ** 2;
console.log(square(10));

/*
10.Write a function that destructures an object to extract values and returns a formatted string. (0.5 Grade)
• Input Example: const person = {name: 'John', age: 25}
• Output Example: 'John is 25 years old'
*/

let destruct = (person) => `${person.name} is ${person.age} years old`;
console.log(destruct({ name: "John", age: 25 }));
/*
 11.Write a function that accepts multiple parameters (two or more) and returns their sum. (0.5 Grade)
• Input Example: 1, 2, 3, 4, 5
• Output Example: 15
 */
function sum(...nums) {
  return nums.reduce((total, current) => total + current, 0);
}
console.log(sum(1, 2, 3, 4, 5));

/*
Write a function that returns a promise which resolves after 3 seconds with a 'Success' message. (0.5 Grade)
• Output Example: “Success”
*/
function printSuccess() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Success");
    }, 3000);
  });
}
printSuccess().then((message) => {
  console.log(message);
});

/*
13. Write a function to find the largest number in an array. (0.5 Grade)
• Input Example: [1, 3, 7, 2, 4]
• Output Example: 7
*/

let returnLargest = (nums) => Math.max(...nums);
console.log(returnLargest([1, 2, 20, 4, 5]));

/*
14. Write a function that takes an object and returns an array containing only its keys. (0.5 Grade)
• Input Example: {name: "John", age: 30}
• Output Example: ["name", "age"]
*/
let arrKeys = (obj) => Object.keys(obj);
console.log(arrKeys({ name: "mahmoud", age: 28 }));

/*
15. Write a function that splits a string into an array of words based on spaces. (0.5 Grade)
• Input: "The quick brown fox"
• Output: ["The", "quick", "brown", "fox"]
*/

let splitString = (str) => str.split(" ");
console.log(splitString("The quick brown fox"));

////////////////////////////////////////////////////
