// ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

// If the function is passed a valid PIN string, return true, else return false.
// Examples (Input --> Output)

// "1234"   -->  true
// "12345"  -->  false
// "a234"   -->  false



id = '-1.234'
nextId = "a234" 
zeroPIN = '0000'

function validatePIN (pin) {
    console.log(pin, parseInt(pin), pin.length)
    let splitDigits = pin.split('')
    if (splitDigits.length === 4 || splitDigits.length === 6) {
        return splitDigits.map(splitDigit => parseInt(splitDigit)).includes(NaN) ? false : true
        // console.log("numCheck:", splitDigits.map(splitDigit => parseInt(splitDigit)).includes(NaN))

    } else {
        return false
    }
  }

console.log(validatePIN(nextId))
console.log(validatePIN(id))
console.log(validatePIN(zeroPIN))


// if (parseInt(pin) < 0 || !parseInt(pin)) {
//     return false
//   } else if (pin.length === 4 || pin.length === 6) {
//     return true
//   }


  