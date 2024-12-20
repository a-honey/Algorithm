const [a, b, c, d] = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');

const card_count = Number(a);
const cards = b.split(' ').map(Number);
const num_count = Number(c);
const nums = d.split(' ').map(Number);

const store = {};
const answer = [];

cards.forEach((el)=>{
    if (store[el]){
        store[el]++;
    } else {
        store[el]=1;
    }
})

nums.forEach((el)=>{
    if (store[el]){
        answer.push(store[el]);
    } else{
        answer.push(0);
    }
})

console.log(answer.join(' '))