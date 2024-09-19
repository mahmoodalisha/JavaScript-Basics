//Template literals in JavaScript are a way to create strings that allow for embedded expressions and multiline strings. They are enclosed by backticks (`) instead of single or double quotes.
//it comes under string manipulation
const name = "Alice";
const age = 25;
const greeting = `Hello, my name is ${name} and I am ${age} years old.`;
console.log(greeting); // Output: Hello, my name is Alice and I am 25 years old.


const a = 5;
const b = 10;
const result = `The sum of ${a} and ${b} is ${a + b}.`;
console.log(result); // Output: The sum of 5 and 10 is 15.

const title = "Hello World";
const body = "This is a simple template literal example.";
const html = `
  <h1>${title}</h1>
  <p>${body}</p>
`;
console.log(html);
/*
Output:
<h1>Hello World</h1>
<p>This is a simple template literal example.</p>
*/
