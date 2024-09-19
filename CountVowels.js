//you are given a string, count the number of vowels
const str = "Hey JS! You R AMAZING";
//make your array of vowels
const vowels = ['a','e','i','o','u']
function countVowels(data) {
    let count = 0; //vowels ka count hai
    data.toLowerCase().split("").forEach((ch)=>{
        vowels.includes(ch) && count++//kya ye character vowels wale array me hai?
    })
    return count;
}

console.log(countVowels(str))
//.split method is convert the whole string into array
//inside forEach method, there is an arrow func