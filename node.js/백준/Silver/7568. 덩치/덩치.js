const fs = require('fs');

const [player_count, ...arr] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const players = arr.map((row) => row.split(' ').map(Number));


const result = [];

for (let i = 0; i < players.length; i++) {
  const current_player = players[i];
  let count = 0;
  for (let j = 0; j < players.length; j++) {
    if (i !== j) {
       if (check(current_player, players[j])) {
        count++;
      }
    }
  }
  result.push(count+1);
}

function check(x, y) {
  if (x[0] < y[0] && x[1] < y[1]) {
    return true;
  }
  return false;
};

console.log(result.join(' ')); 