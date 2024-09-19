//for in loop is used to iterate over over the keys of object.
//for in loop prints only the keys not the values
const person = { name: 'Alice', age: 25, city: 'New York' };
for (let key in person) {
  console.log(key + ': ' + person[key]);
}


//for of loop is used to iterate over the values  of the object
const numbers = [10, 20, 30, 40];
for (let number of numbers) {
  console.log(number);
}

//The forEach method is used to execute a function on each element of an array. It is a method of the Array prototype and provides a callback function.
// Example: Use forEach to print each element of an array
const fruits = ['apple', 'banana', 'cherry'];
fruits.forEach((fruit) => {
  console.log(fruit);
});


//while loop
let number = prompt("Enter a number greater than 10:");
while (number <= 10) {
  number = prompt("Invalid input. Please enter a number greater than 10:");
}
console.log("You entered a valid number: " + number);


//do while 
let number2;
do {
  number = prompt("Enter a number greater than 10:");
} while (number2 <= 10);

console.log("You entered a valid number: " + number2);
