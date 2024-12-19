const fs = require('fs');

const n = Number(fs.readFileSync('/dev/stdin', 'utf8').trim());

let count = 0;
let num = 666;

while(true){
    if (String(num).includes('666')){
        count++;
    }
    
    if (count === n){
        console.log(num);
        break;
    }
    num++;
}