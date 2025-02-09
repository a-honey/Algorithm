const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim();

const nums = input.split('-');

const result = nums.reduce((acc, cur, idx) => {
    const sum = cur.split('+').reduce((a, b) => a + Number(b), 0);
    return idx === 0? sum : acc - sum;
}, 0);

console.log(result);