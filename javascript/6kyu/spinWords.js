// Write a function that takes in a string of one or more words, and returns the same string, but with all words that have five or more letters reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

// Examples:

// "Hey fellow warriors"  --> "Hey wollef sroirraw" 
// "This is a test        --> "This is a test" 
// "This is another test" --> "This is rehtona test"

let first = "Hey fellow warriors";
let sec = "This is a test"
let third = "This is another test"
let fourth = "You are almost to the last test"



// MY SOLUTION
function spinWords(string){
    let arr = string.split(' ')
    return arr.map(word => word.length >= 5 ? word.split('').reverse().join('') : word).join(' ')
  }

  spinWords(first)

//   CODEWARS SOLUTIONS


// function spinWords(string){
//     return string.replace(/\w{5,}/g, function(w) { return w.split('').reverse().join('') })
//   }

