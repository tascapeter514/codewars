// Create a parser to interpret and execute the Deadfish language.

// Deadfish operates on a single value in memory, which is initially set to 0.

// It uses four single-character commands:

//     i: Increment the value
//     d: Decrement the value
//     s: Square the value
//     o: Output the value to a result array

// All other instructions are no-ops and have no effect.
// Examples

// Program "iiisdoso" should return numbers [8, 64].
// Program "iiisdosodddddiso" should return numbers [8, 64, 3600].

let inputOne = "iiisdoso" //[8, 64]
let inputTwo = "iiisdosodddddiso" //[8, 64, 3600]


//iterative solution
function parse( data ){
  let output = [];
  let value = 0;
  let split = data.split('')
  for (el of split) {
    if (el === 'i') {
        value++
        console.log(value)
    } else if (el === 'd') {
        value--
    } else if (el === 's') {
        value **= 2
        console.log(value)
    } else if (el === 'o') {
        output.push(value)
    } else {
        continue
    }

  }
  return output

  }

  



console.log(parse(inputOne))
console.log(parse(inputTwo))