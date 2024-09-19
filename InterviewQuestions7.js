//Rotate the array by 2 places
const arr = [2, 7, 11, 4, -2]
function rotateArray (arr, k) {
    let n = arr.length;
    let newarr = [];
    let startIndex = k;

    for (let i = startIndex; i<n; i++){  //Push elements from startIndex to the end of the array
        newarr.push(arr[i])
    }
    for (i = 0; i<startIndex ; i++){ //// Push the remaining elements from the beginning to startIndex - 1
        newarr.push(arr[i])
    }
    return newarr
}
let rotated = rotateArray(arr, 2)
console.log(rotated)