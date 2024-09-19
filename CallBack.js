// Example function that takes a callback
function fetchData(callback) {
    setTimeout(function() {
      const data = 'Hello, world!';
      callback(data); // Calling back with the fetched data
    }, 1000); // Simulating an asynchronous delay of 1 second
  }
  // Callback function to process the fetched data
  function processData(data) {
  console.log('Data received:', data);
  }
  // Calling fetchData and passing processData as a callback
  fetchData(processData);




  
  /*Event Handling: Event listeners often use callback functions to respond to user actions (like clicks, key presses, etc.).
 Asynchronous Operations: Functions like setTimeout, AJAX requests (fetch, XMLHttpRequest), and Promise handlers rely heavily on callbacks to handle results or errors. */

 /*Callback Hell: When multiple nested callbacks become deeply nested and hard to manage, it’s referred to as callback hell. This can be mitigated using named functions or modern alternatives like Promises and async/await. */