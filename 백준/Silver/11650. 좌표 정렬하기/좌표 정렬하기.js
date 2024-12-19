const fs = require('fs');

const [n, ...input] = fs.readFileSync('/dev/stdin', 'utf8').trim().split('\n');

const array = input.map((el)=>{
    const [x, y] = el.split(' ').map(Number);
    return {x, y};
});

array.sort((a, b) => {
    if (a.x === b.x){
        return a.y - b.y;
    }
    return a.x - b.x;
});

array.forEach((el)=>{
    console.log(el.x, el.y);
})