const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [n, score, p] = input[0].split(' ').map(Number);
const arr = n !== 0 ? input[1].split(' ').map(Number).sort((a, b) => b - a) : [];

function solution() {
  if (n === 0) return 1;
  
  // 가능한 개수와 현재 개수가 같고, 마지막 요소보다 현재 점수가 작으면 -1
  if (n === p && score <= arr[arr.length - 1]) return -1;
  
  for (let i = 0; i < arr.length; i++) {
    if (score > arr[i]) return i + 1;
    if (score === arr[i] && score === arr[i+1]) return i + 1;
    if (score === arr[i] && score !== arr[i+1]) return i+1;
  }
  
  // 가능한 개수보다 배열이 작으면 배열 마지막에 추가
  return n <= p && p > arr.length ? arr.length + 1 : -1;
}

console.log(solution());