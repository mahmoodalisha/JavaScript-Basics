//JavaScript is a synchronous single threadedd language
//it has one call stack and it can only do one thing at a time 

console.log("Start");

// Asynchronous task with a delay of 0 milliseconds
setTimeout(() => {
    console.log("setTimeout callback");
}, 0);

// Promise that resolves immediately
Promise.resolve().then(() => {
    console.log("Promise resolved");
});

console.log("End");

/* Output
Start
End
Promise resolved
setTimeout callback
*/