const [n, ...array] = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n').map(Number);

const answer = [];

const zero = [1, 0, 1];
const one = [0, 1, 1];

for (const num of array){
    while (zero.length <= num){
        zero.push(zero[zero.length -1 ]+zero[ zero.length - 2 ]);
        one.push(one[one.length-1]+one[one.length-2]);
    }
    answer.push(`${zero[num]} ${one[num]}`);
}

console.log(answer.join('\n'));