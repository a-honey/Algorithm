const [n, ...input] = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');

const array = input.map((el)=>el.split(' ').map(Number));

const sorted = array.sort((a, b) => {
    if (a[1] === b[1]){
        return a[0] - b[0];
    }
    return a[1] - b[1]
});

console.log(sorted.map((el)=>el.join(' ')).join('\n'));