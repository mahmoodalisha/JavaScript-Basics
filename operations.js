//promises is used to handle asynchronous code
console.log("Start");

const asyncOperation = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("This is an asynchronous operation using promises.");
  }, 2000);
});

asyncOperation.then((message) => {
  console.log(message);
});

console.log("End");

/* output 
Start
End
This is an asynchronous operation using promises.
 */


//async-await
console.log("Start");

const executeAsyncOperation = async () => {
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve("This is an asynchronous operation using async/await.");
    }, 2000);
  }).then((message) => {
    console.log(message);
  });
};

executeAsyncOperation();

console.log("End");

/* output 
Start
End
This is an asynchronous operation using async-await.
 */

//asyncOperation2 is defined as an arrow function. This function, when called, will return a new Promise.
//A Promise is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
//The Promise constructor takes a function as an argument. This function itself takes two parameters: resolve and reject. These are functions that you call to fulfill or reject the promise, respectively.




//fetching data from API
const fetchData = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
      if (!response.ok) {
        throw new Error('Network response was not ok.');
      }
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  
  fetchData();
  