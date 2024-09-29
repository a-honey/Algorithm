const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().trim();

const result = [];
const size = (input.match(/a/g) || []).length;

for (let i =0; i < input.length; i++) {
    let b_count = 0;
    
    for (let j = 0; j < size; j++) {
        let index = i + j;
        if (index >= input.length) index -= input.length;
        
        if (input[index] === 'b') b_count++;
    }
    
    result.push(b_count);
}

console.log(Math.min(...result));