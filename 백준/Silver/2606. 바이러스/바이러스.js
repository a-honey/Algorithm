const [n, m, ...input] = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');

const computerCount = Number(n);
const connections = Number(m);
const computers = input.map(e => e.split(' ').map(Number));

const graph = Array.from({ length: computerCount + 1 }, () => []);
computers.forEach(([a, b]) => {
    graph[a].push(b);
    graph[b].push(a);
});

function countVirus(start) {
    const visited = Array(computerCount + 1).fill(false);
    const queue = [start];
    visited[start] = true;
    let virusCount = 0;

    while (queue.length) {
        const current = queue.shift();
        for (const neighbor of graph[current]) {
            if (!visited[neighbor]) {
                visited[neighbor] = true;
                queue.push(neighbor);
                virusCount++;
            }
        }
    }

    return virusCount;
}

console.log(countVirus(1));