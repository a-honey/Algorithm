const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

// 반환값을 할당하면 안됨
input.pop();

const answer = [];

input.forEach((row)=>{
    const array = row.split(' ').map(Number);
    const sorted_array = array.sort((a, b) => a - b);
    
    const [a, b, c] = sorted_array;
    
    if (a + b <= c){
        answer.push('Invalid');
        return; 
    }
    
    if (a === b && b === c) {
        answer.push('Equilateral');
        return; 
    }
    if (a === b || b === c || a === c) {
        answer.push('Isosceles');
        return; 
    }
    
    answer.push('Scalene');
    return;
});

console.log(answer.join('\n'))