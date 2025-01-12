// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.
// Examples

// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))((" 

// Notes

// Assertion messages may be unclear about what they display in some languages. If you read "...It Should encode XXX", the "XXX" is the expected result, not the input!

let testOne  = "recede"; // "()()()"
let testTwo =  "Success" // ")())())"
let testThree = "(( @"  // "))((" 


// MY SOLUTION
function duplicateEncoder(word){
    const hash = {}
    let split = word.toLowerCase().split('')
    split.forEach(c => hash[c] ? hash[c]+= 1 : hash[c] = 1)
    let result = split.map(c => hash[c] > 1 ? c = ')' : "(" )
    return result.join('')
}
console.log(duplicateEncoder(testThree))

// CODEWARS SOLUTIONS

// function duplicateEncode(word){
//     return word
//       .toLowerCase()
//       .split('')
//       .map( function (a, i, w) {
//         return w.indexOf(a) == w.lastIndexOf(a) ? '(' : ')'
//       })
//       .join('');
//   }
