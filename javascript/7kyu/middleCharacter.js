// You are going to be given a non-empty string. Your job is to return the middle character(s) of the string.

//     If the string's length is odd, return the middle character.
//     If the string's length is even, return the middle 2 characters.

// Examples:

// "test" --> "es"
// "testing" --> "t"
// "middle" --> "dd"
// "A" --> "A"

let one = 'test';
let two = 'middle'
let three = 'testing'
let four = "A"


// my solution TWO POINTER TECHNIQUE
function getMiddle(s) {
    let arr = s.split('');
    let l = 0;
    let r = arr.length - 1;
    while (l < r) {
        l++, r--
    }
    let m = r === l ? arr[r] : [arr[r], arr[l]].join("");
    return m
}

getMiddle(four)

// CODEWARS SOLUTIONS FOR STUDY

// function getMiddle(s)
// {
//   return s.substr(Math.ceil(s.length / 2 - 1), s.length % 2 === 0 ? 2 : 1);
// }

// function getMiddle(s) {
//     var middle = s.length / 2;
//     return (s.length % 2) 
//       ? s.charAt(Math.floor(middle))
//       : s.slice(middle - 1, middle + 1);
//   }

// function getMiddle(s)
// {
//   return s.slice((s.length-1)/2, s.length/2+1);
// }