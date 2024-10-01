const fs = require('fs');

const [n, m] = fs.readFileSync('/dev/stdin').toString().trim().split(" ").map(Number);

let currentLeafCount = 0;

if (m === 2) {
  for (let i = 0; i < n -1; i++) {
    console.log(i, i+1);
  }
} else {
  console.log("0 1");
  for (let i = 2; i <= m ; i++) {
    console.log(1, i);
  }
  for (let i = m; i < n - 1; i++) {
    console.log(i, i+1);
  }
}