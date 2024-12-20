const fs = require('fs');

const input = fs.readFileSync('/dev/stdin', 'utf8').trim().split('\n');

const array = input.slice(0, input.length-1).map((el) => el.split(' ').map(Number));

array.forEach((el) => {
    const [a, b, c] = el.sort((p, q) => p - q);
    if (a*a + b*b === c*c){
        console.log('right');
    } else {
        console.log('wrong');
    }
});