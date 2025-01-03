// Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.
// Example

// createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"

// The returned format must be correct in order to complete this challenge.

// Don't forget the space after the closing parentheses!


let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

function createPhoneNumber(nums) {
    let areaCode = "(" + numbers.splice(0, 3).join('') + ") ";
    console.log(areaCode, nums)
    let phoneNumber = areaCode + numbers.splice(0, 3).join('') + "-" + numbers.splice(0, 3).join('')
    console.log(phoneNumber)
    return phoneNumber
}


// function createPhoneNumber(nums) {
//     let format = '(xxx) xxx-xxxx';

//     for (let i = 0; i < nums.length; i++) {
//         format = format.replace('x', numbers[i])
//     }

//     return format
// }

console.log(createPhoneNumber(numbers))

