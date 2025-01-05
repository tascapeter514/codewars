function rowSumOddNumbers(n) {
    if (n === 1) return n;
    let count = 1;
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        for (let j = 0; j <= i; j++) {
            if (i === n - 1) {
                console.log('row check')
                count += 2
                sum += count
            } else {
                count += 2
            }
            
        }
    }
    return sum
}


console.log(rowSumOddNumbers(1))
