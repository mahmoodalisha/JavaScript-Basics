//immidiately invoked function expression
var variable = 10;
(() => {
    console.log(variable);
    variable = 20;
    console.log(variable);
}) ();

console.log(variable);
var variable = 30;

/* output
10
20
20 */