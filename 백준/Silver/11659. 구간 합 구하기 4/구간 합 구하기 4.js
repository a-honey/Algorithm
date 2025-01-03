const [a, array, ...range] = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n').map((a)=>a.split(' ').map(Number));

const sum = [0];

for (let i = 0; i < array.length; i++){
  sum.push(sum[i] + array[i]);
}

const answer = range.map(([i, j]) => sum[j] - sum[i-1]);

console.log(answer.join('\n'));