const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');

for (let line of input){
    if (line === '.') break;
    
    const stack = [];
    let isBalance = true;
    for (let char of line){
        if (char === '(' || char === '['){
            stack.push(char);
        } else if (char === ']' || char === ')'){
            if (stack.length === 0){
                isBalance = false;
                break;
            }
            const last = stack.pop();
            if ((char === ')' && last !== '(') || (char === ']' && last !== '[')){
                isBalance = false;
                break;
            }
        }
    }
    if (stack.length > 0){
        isBalance = false;
    }
    
    console.log(isBalance? 'yes': 'no')
}