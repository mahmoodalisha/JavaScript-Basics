//Circle
const radius = [3, 1, 2, 4];

const calculate = function (radius, logic) {  //logic: A function that will be applied to each element of the radius array.
    const output = []
    for (let i = 0; i<radius.length; i++) {
        output.push(logic(radius[i]))  //Inside the loop, the logic function is called with the current element of the radius array (radius[i]).
    }
    return output;
}

const area = function (radius) {//Area=π×radius×radius
 return Math.PI * radius * radius  
}

const circumference = function(radius) { //Circumference=2×π×radius
 return 2 * Math.PI * radius
}

const diameter = function (radius) {
    return 2 * radius;
}

console.log(calculate(radius,area));
console.log(calculate(radius,circumference));
console.log(calculate(radius,diameter));

//run the code and see the output


//other way
const calculateArea = function (radius) {
    const output = []
    for (let i = 0; i< radius.length; i++){
        const area2 = Math.PI * radius[i] * radius[i]
        output.push(area2)
    }
    return output
}
console.log(calculateArea(radius))