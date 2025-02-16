const [a, ...input] = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');

const [n, m] = a.split(' ').map(Number);
const campus = input.map((row) => row.split(''));

const directions = [[1, 0], [-1, 0], [0, -1], [0, 1]];

let count = 0;
let start_x, start_y;

for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
        if (campus[i][j] === "I") {
            start_x = i;
            start_y = j;
        }
    }
}

const queue = [[start_x, start_y]];
const visited = Array.from({ length: n }, () => Array(m).fill(false));
visited[start_x][start_y] = true;

while (queue.length > 0) {
    const [x, y] = queue.shift();
    
    for (const [dx, dy] of directions) {
        const nx = x + dx;
        const ny = y + dy;
        
        if (nx >= 0 && ny >= 0 && nx < n && ny < m && !visited[nx][ny]) {
            if (campus[nx][ny] !== "X") {
                visited[nx][ny] = true;
                queue.push([nx, ny]);
                if (campus[nx][ny] === "P") {
                    count++;
                }
            }
        }
    }
}

console.log(count > 0 ? count : "TT");