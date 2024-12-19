const fs = require('fs');

const [word, i] = fs.readFileSync('/dev/stdin', 'utf8').trim().split('\n');

console.log(word[Number(i) - 1]);