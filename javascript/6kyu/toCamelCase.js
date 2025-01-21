// Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case). The next words should be always capitalized.
// Examples

// "the-stealth-warrior" gets converted to "theStealthWarrior"

// "The_Stealth_Warrior" gets converted to "TheStealthWarrior"

// "The_Stealth-Warrior" gets converted to "TheStealthWarrior"

let text = "the-stealth-warrior";
let secondText = "The_Stealth-Warrior";
let moreText = "A-B-C";



// MY SOLUTION
function toCamelCase(str){
    const words = str.split(/[- || _]/)
    return words.map((word, index) => {
        return index > 0 && word[0].charCodeAt() > 95 ? word[0].toUpperCase() + word.slice(1) : word
    }).join('')

    
}

toCamelCase(secondText)

// CODEWARS SOLUTION

// function toCamelCase(str){
//     var regExp=/[-_]\w/ig;
//     return str.replace(regExp,function(match){
//           return match.charAt(1).toUpperCase();
//      });
// }