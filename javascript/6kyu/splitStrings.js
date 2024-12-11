// Description:

// Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

// Examples:

// * 'abc' =>  ['ab', 'c_']
// * 'abcdef' => ['ab', 'cd', 'ef']




function solution(str){
    let letters = str.split('')
    let splitStrings = []
    for (let i = 0; i < letters.length; i++) {
      let currLetter = letters[i]
      if (i % 2 != 0) {
        let join = letters[i-1] + currLetter
        splitStrings.push(join)
      } else if (i === letters.length - 1) {
        console.log("final:", currLetter)
        currLetter += '_'
        console.log(currLetter)
        splitStrings.push(currLetter)
      }
    }
    console.log(splitStrings)
    return splitStrings
  
     
  }