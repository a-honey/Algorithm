const fs = require('fs');

const [a, ...input] = fs.readFileSync('/dev/stdin', 'utf8').trim().split('\n').map(Number);

for (let i = 0; i < a*2; i = i + 2){
    const floor = input[i];
    const issue = input[i+1];

    const array = Array.from({ length: floor + 1 }, () => Array(issue+1).fill(0));

    for (let j = 1; j <= issue; j++) {
        array[0][j] = j;
    }
    
    for (let k = 1; k <= floor; k++){
        for (let n = 1; n <= issue; n++){
            array[k][n] = array[k][n-1] + array[k-1][n];
        }
    }
    console.log(array[floor][issue]);
}