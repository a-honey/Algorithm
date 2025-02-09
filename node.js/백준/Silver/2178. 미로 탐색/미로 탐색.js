const [NM, ...input] = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');

const [N, M] = NM.split(' ').map(Number);
const graph = input.map(line => line.split('').map(Number));

const ds = [[-1, 0], [1, 0], [0, 1], [0, -1]];

const bfs = () => {
    const queue = [[0, 0, 1]];
    const visited = Array.from({ length: N }, () => Array(M).fill(false));
    visited[0][0] = true;

    while (queue.length) {
        const [current_x, current_y, count] = queue.shift();

        if (current_x === N - 1 && current_y === M - 1) {
            return count;
        }

        for (const [dx, dy] of ds) {
            const next_x = current_x + dx;
            const next_y = current_y + dy;

            if (
                next_x >= 0 && next_x < N &&
                next_y >= 0 && next_y < M &&
                graph[next_x][next_y] === 1 &&
                !visited[next_x][next_y]
            ) {
                visited[next_x][next_y] = true;
                queue.push([next_x, next_y, count + 1]);
            }
        }
    }
    return -1;
};

console.log(bfs());
