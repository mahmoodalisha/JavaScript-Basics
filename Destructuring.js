//Destructuring in JavaScript allows you to extract values from arrays or properties from objects into distinct variables
const numbers = [1, 2, 3, 4, 5];
// Destructuring assignment
const [first, second, ...rest] = numbers;
console.log(first);  // Output: 1
console.log(second); // Output: 2
console.log(rest);   // Output: [3, 4, 5]
/* [first, second, ...rest] = numbers; assigns the first element of 
numbers to first, the second element to second, and the remaining elements as an array to rest.
So, first and second capture the first and second elements of numbers, respectively, and rest captures the remaining elements [3, 4, 5].*/



//Object Destructuring
// Example object
const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    address: {
    city: 'New York',
    state: 'NY',
    country: 'USA'
    }
  };
  
  // Destructuring assignment
  const { firstName, lastName, age, address: { city, state } } = person;
  console.log(firstName); // Output: 'John'
  console.log(lastName);  // Output: 'Doe'
  console.log(age);       // Output: 30
  console.log(city);      // Output: 'New York'
  console.log(state);     // Output: 'NY'
  
  //another example of destructuring
  //Question: const [a] = [10, 20, 30, 40, 50] get only the value 40 assigned to the variable a
  const [, , , a] = [10, 20, 30, 40, 50];
  console.log(a); // 40
