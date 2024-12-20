const fs = require('fs');

const input = fs.readFileSync('/dev/stdin', 'utf8').trim().split('\n');

let target;

for (let i = 0; i < 3; i++){
    const num = Number(input[i]);
    if (!isNaN(num)) {
        target = num + 3 - i;
        break;
    }
}

if (target%3 === 0){
    if (target%5 !== 0){
        console.log('Fizz');
    } else {
        console.log('FizzBuzz');
    }
} else {
    if (target%5 === 0){
        console.log('Buzz');
    } else {
        console.log(target);    
    }
}