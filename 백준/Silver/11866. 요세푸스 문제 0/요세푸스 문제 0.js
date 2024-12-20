const [num, index] = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split(' ').map(Number);

const array = Array.from({length: num}, (_, i) => i+1);
const result = [];
let i = 0;

while(result.length !== num){
    i = (i + index - 1)% array.length;
    result.push(array.splice(i, 1)[0]);
}

console.log(`<${result.join(', ')}>`);