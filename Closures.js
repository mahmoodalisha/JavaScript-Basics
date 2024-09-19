//interview question: print 1 to 5 and each time take 2 seconds of time

//closures are like functions along with its lexical environment
//let has a block scope, so whenever the loop runs again, i has a new copy

function x(){
    for (let i = 1 ; i<=5 ; i++){
        setTimeout(function (){
            console.log(i)
        }, i * 3000);
    }
}
x();

//another example of closure
function outer(){
    var a = 10;      //this inner function has access to this a variable
    function inner(){   //this inner function has access its lexical outer environment

    }
    return inner;  //inner function still remember what the avlue of a was
}
outer()();   //calls just the inner function
//output: 10
//even if you move var a=10 after the inner function, it will still behave the same
//the function will work the same even if you use let variable