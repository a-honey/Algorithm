const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);

const [H, W, N, M] = input;

const a = Math.ceil(H / (N + 1));
const b = Math.ceil(W / (M + 1));

console.log(a * b);