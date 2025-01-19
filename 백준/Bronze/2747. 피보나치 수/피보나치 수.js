const n = Number(require('fs').readFileSync('/dev/stdin', 'utf8').trim());

function fibonacci(num){
    if (num === 0) return 0;
    if (num === 1) return 1;
    
    let prev = 0;
    let curr = 1;
    
    for (let i = 2; i <= num; i++){
        const next = prev + curr;
        prev = curr;
        curr = next;
    }
    
    return curr;
}

const a = fibonacci(n);
console.log(a);