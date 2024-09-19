//Question: you have been given numbers 1 to 50 and check and print those numbers which are divisible by 3 and print fizz for the numbers that are not divisible by 3

for (let i = 1; i <= 50; i++) {
    // Check if the number is divisible by 3
    if (i % 3 === 0) {
        console.log(i); // Print the number if divisible by 3
    } else {
        console.log('fizz')
    }
}

