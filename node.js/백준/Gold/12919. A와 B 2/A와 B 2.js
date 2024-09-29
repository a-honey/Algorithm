const fs = require('fs');

const [S, T] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const answer = dfs(S, T);

console.log(answer);

function dfs(S, T) {
    if (S === T) {
        return 1;
    }
    
    if (T.length === 0) return 0;
    
    
    let result = 0;
    
    if (T[T.length - 1] === "A") {
        result = dfs(S, T.slice(0, T.length - 1));
    }
  
    if (T[0] === "B") {
        result = result || dfs(S, [...T.slice(1)].reverse().join(""));
    }

    return result;
}