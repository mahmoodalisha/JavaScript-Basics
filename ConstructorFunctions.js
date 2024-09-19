//constructor function is a special type of function used to create and initialize objects.
//It sets the this keyword to refer to that new object

// Define a constructor function
function Person(name, age) {
    this.name = name;
    this.age = age;
  
    this.sayHello = function() {
      console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    };
  }
  
  // Create a new object using the constructor function
  const person1 = new Person('Alice', 30);
  const person2 = new Person('Bob', 25);
  
  // Call the method on the newly created objects
  person1.sayHello(); // Hello, my name is Alice and I am 30 years old.
  person2.sayHello(); // Hello, my name is Bob and I am 25 years old.
  