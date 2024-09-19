//Convert array to object
const arr = ['a', 'b', 'c'];
let obj = arr.reduce(
    (acc, it, i) =>({...acc,[i]:it}), {}    //return kya hoga
)

//i is for index
//acc for accumulator
//it for iterator