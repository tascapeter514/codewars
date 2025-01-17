// Write a function that takes an array of numbers (integers for the tests) and a target number. It should find two different items in the array that, when added together, give the target value. The indices of these items should then be returned in a tuple / list (depending on your language) like so: (index1, index2).

// For the purposes of this kata, some tests may have multiple answers; any valid solutions will be accepted.

// The input will always be valid (numbers will be an array of length 2 or greater, and all of the items will be numbers; target will always be the sum of two different items from that array).

// Based on: https://leetcode.com/problems/two-sum/

// twoSum([1, 2, 3], 4) // returns [0, 2] or [2, 0]
// twoSum([3, 2, 4], 6) // returns [1, 2] or [2, 1]

const testOne = [1, 2, 3]; //[0, 2] or [2, 0]
const testOneSum = 4;   
const testTwo =  [3, 2, 4]; //[1, 2] or [2, 1]
const testTwoSum = 6;
const testThree = [1234, 5678, 9012];
const testThreeSum = 14690;
const testFour = [2, 3, 6, 10, 35, 100] // [2, 5]
const testFourSum = 106





// MY SOLUTION
function twoSum(numbers, target) {
    for (let i = 0; i < numbers.length - 1; i++) {
        let curr = numbers[i];
        let diff = target - curr;
        let index = numbers.indexOf(diff)
        if (numbers.includes(diff) && i != index) {
            return [i, index]
        }
    }
    return []

}

// CODEWARS SOLUTIONS
// function twoSum(numbers, target) {
//     for (var i = 0; i < numbers.length-1; i++) {
//         for (var j = i+1; j < numbers.length; j++) {
//             if (numbers[i] + numbers[j] === target) return [i, j];
//         }
//     }
// }

// TWO SUM TECHNIQUE
function twoPointers(numbers, target) {
    let left = 0;
    let right = numbers.length - 1;
    numbers = numbers.sort((a, b) => a - b)
    console.log(numbers)
    // while (left < right) {
    //     const curr = numbers[left] + numbers[right];
    //     if (curr < target) {

    //     }
    // }
}
