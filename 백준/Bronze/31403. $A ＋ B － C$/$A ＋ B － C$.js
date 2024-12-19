const fs = require('fs');

const [a,b,c] = fs.readFileSync('/dev/stdin', 'utf8').trim().split('\n').map(Number);

console.log(a+b-c);
console.log(Number(`${a}${b}`)-c);