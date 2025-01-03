const num = Number(require('fs').readFileSync('/dev/stdin', 'utf8').trim());

const dp = new Array(num + 1).fill(0);

dp[1] = 1;
if (num > 1) dp[2] = 2;

for (let i = 3; i <= num; i++){
    dp[i] = (dp[i - 1] + dp[i - 2])%10007;
}

console.log(dp[num]);