const [n, ...input] = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');

const answer = [];
let result = [];

for (let i = 0; i < Number(n); i++){
    switch(input[i]){
        case "pop":
            if (answer.length === 0){
                result.push(-1);
                break;
            }
            const first = answer.shift();
            result.push(first);
            break;
        case "size":
            result.push(answer.length);
            break;
        case "empty":
            result.push(answer.length === 0? 1:0);
            break;
        case "front":
            if (answer.length === 0){
                result.push(-1);
            } else {
                result.push(answer[0]);
            }
            break;
        case "back":
            if (answer.length === 0){
                result.push(-1);
            } else {
                result.push(answer[answer.length - 1]);
            }
            break;
        default:
            const num = input[i].split(' ')[1];
            answer.push(num);
            break;
    }
}

console.log(result.join('\n'));