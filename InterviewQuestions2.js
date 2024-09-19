//Question: what will be the output of the code?
let a = [1,8,9,10,22,57,27]
function array(b, ...a) {
    console.log(a);
}
array (3,8,9,11)
/* In this call, 3 is assigned to b, and the rest of the arguments 8, 9, 11 are collected into the a array due to the rest parameter ...a. */


//Question: what will be the output of the code?
let data = {name: 'john'};
console.log(delete data);
//output: true, as the data is successfully deleted


//Question: what will be the output?
const arr = [1,2,3,4,5];
console.log(delete arr);
//output: false //as constants cannot be deleted in javascript


//what the different types of array in javascript?
//Answer:1. Basic Array 2.Arrays of Objects 3.Nested Arrays
//sparse array
let sparseArray = [];
sparseArray[0] = 'a';
sparseArray[2] = 'c';
console.log(sparseArray); // Output: ['a', , 'c']


