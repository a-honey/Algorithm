const n = Number(require('fs').readFileSync('/dev/stdin', 'utf8').trim());

function isSquare(n){
    return Number.isInteger(Math.sqrt(n));
}

function solve(n){
    if (isSquare(n)) return 1;
    
    for (let i = 1; i * i <= n; i++){
        if (isSquare(n - i*i)) return 2;
    }
    
    for (let i = 1; i * i <= n; i++){
        for (let j = 1; j * j <= n - i* i; j++){
            if (isSquare(n - i*i - j*j)) return 3;
        }
    }
    
    return 4;
}

console.log(solve(n));