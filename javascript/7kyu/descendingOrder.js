// Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.
// Examples:

// Input: 42145 Output: 54421

// Input: 145263 Output: 654321

// Input: 123456789 Output: 987654321

const firstInput = 42145
const secondInput = 145263
const thirdInput = 123456789

function descendingOrder(sampleInput) {
    let str = sampleInput.toString()
    let digits = str.split("")
    digits.sort((a, b) => b - a)
    const output = digits.join('')
    return output
    
  

}

const firstOutput = descendingOrder(firstInput)
const secOutput = descendingOrder(secondInput)
const thirdOutput = descendingOrder(thirdInput)
console.log(firstOutput, secOutput, thirdOutput)
