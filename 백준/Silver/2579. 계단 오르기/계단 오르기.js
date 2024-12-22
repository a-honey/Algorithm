const [n, ...stairs]=require('fs').readFileSync('/dev/stdin','utf8').trim().split('\n').map(Number);

const dp = Array(n).fill(0);

dp[0] = stairs[0];

if (n > 1){
    dp[1] = stairs[0] + stairs[1];
}

if (n > 2) {
    dp[2] = Math.max(stairs[0] + stairs[2], stairs[1] + stairs[2]);
}

for (let i = 3; i < n; i++){
    dp[i] = Math.max(dp[i-2]+stairs[i], dp[i-3]+stairs[i-1]+stairs[i]);
}

console.log(dp[n-1]);