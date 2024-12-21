// Give the summation of all even numbers in a Fibonacci sequence up to, but not including, the number passed to your function. Or, in other words, sum all the even Fibonacci numbers that are lower than the given number n (n is not the nth element of Fibonacci sequence) without including n.

// The Fibonacci sequence is a series of numbers where the next value is the addition of the previous two values. The series starts with 0 and 1:

// 0 1 1 2 3 5 8 13 21...

// For example:

// fibonacci(0)==0
// fibonacci(33)==10
// fibonacci(25997544)==19544084

function fibonacci(max) {
    let fibSeries = [0, 1]
    let curr = 0;
    for (let i = 2; curr < max; i++) {
        curr = fibSeries[i - 1] + fibSeries[i - 2]
        if (curr >= max) {
            break
        } else {
            fibSeries[i] = curr
        }   
    }
    console.log(fibSeries)
    return fibSeries.filter((num) =>  num % 2 === 0).reduce((a, c) => a + c)
}

console.log(fibonacci(5))
console.log(fibonacci(8))
// fibonacci(25)


