//.slice()
//prints a new array of the string selected from start to end (end not included).
const arr = [1, 2, 3, 4, 5];
const newArr = arr.slice(1, 3);
console.log(newArr); // Output: [2, 3]

const str = "Hello, world!";
const newStr = str.slice(0, 5);
console.log(newStr); // Output: Hello


//.splice()
//This method modifies the original array.
const arr2 = [1, 2, 3, 4, 5];
const removed = arr2.splice(2, 2, 'a', 'b');
console.log(arr2);      // Output: [1, 2, 'a', 'b', 5]
console.log(removed);  // Output: [3, 4]


//.toString()
//this method returns a string representing the specified array or object.
const arr3 = [1, 2, 3, 4, 5];
const str3 = arr.toString();
console.log(str3); // Output: 1,2,3,4,5

//.split()
//this method divides a String into an ordered list of substrings, puts these substrings into an array, and returns the array.
const str4 = "Hello, world!";
const arr4 = str.split(", ");
console.log(arr4); // Output: ["Hello", "world!"]

//.join()
//method creates and returns a new string by concatenating all of the elements in an array, separated by commas or a specified separator string.
const arr5 = ["Hello", "world!"];
const str5 = arr.join(", ");
console.log(str5); // Output: Hello, world!

//.map()
const arr6 = [1, 2, 3, 4, 5];
const newArr6 = arr.map(x => x * 2);
console.log(newArr6); // Output: [2, 4, 6, 8, 10]

//.filter()
//method creates a new array with all elements that pass the test implemented by the provided function.
const arr7 = [1, 2, 3, 4, 5];
const newArr7 = arr7.filter(x => x > 2);
console.log(newArr7); // Output: [3, 4, 5]

//.reduce()
//method executes a reducer function on each element of the array, resulting in a single output value.
const arr8 = [1, 2, 3, 4, 5];
const sum = arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum); // Output: 15

//.forEach() method access the value of the elements of the array
//.forEach does not return a new array but instead returns undefined.
const arr9 = [1, 2, 3, 4, 5];
arr9.forEach(x => console.log(x * 2));
/*
Output:
2
4
6
8
10
*/

//.find()
//method returns the value of the first element in the provided array that satisfies the provided testing function.
const arr10 = [1, 2, 3, 4, 5];
const found = arr10.find(x => x > 3);
console.log(found); // Output: 4

//.includes()
//method determines whether an array includes a certain value among its entries, returning true or false as appropriate.
const arr11 = [1, 2, 3, 4, 5];
const hasThree = arr11.includes(3);
console.log(hasThree); // Output: true

//.flat()
//You can use the flat method to remove all sub-arrays and put their elements into a single array. 
const arr12 = [[1, 2], [3, 4], [5, 6]];
const flattenedArray = arr.flat();
console.log(flattenedArray); // Output: [1, 2, 3, 4, 5, 6]



//another example of forEch method
const books = [
    {title: 'Book One', gere: 'Fiction', publish: 1981},
    {title: 'Book Two', gere: 'Non-Fiction', publish: 1985},
    {title: 'Book Three', gere: 'Science-Fiction', publish: 1991},
    {title: 'Book Four', gere: 'History', publish: 1996}
];
const userBooks = books.filter((bk)=> bk.genre === "fiction" )
console.log(userBooks)

//i want to add 10 in all of the numbers in the given array
const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const newnums = myNumers.map((num)=>{
    return num + 10});
console.log(newnums);


//reducer
const myNums = [1, 2, 3]
const myTotal = myNums.reduce((acc,currval) => {
    console.log(`acc: ${acc} and currval: ${currval}`);
    return acc + currval
}, 0)  //this 0 is the current value of the accumulator you can pass any number
console.log(myTotal);
/* output
acc: 0 and currval: 1
acc: 1 and currval: 2
acc: 2 and currval: 3
*/