// There is an array with some numbers. All numbers are equal except for one. Try to find it!

// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55

// It’s guaranteed that array contains at least 3 numbers.

// The tests contain some very huge arrays, so think about performance.

// This is the first kata in series:

//     Find the unique number (this kata)
//     Find the unique string
//     Find The Unique

const firstTest = [ 1, 0, 0 ]; // 1
const secTest = [ 0, 1, 0 ]; // 1
const thirdTest = [ 0, 0, 1 ];
const fourthTest = [ 1, 1, 1, 2, 1, 1 ]; // 2
const fithTest = [ 1, 1, 2, 1, 1 ]; // 2
const sixthTest = [ 3, 10, 3, 3, 3 ]; // 10



// MY SOLUTION
function findUniq(arr) {

    let [result] = arr.filter((num) => arr.indexOf(num) == arr.lastIndexOf(num))
    return result
  }

findUniq(firstTest) // 1
findUniq(secTest) // 1
findUniq(thirdTest) // 1
findUniq(fourthTest) // 2
findUniq(fithTest) // 2
findUniq(sixthTest) // 10
