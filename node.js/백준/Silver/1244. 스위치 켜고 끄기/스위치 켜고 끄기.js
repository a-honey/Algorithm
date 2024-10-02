const fs = require('fs');

const [a, b, c, ...player_array] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const switches = b.split(' ').map(Number);

let result = '';

player_array.forEach((player) => {
    const [sex, num] = player.split(' ').map(Number);
    
     if (sex === 1) {
        boy(num, switches);
    } else {
        girl(num, switches);
    }
});

for (let i = 0; i < switches.length; i++) {
    result += switches[i]
    if (i !== switches.length - 1){
      result += ' ';
    }
    if ((i + 1) % 20 === 0) {
        result += '\n';
    }
}

console.log(result);

function toggle(num){
    return num === 1 ? 0 : 1;
}

function boy(num, arr) {
    for (let i = num - 1; i < arr.length; i += num) {
        arr[i] = toggle(arr[i]);
    }
  
}

function girl(num, arr) {
    const for_count = Math.min(arr.length - num, num -1);
    const real_index = num -1;
  
    arr[real_index] = toggle(arr[real_index]);
  
    for (let i = 1; i <= for_count; i++) {
      if (arr[real_index - i] === arr[real_index + i]) {
          arr[real_index - i] = toggle(arr[real_index - i]);
          arr[real_index + i] = toggle(arr[real_index + i]);
      } else {
          break;
      }
    }
}