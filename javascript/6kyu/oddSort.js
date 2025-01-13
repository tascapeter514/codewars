// Task

// You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.
// Examples

// [7, 1]  =>  [1, 7]
// [5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
// [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]


let test = [7, 1];
let testOne = [5, 8, 6, 3, 4];
let testTwo = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0];


// MY SOLUTION
function sortArray(array) {
    let odds = array.filter(el => el % 2 != 0).sort((a, b) => a - b)
    for (let i = 0; i < array.length; i++) {
        let curr = array[i]
        if (curr % 2) {
            array.splice(i, 1, odds.shift())
        }
    }
    return array
  }


//   sortArray(test)
  sortArray(testOne)
  sortArray(testTwo)

//   CODEWARS SOLUTIONS

// function sortArray(array) {
//     const odd = array.filter((x) => x % 2).sort((a,b) => a - b);
//     return array.map((x) => x % 2 ? odd.shift() : x);
//   }
