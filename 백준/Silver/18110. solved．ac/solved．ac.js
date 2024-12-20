const [n, ...input] = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n').map(Number);

if (n === 0) {
    console.log(0);
} else {
    const point = Math.round(n*15/100);

    const array = input.sort((a, b) => a - b);

    let sum = 0;

    for (let i = point; i < n -point; i++){
        sum += array[i];
    }

    console.log(Math.round(sum/(n-point*2)));
}