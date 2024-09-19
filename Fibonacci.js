function fibonacciSeries(count) {
    let fibSeries = [0, 1];

    for (let i = 2; i < count; i++) {
        fibSeries[i] = fibSeries[i - 1] + fibSeries[i - 2];
    }

    return fibSeries;
}
// Example: Generate and print Fibonacci series of 10 numbers
const count = 10;
const series = fibonacciSeries(count);
console.log(`Fibonacci series of ${count} numbers:`, series.join(', '));
//Output: Fibonacci series of 10 numbers: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34
