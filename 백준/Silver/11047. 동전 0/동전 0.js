const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');

const [coin_count, money] = input[0].split(' ').map(Number);

const array = input.slice(1).map(Number);

let target = money;
let count = 0;

for (let i = array.length -1; i >= 0; i--){
    const current = array[i];

    if (current > target){
        continue;
    }
    
    const n = Math.floor(target/current);
    count += n;
    target -= current*n;
    
    if (target === 0){
        break;
    }
}

console.log(count);