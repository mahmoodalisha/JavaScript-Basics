//Question: print the output in object that has the same values in input1 and input2 in javascript

const input1 = { a: 1, b: 2, c: 3, d: 4, e: 5, f: 6, g: 7 };
const input2 = { a: 2, e: 5, f: 6, d: 10 };

const result = {};

for (const i in input2) {  //taking the smaller object for efficiency
    if(input1[i] === input2[i]) {
        result[i] = input2[i]  //you can also write like this: result[i] = input1[i]
    }
}
console.log(result)
// Output: { e: 5, f: 6 }