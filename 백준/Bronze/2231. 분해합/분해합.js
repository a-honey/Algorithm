const fs = require('fs');

const n = Number(fs.readFileSync('/dev/stdin', 'utf8').trim());

let answer = 0;

for (let num = n - 54; num < n; num++){
    const sum = num + String(num).split('').map(Number).reduce((a, b) => a + b, 0);
    if (sum === n){
        answer = num;
        break;
    }
}

console.log(answer);