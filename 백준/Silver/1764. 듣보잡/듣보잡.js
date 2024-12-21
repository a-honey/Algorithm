const input = require('fs').readFileSync('/dev/stdin','utf8').trim().split('\n');
const [nolisteners_count, noVisivals_count] = input[0].split(' ').map(Number);

const nolisteners = input.slice(1, nolisteners_count+1);
const noVisibals = new Set(input.slice(nolisteners_count + 1));

const answer = nolisteners.filter(person => noVisibals.has(person)).sort();

console.log(answer.length);
console.log(answer.join('\n'));