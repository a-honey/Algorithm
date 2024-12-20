const [n, ...input] = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');

const result = [];

for (let i = 0; i < input.length; i += 2){
    const [doc_count, index] = input[i].split(' ').map(Number);
    const nums = input[i+1].split(' ').map((el,index)=>({index, priority: Number(el)}));
    let order = 0;
    
    while(nums.length > 0){
        const current = nums.shift();
        
        if (nums.some(doc => doc.priority > current.priority)){
            nums.push(current);
        } else {
            order++;
            if (current.index === index){
                result.push(order);
                break;
            }
        }
    }
}

console.log(result.join('\n'));