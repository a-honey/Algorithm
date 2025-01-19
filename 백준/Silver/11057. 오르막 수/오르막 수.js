const n = Number(require('fs').readFileSync('/dev/stdin', 'utf8').trim());

const MOD = 10007;

const dp = Array.from({ length: n + 1}, ()=>Array(10).fill(0));

for (let j = 0; j <= 9; j++){
    dp[1][j] = 1;
}

for (let i = 2; i <= n; i++) {
  for (let j = 0; j <= 9; j++) {
    dp[i][j] = dp[i][j - 1] || 0;
    dp[i][j] += dp[i - 1][j];
    dp[i][j] %= MOD;
  }
}

const result = dp[n].reduce((sum, value) => (sum + value) % MOD, 0);
console.log(result);