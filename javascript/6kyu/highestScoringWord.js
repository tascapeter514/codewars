// Given a string of words, you need to find the highest scoring word.

// Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

// For example, the score of abad is 8 (1 + 2 + 1 + 4).

// You need to return the highest scoring word as a string.

// If two words score the same, return the word that appears earliest in the original string.

// All letters will be lowercase and all inputs will be valid.

let testOne = 'man i need a taxi up to ubud'; //taxi
let testTwo = 'what time are we climbing up the volcano'; //volcano
let testThree = 'take me to semynak' //semynak


// MY SOLUTION
function high(x) {
    const letterHash = {};
    let index = 1;
    for (let i = 97; i <= 122; i++) {
        const currLetter = String.fromCharCode(i)
        letterHash[currLetter] = index
        index++
    }
    const wordHash = {}
    const counts = []
    const words = x.split(' ').forEach(word => {
        let count = 0;
        word.split('').forEach(letter => count += letterHash[letter]);
        wordHash[word] = count
        counts.push(count)
    })
    const score = counts.reduce((acc, curr) => acc > curr ? acc : acc = curr)
    for (const word in wordHash) {
        if (wordHash[word] === score) {
            return word
        }
    }
}

// CODEWARS SOLUTIONS

function high(s) {
    let as = s.split(' ').map(s=>[...s].reduce((a,b)=>a+b.charCodeAt(0)-96,0));
    return s.split(' ')[as.indexOf(Math.max(...as))];
    
}