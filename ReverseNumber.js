//Question: Reverse a number
let num = 12345; // Example number
// Convert number to string, reverse the string, and convert back to number
let reversedNum = parseInt(num.toString().split('').reverse().join(''));
console.log(reversedNum); // Output: 54321


//Question: Reverse a number without using inbuilt function
// Example number
let number = 12345;
let reversedNumber = 0;
// Reverse the number
while (number > 0) {
// Extract the last digit of the number
let digit = number % 10;
// Append the digit to reversedNumber (shifting previous digits left)
reversedNumber = (reversedNumber * 10) + digit;
// Remove the last digit from number
number = Math.floor(number / 10);
}
// Output the reversed number
console.log("Reversed number:", reversedNumber);
