// Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.

// Note: a and b are not ordered!
// Examples (a, b) --> output (explanation)

// (1, 0) --> 1 (1 + 0 = 1)
// (1, 2) --> 3 (1 + 2 = 3)
// (0, 1) --> 1 (0 + 1 = 1)
// (1, 1) --> 1 (1 since both are same)
// (-1, 0) --> -1 (-1 + 0 = -1)
// (-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)

// Your function should only return a number, not the explanation about how you get that number.


function getSum(a, b) {
    if (a === b) return a;
    let sorted = [a, b].sort((a, b) => a - b);
    let sum = 0;
    for (let i = sorted[0]; i <= sorted[1]; i++) {
        sum += i
    }
    return sum
}

let n1 = 5;
let n2 = -2;

//sum for an arithmetic series
//sum = (number of terms * (first term + last term)) / 2
//number of terms inclusive
//number of terms = max - min + 1 


console.log(getSum(n1, n2))

//formula
// sumOfN = (n / 2) * (a + l)
//n = number of terms
// a = first term
// l = last term
//formula for number of terms
//l = a + (n - 1)d
//l = a + (d * n) - d

// const a = -5
// const l = 101

// let diff = (l - a) + 1
// let avg = (a + l) / 2
// console.log(diff, avg)
// let sum = diff * avg
// console.log(sum)


// let firstTerm = 0
// let lastTerm = 200
// let numberOfTerms = Math.max(firstTerm, lastTerm) + Math.min(firstTerm, lastTerm) + 1
// let sumOfTerms = (numberOfTerms * (Math.max(firstTerm, lastTerm) + Math.min(firstTerm, lastTerm))) / 2

// console.log(sumOfTerms)









