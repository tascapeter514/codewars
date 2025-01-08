// Count the number of Duplicates

// Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.
// Example

// "abcde" -> 0 # no characters repeats more than once
// "aabbcde" -> 2 # 'a' and 'b'
// "aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
// "indivisibility" -> 1 # 'i' occurs six times
// "Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
// "aA11" -> 2 # 'a' and '1'
// "ABBA" -> 2 # 'A' and 'B' each occur twice


// MY SOLUTION

function duplicateCount(text){
    let hash = {}
    let result = []
    for (t of text.toLowerCase()) {
        hash[t] = hash[t] + 1 || 1
    }
    for (const [key, value] of Object.entries(hash)) {
        if (value > 1) {
            result.push(key)
        }
    }
    return result.length
    
  }

  test = "indivisibility"
  testTWo = "abcde"
  testThree = "Indivisibilities"
  testFour = "aabBcde"
  



//   CODEWARS SOLUTION
// TWO POINTER TECHNIQUE?
// function duplicateCount(text){
//     return text.toLowerCase().split('').filter(function(val, i, arr){
        // SEES IF FIRST OCCURRENCE OF VALUE IS UNEQUAL TO CURRENT INDEX
        // WHILE CHECKING FOR LAST OCCURRENCE OF VALUE
        // IF THERE'S ONLY ONE NUMBER THEN BOTH LAST OCCURRENCE AND FIRST OCCURRENCE
        // WILL EQUAL THE CURRENT INDEX. IF DUPLICATE THOSE TWO VALUES WILL BE UNEQUAL
        // SINCE THERE'S TWO VALUES
//       return arr.indexOf(val) !== i && arr.lastIndexOf(val) === i;
//     }).length;
//   }



  duplicateCount(testFour)
