const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');

const N = Number(input[0]);
const fruits = input[1].split(' ').map(Number);

const count = new Map();
let left = 0; max = 0;

for (let right = 0; right < N; right++){
    count.set(fruits[right], (count.get(fruits[right]) || 0) + 1);
    
    while (count.size > 2){
        count.set(fruits[left], count.get(fruits[left]) - 1);
        if (count.get(fruits[left]) === 0){
            count.delete(fruits[left]);
        }
        left++;
    }
    
    max = Math.max(max, right - left + 1);
}

console.log(max);