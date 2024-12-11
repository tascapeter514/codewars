// Description:

// Given an array of integers.

// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

// If the input is an empty array or is null, return an empty array.
// Example

// For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].





function countPositivesSumNegatives(input) {
    if (!input || input.length < 1) return [];
    const posCount = input.filter((a) => a > 0).length
    const negSum = input.filter((b) => b < 0).reduce((sum, int) => sum + int, 0)
    console.log(posCount, negSum)
    return [posCount, negSum]
  }