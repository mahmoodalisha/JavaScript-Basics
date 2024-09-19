//Question: take an array, const arr = [[1,2], [3,4], [5,6]] now remove all of these sub arrays and put inside a single array
//using for loop 
const arr = [[1, 2], [3, 4], [5, 6]];
let flattenedArray = [];

for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr[i].length; j++) {
    flattenedArray.push(arr[i][j]);
  }
}
console.log(flattenedArray); // Output: [1, 2, 3, 4, 5, 6]


//Question: sort array without using in built function
const arr2 = ['z', 'a', 'b', 'd'];

function bubbleSort(array) {
  let n = array.length;
  let swapped;

  do {
    swapped = false;
    for (let i = 1; i < n; i++) {
      if (array[i - 1] > array[i]) {
        // Swap the elements
        let temp = array[i - 1];
        array[i - 1] = array[i];
        array[i] = temp;
        swapped = true;
      }
    }
    // Reduce the number of elements to check, as the last element in this pass is already in its correct position
    n--;
  } while (swapped);

  return array;
}
const sortedArray = bubbleSort(arr);
console.log(sortedArray); // Output: ['a', 'b', 'd', 'z']

//Question: what is the output of the following?
console.log(NaN == NaN);  // Output: false
console.log(NaN === NaN); // Output: false

//Question: what is the output of the following?
console.log(isNaN(NaN));         // Output: true
console.log(Number.isNaN(NaN));  // Output: true
console.log(isNaN("string"));    // Output: true (because "string"



//Question: return the longest word in the string
const str = 'abc abcd abcdefer ghij';
function findLongestWord(str) {
// Step 1: Split the string into an array of words
const words = str.split(' ');
// Step 2: Initialize a variable to store the longest word
let longestWord = '';
// Step 3: Iterate through each word in the array
for (let i = 0; i < words.length; i++) {
// Step 4: Compare current word with longestWord and update if longer
if (words[i].length > longestWord.length) {
      longestWord = words[i];
    }
  }
// Step 5: Return the longest word found
  return longestWord;
}
// Example usage:
const longest = findLongestWord(str);
console.log(longest); // Output: "abcdefer"


//Question: find factorial of a number
function factorialIterative(n) {
    let result = 1;
    //Iteratively multiply result by numbers from 1 to n
    for (let i = 1; i <= n; i++) {
      result *= i;
    }
    return result;
  }
  // Example usage:
  const number = 5;
  const factorial = factorialIterative(number);
  console.log(`Factorial of ${number} is: ${factorial}`); // Output: Factorial of 5 is: 120



  //Question: what is Temporary DeadZone in javascript?
  /*
  Definition: The TDZ is the period between the start of the scope (block) 
  and the point where the variable is declared. During this phase, trying to access the variable will result in a ReferenceError.
  Accessing Variables: While variables declared with var are hoisted and initialized with undefined, variables declared with let and const are hoisted but not initialized. They remain in a "temporal dead zone" until the actual declaration statement is reached.
  */
  console.log(myVar); // undefined (var is hoisted and initialized with undefined)
  var myVar = 1;
  
  console.log(myLet); // ReferenceError: Cannot access 'myLet' before initialization
  let myLet = 2;
  
