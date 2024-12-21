const [a, ...input] = require('fs').readFileSync("/dev/stdin", 'utf8').trim().split('\n');

const [currentCount, targetCount] = a.split(' ').map(Number);
const lines = input.map(Number);

let left = 1;
let right = Math.max(...lines);
let answer;

while (left <= right){
    let count = 0;
    
    const mid = Math.floor((left + right)/2);
    
    for (const line of lines){
        count += Math.floor(line / mid);
    }
    
    if (count >= targetCount){
        answer = mid;
        left = mid + 1;
    } else {
        right = mid - 1;
    }
}

console.log(answer);