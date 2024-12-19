const fs = require('fs');

const n = Number(fs.readFileSync('/dev/stdin','utf8').trim());

let count = 0;
let divisor = 5;

while (n >= divisor) {
    count += Math.floor(n / divisor);
    divisor *= 5;
}

console.log(count);

