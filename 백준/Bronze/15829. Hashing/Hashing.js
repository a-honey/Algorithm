const fs = require('fs');

const [length, word] = fs.readFileSync('/dev/stdin', 'utf8').trim().split('\n');
let sum = 0;
let now = 1;

for (let i = 0; i < Number(length); i++){
    const code = word[i].charCodeAt(0) - 'a'.charCodeAt(0) + 1
    sum = (sum + now *code)%1234567891;
    now = now * 31%1234567891
}

console.log(sum);