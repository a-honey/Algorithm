const fs = require('fs');

const nums = fs.readFileSync('/dev/stdin', 'utf8').trim().split(' ').map(Number);

let sum = 0;

nums.forEach((el)=>{sum += el * el});

console.log(sum % 10);