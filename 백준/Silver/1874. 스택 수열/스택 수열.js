const [n, ...nums] = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n').map(Number);

const result = [];
const answer = [];
let current = 1;
let isAvailable = false;

for (let i = 0; i < n; i++) {
    const target = nums[i];
    
    while (current <= target) {
        result.push(current);
        answer.push('+');
        current++;
    }
    
    if (result[result.length - 1] === target){
        result.pop();
        answer.push('-');
    } else {
        isAvailable = true;
        break;
    }
}

console.log(isAvailable? 'NO':answer.join('\n'));