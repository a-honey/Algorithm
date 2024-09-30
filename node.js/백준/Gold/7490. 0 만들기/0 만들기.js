const fs = require('fs');

const [a, ...input] = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);

let answer = '';

input.forEach((n, index) => {
    const results = [];
    dfs(n, 1, '1', results);
    results.forEach((el) => { 
      answer += el;
      answer += '\n';
    });
      if (index !== input.length - 1) {
        answer+= '\n';
    }
});

console.log(answer);

function dfs (n, index, expression, array) {
    if (index === n) {
        const temp = expression;
        const result = eval(expression.replace(/ /g, ''));
        
        if (result === 0) {
            array.push(temp);
        }
    } else {
        const next = index + 1;
        
        dfs(n, next, expression + ' ' + next, array);
        dfs(n, next, expression + '+' + next, array);
        dfs(n, next, expression + '-' + next, array);
    }
}