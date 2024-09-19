//Question1: Guess the output
function a() {
    c();
    function c(){
        console.log (b)
    }
}
var b = 10;
a();
//in this case 10 will be printed due to hoisting



//Question2: But this will print undefined
function a() {
    var b = 10;
    c();
    function c(){

    }
}
a();
console.log(b)
//variables declared with var are function-scoped. This means they are only accessible within the function they are declared in and not outside of it.
//The variable b is declared with var inside the function a. Therefore, b is scoped to the function a and cannot be accessed outside of this function.



//Question3: guess the output of this code
function x() {
    var a = 7;
    function y() {
        console.log (a)
    }
    y()
}
x()

//Question4: Guess the output
let ritikRun = {
    name: "Ritik",
    total: 0
};
let otherRun = ritikRun;  //this is called pass by reference
otherRun.total = 90

console.log(ritikRun);
console.log(otherRun);

//Question5: Guess the output
let ritikRun2 = {
    name2: "Ritik",
    total2: 0
};
let otherRun2 = {...ritikRun2}; //this is also shallowcopy, This means changes to the nested objects/arrays in the copied object will affect the original object and vice versa.
otherRun2.total2 = 90;
console.log(ritikRun2);
console.log(otherRun2);

//Question6: Guess the output
let ritikRun3 = {
    name3: "Ritik",
    total3: 0,
    balls: {type: "leather"}
};
let otherRun3 = {...ritikRun3}; //this is also a shallow copy
otherRun3.balls.type = "tennis"

console.log(ritikRun3)
console.log(otherRun3)
//A shallow copy only duplicates the top-level properties of an object. If the original object contains nested objects or arrays, the references to those nested objects/arrays are copied, not the objects/arrays themselves.

//Question7: Guess the output
var x = 20
function foo() {
    console.log(x)  //When console.log(x) is executed, x is declared but not yet initialized within the function scope, so it is undefined
    var x = 10;  //After that, x is assigned the value 10.

}
foo()  //Output is undefined

//another example of hoisting
function foo() {
    console.log(y); // Output: undefined
    var y = 20;
    console.log(y); // Output: 20
}
foo();

//another example of hoisting
console.log(x); // Output: undefined (because `x` is hoisted but not initialized)
var x = 5;
console.log(x); // Output: 5 (after initialization)