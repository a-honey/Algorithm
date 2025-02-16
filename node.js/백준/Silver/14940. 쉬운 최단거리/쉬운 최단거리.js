const [num, ...input] = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');

const [n, m] = num.split(' ').map(Number);

const graph = input.map((row) => row.split(' ').map(Number));

const dx = [1, -1, 0, 0];
const dy = [0, 0, 1, -1];

const map = Array.from({ length: n }, () => Array(m).fill(0));
let queue = [];

for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
        if (graph[i][j] === 2) {
            queue.push([i, j]);
            map[i][j] = 0;
        } else if (graph[i][j] === 1) {
            map[i][j] = -1;
        }
    }
}

let index = 0;

while (index < queue.length) {
    const [x, y] = queue[index++];

    for (let i = 0; i < 4; i++) {
        const nx = x + dx[i];
        const ny = y + dy[i];

        if (nx >= 0 && nx < n && ny >= 0 && ny < m) {
            if (graph[nx][ny] === 1 && map[nx][ny] === -1) {
                map[nx][ny] = map[x][y] + 1;
                queue.push([nx, ny]);
            }
        }
    }
}

console.log(map.map(row => row.join(" ")).join("\n"));