const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [day_count, term] = input[0].split(' ').map(Number);
const days = input[1].split(' ').map(Number);

if (Math.max(...days) === 0) {
    console.log("SAD");
} else {
    let li_num = days.slice(0, term).reduce((acc, cur) => acc + cur, 0);
    let value = li_num;
    let cnt = 1;
    
    for (let i = term; i < day_count; i++) {
        value = value - days[i - term] + days[i];
        
        if (value > li_num) {
            li_num = value;
            cnt = 1;
        } else if (value === li_num){
            cnt++;
        }
    }
    
    console.log(li_num);
    console.log(cnt);
}