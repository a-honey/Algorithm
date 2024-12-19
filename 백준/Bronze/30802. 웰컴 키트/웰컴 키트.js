const fs = require('fs');

const [t, size, bundle] = fs.readFileSync('/dev/stdin', 'utf8').trim().split('\n');

const [t_bundle, pen_bundle] = bundle.split(' ').map(Number);

let t_count = 0;

size.split(' ').map(Number).forEach((el)=>{
    t_count += Math.ceil(el/t_bundle);
})

console.log(t_count);
console.log(Math.floor(Number(t)/pen_bundle), Number(t)%pen_bundle );