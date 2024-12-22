const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');

const count = Number(input[0]);
const nums = input[1].split(' ').map(Number).sort((a,b)=> a - b);

let sum = 0;

for (let i = 0; i < count; i++){
    sum += nums[i] * (count - i);
}

console.log(sum);