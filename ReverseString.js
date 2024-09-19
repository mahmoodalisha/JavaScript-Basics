let str = "Hello, world!";
let reversedStr = '';

// Iterate through the string from end to beginning
for (let i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i]; // Build the reversed string character by character
}

console.log("Original string:", str);
console.log("Reversed string:", reversedStr);
