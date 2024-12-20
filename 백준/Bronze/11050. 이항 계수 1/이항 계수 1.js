const fs = require('fs');

const [n, k] = fs.readFileSync('/dev/stdin', 'utf8').trim().split(' ').map(Number);

function factorial(n){
    let result = 1;
    for (let i = 1; i <= n; i++){
        result *= i;
    }
    return result;
}

console.log(factorial(n)/(factorial(k)*factorial(n - k )));