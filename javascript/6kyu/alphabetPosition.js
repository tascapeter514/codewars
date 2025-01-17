// Welcome.

// In this kata you are required to, given a string, replace every letter with its position in the alphabet.

// If anything in the text isn't a letter, ignore it and don't return it.

// "a" = 1, "b" = 2, etc.
// Example

// Input = "The sunset sets at twelve o' clock."
// Output = "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11"


let testOne = "The sunset sets at twelve o' clock."
let testTwo = "The narwhal bacons at midnight."



// MY SOLUTION
function alphabetPosition(text) {
    const hash = {};
    let currChar = 1
    for (let i = 97; i <= 122; i++) {
        const char = String.fromCharCode(i);
        hash[char] = currChar
        currChar++
    }
    let result = text.toLowerCase().split('').filter(el => {
        if (hash[el]) {
            return el
        }
    }).map(el => el = hash[el]).join(' ')
    return result

  }


//   CODEWARS SOLUTION
  let alphabetPosition = (text) => text.toUpperCase().replace(/[^A-Z]/g, '').split('').map(ch => ch.charCodeAt(0) - 64).join(' ');