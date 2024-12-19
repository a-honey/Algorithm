const fs = require('fs');

const [a, b] = fs.readFileSync('/dev/stdin', 'utf8').trim().split('\n');

const [N, M] = a.split(' ').map(Number);
const cards = b.split(' ').map(Number);

let max = 0;

for (let i =0; i < N-2; i++){
    for (let j = i+1; j<N-1; j++){
        for (let k = j+1; k < N; k++){
            const sum = cards[i] + cards[j] + cards[k];
            if (sum <= M && sum > max){
                max = sum;
            }
        }
    }
}

console.log(max);