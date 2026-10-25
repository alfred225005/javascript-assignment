// 1. Print numbers from 1 to 10
for (let i = 1; i <= 10; i++) {
  console.log(i);
}


// 2. Function that takes an array of numbers and returns the sum
function sumArray(numbers) {
  return numbers.reduce((sum, num) => sum + num, 0);
}

console.log("Sum:", sumArray([1, 2, 3, 4, 5]));


// 3. Function to find the largest number in an array
function findLargest(numbers) {
  return Math.max(...numbers);
}

console.log("Largest number:", findLargest([10, 5, 20, 8]));


// 4. Function that checks if a number is even or odd
function checkEvenOdd(number) {
  if (number % 2 === 0) {
    return "Even";
  } else {
    return "Odd";
  }
}

console.log("Number is:", checkEvenOdd(7));


// 5. Function that reverses a given string
function reverseString(str) {
  return str.split("").reverse().join("");
}

console.log("Reversed string:", reverseString("Hello"));


// 6. Merge two arrays using the spread operator
const a = [1, 2];
const b = [3, 4];

const mergedArray = [...a, ...b];

console.log("Merged array:", mergedArray);


// 7. Use ES6 filter to return even numbers
const numbers = [1, 2, 3, 4, 5, 6];

const evenNumbers = numbers.filter((number) => number % 2 === 0);

console.log("Even numbers:", evenNumbers);


// 8. Rewrite using template literals
const name = "Alice";
const msg = `Hello ${name}, welcome!`;

console.log(msg);


// 9. Rewrite the function using an arrow function
const greet = (name) => {
  return `Hello, ${name}`;
};

console.log(greet("Alice"));
