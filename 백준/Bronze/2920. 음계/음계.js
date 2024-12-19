const fs = require('fs');

const array = fs.readFileSync('/dev/stdin', 'utf8').trim().split(' ').map(Number);

let ascending = true;
let descending = true;

for (let i = 1; i < array.length; i++){
    if (array[i] > array[i-1]) descending = false;
    if (array[i] < array[i-1]) ascending = false;
}

if (ascending){
    console.log('ascending');
} else if (descending){
    console.log('descending');
} else {
    console.log('mixed')
}