// ------------------------------
// STRING MANIPULATION FUNCTIONS
// ------------------------------

// 1. Reverse a String
function reverseString(str) {
  return str.split('').reverse().join('');
}

// 2. Count Characters
function countCharacters(str) {
  return str.length;
}

// 3. Capitalize Words
function capitalizeWords(sentence) {
  return sentence
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}



// ------------------------------
// ARRAY FUNCTIONS
// ------------------------------

// 1. Find Maximum
function findMax(arr) {
  return Math.max(...arr);
}

// 2. Find Minimum
function findMin(arr) {
  return Math.min(...arr);
}

// 3. Sum of Array
function sumArray(arr) {
  return arr.reduce((sum, num) => sum + num, 0);
}

// 4. Filter Array (Condition Function Required)
function filterArray(arr, conditionFunc) {
  return arr.filter(conditionFunc);
}



// ------------------------------
// MATHEMATICAL FUNCTIONS
// ------------------------------

// 1. Factorial
function factorial(n) {
  if (n < 0) return "Invalid input";
  if (n === 0 || n === 1) return 1;
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}

// 2. Prime Number Check
function isPrime(n) {
  if (n <= 1) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}

// 3. Fibonacci Sequence
function fibonacci(n) {
  if (n <= 0) return [];
  if (n === 1) return [0];

  let seq = [0, 1];
  for (let i = 2; i < n; i++) {
    seq.push(seq[i - 1] + seq[i - 2]);
  }
  return seq;
}



// ------------------------------
// EXAMPLE TESTS (OPTIONAL)
// ------------------------------
console.log(reverseString("hello"));         // "olleh"
console.log(countCharacters("hello"));       // 5
console.log(capitalizeWords("hello world")); // "Hello World"

console.log(findMax([1, 2, 3]));             // 3
console.log(findMin([1, 2, 3]));             // 1
console.log(sumArray([1, 2, 3]));            // 6

console.log(filterArray([1,2,3,4], n => n > 2)); // [3,4]

console.log(factorial(5));                   // 120
console.log(isPrime(11));                    // true
console.log(fibonacci(7));                   // [0,1,1,2,3,5,8]
