//Question: print the 2nd largest element of the array
const input1 = [3, 5, 11, 7, 9];

function findsecondlargest (arr) {
   let largest = -Infinity;
   let secondlargest = -Infinity;
for (let i = 0; i < arr.length; i++) {
    
    let num = arr[i];
    if (num > largest){ //at this point largest is -Infinity
        secondlargest = largest;   //secondLargest = -Infinity (old largest)
        largest = num;     //largest = 3
    }
    else if (num>secondlargest && num<largest){
        secondlargest = num;
    }
}
    return secondlargest;

}

console.log(findsecondlargest(input1))
//output 9

