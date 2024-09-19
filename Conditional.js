let score = 85;
if (score >= 90) {
  console.log("Grade: A");
} else if (score >= 80) {
  console.log("Grade: B");
} else if (score >= 70) {
  console.log("Grade: C");
} else if (score >= 60) {
  console.log("Grade: D");
} else {
  console.log("Grade: F");
}


let age = 16;
if (age >= 18) {
  console.log("You are an adult.");
} else {
  console.log("You are not an adult.");
}


//In JavaScript, both == (equality operator) and === (strict equality operator) are used for comparison, but they behave differently based on how they handle types and values.
0 == false   // true (false is coerced to 0)
'1' == 1     // true ('1' is coerced to 1)
null == undefined  // true (both null and undefined are considered equal)
NaN == NaN   // false (NaN is not equal to itself)


0 === false   // false (different types)
'1' === 1     // false (different types)
null === undefined  // false (different types)
NaN === NaN   // false (NaN is not equal to itself)
