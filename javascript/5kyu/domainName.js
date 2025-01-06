


// CODEWAR INSTRUCTIONS
// Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

// * url = "http://github.com/carbonfive/raygun" -> domain name = "github"
// * url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
// * url = "https://www.cnet.com"                -> domain name = cnet"
let test = '8polg-2-ov4ennhxfczhv9bkq30.tv/default.html'
let firstUrl = "http://github.com/carbonfive/raygun"
let secUrl = "http://www.zombie-bites.com" 
let thirdUrl = "https://www.cnet.com"  


// MY SOLUTION
// function domainName(url) {
//     let w = url.includes('www')
//     let http = url.startsWith('http')
//     if (w) {
//         let f = url.split('www.')[1]
//         console.log('f', f)
//         let s = f.split('.')[0]
//         console.log('s:', s)
//         return s
//     } else if (!http) {
//         let r = url.split('.')[0]
//         console.log('r:', r)
//         return r

//     } else {
//         let h = url.split('//')[1]
//         console.log('h:', h)
//         let c = h.split('.')[0]
//         console.log('c:', c)
//         return c
//     }

// }





// CODEWARS SOLUTION

function domainName(url) {
    url = url.replace('https://', '')
    console.log('first url:', url)
    url = url.replace('http://', '')
    console.log('second url:', url)
    url = url.replace('www.', '')
    console.log('third url:', url)
    console.log(url.split('.')[0])
}


domainName(firstUrl)
domainName(secUrl)
domainName(thirdUrl)


domainName(test)




