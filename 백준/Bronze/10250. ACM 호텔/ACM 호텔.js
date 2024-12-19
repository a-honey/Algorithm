const fs = require('fs');

const [n, ...input] = fs.readFileSync('/dev/stdin', 'utf8').trim().split('\n');

for (let i = 0; i < Number(n); i++){
    const [a, b, c] = input[i].split(' ').map(Number);
    if (c%a === 0){
        console.log(a*100 + Math.floor(c/a))
        continue;
    }
    console.log(c%a*100 + Math.floor(c/a)+1);
}