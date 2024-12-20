const fs = require('fs');

const [length, word] = fs.readFileSync('/dev/stdin', 'utf8').trim().split('\n');
let sum = 0;

for (let i = 0; i < Number(length); i++){
    const code = word[i].charCodeAt(0) - 'a'.charCodeAt(0) + 1
    sum += Math.pow(31, i)*code;
}

console.log(sum);