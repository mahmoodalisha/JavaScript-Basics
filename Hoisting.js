//hoisting is not allowed in let and const

myFun();  //calling function iska output aaya second

var myFun = function () { //re initializing the function, runtime pe value change ho gai
    console.log("First");
};

myFun();  //iska output aaya first

function myFun() {
    console.log("second");
}

myFun();  //iska output aaya first
//output
//Second
//First
//First


//Declarations using let and const are also hoisted to the top of their block scope (not function or global scope).
//However, they are not initialized. This means accessing them before their declaration will result in a ReferenceError.
//Temporal Dead Zone: The time between entering the scope and the actual declaration of the variable is called the Temporal Dead Zone (TDZ).