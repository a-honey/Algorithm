const fs = require('fs');

const [num, ...input] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const result = [];

input.forEach((row) => {
    const arr = row.split(' ').map(Number).sort((a, b) => b - a);
    
    result.push(arr[2]);
})

console.log(result.join('\n'));