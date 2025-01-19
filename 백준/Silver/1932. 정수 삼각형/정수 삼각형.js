const [input_num, ...input] = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const n = Number(input_num);
const triangle = input.map((a) => a.split(' ').map(Number));

let dp = Array(n).fill(0);
dp[0] = triangle[0][0];

for (let i = 1; i < n; i++) {
  const next = Array(n).fill(0);
  for (let j = 0; j <= i; j++) {
    if (j === 0) {
      next[j] = dp[j] + triangle[i][j];
    } else if (j === i) {
      next[j] = dp[j - 1] + triangle[i][j];
    } else {
      next[j] = Math.max(dp[j - 1], dp[j]) + triangle[i][j];
    }
  }
  dp = next; 
}

console.log(Math.max(...dp));