const fs = require('fs');

const [count, ...input] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const result = [];

input.forEach((row) =>{
    const [num, ...cases] = row.split(' ').map(Number);
    const array = [];
    
    let go_back = 0;
    
    for (let i = 0; i < cases.length; i++) {
        if (array.length === 0) {
            array.push(cases[i]);
            continue;
        }
        
        if (cases[i] > Math.max(...array)) {
            array.push(cases[i]);
            continue;
        }
        
        for (let j = 0; j < array.length; j++ ) {
            if (cases[i] < array[j]){
                array.splice(j, 0, cases[i]);
                go_back += (array.length - j - 1);
                break;
            }
        }
    }
    
    result.push(`${num} ${go_back}`);
})

console.log(result.join('\n'));