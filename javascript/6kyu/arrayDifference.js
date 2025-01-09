// Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

// It should remove all values from list a, which are present in list b keeping their order.

// arrayDiff([1,2],[1]) == [2]

// If a value is present in b, all of its occurrences must be removed from the other:

// arrayDiff([1,2,2,2,3],[2]) == [1,3]

const first = [1,2,2,2,3]
const sec = [2]
const three = [1,2,3]
const four = [1,2]
const five = [5, 6, 7, 8, 9]
const six = [7, 8]
const seven = [1,2,2]
const eight = [2]
const test = []
const testOne = [1,2]





// MY SOLUTION

function arrayDiff(a, b) {
    for (let i of b) {
        a = a.filter(curr => i!= curr)
    }
    return a  
}

// CODEWARS SOLUTION

// function array_diff(a, b) {
//     a.filter(e => !b.includes(e))
// }






