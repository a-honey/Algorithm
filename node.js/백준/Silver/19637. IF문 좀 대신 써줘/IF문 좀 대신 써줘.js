const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [level_count, player_count] = input[0].split(' ').map(Number);

const levels = [];
const results = [];

for (let i = 1; i <= level_count; i++) {
  const [name, value] = input[i].split(' ');
  levels.push({ name, value: Number(value) })
}

for (let i = 1; i <= player_count; i++) {
  const target = Number(input[i+level_count]);

  let left = 0;
  let right = level_count - 1;
  let result = '';

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (levels[mid].value >= target) {
      result = levels[mid].name;
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  results.push(result);
}

console.log(results.join('\n'));