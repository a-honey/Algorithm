const [a, b, c, ...input] = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');

const count = Number(a);
const [personA, personB] = b.split(' ').map(Number);
const m = Number(c);
const nodes = input.map((line)=>line.split(' ').map(Number));

const graph = Array.from({length: count + 1}, () => []);
nodes.forEach(([x, y])=>{
    graph[x].push(y);
    graph[y].push(x);
});

function countRelationship(start, target){
    const visited = Array(count + 1).fill(false);
    const queue = [[start, 0]];
    
    while (queue.length){
        const [current, relationship] = queue.shift();
        
        if (current === target){
            return relationship;
        }
        
        if (!visited[current]){
            visited[current] = true;
            for (const neighbor of graph[current]){
                if (!visited[neighbor]){
                    queue.push([neighbor, relationship + 1]);
                }
            }
        }
    }
    return -1;
}

console.log(countRelationship(personA, personB));