const input = require("fs").readFileSync("/dev/stdin", "utf8").trim().split("\n");

const n = Number(input[0]);
const graph = input.slice(1).map((line) => line.split(" ").map(Number));

function floydWarshall(n, graph) {
  for (let k = 0; k < n; k++) {
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        if (graph[i][k] === 1 && graph[k][j] === 1) {
          graph[i][j] = 1;
        }
      }
    }
  }
  return graph;
}

const result = floydWarshall(n, graph);

console.log(result.map(row => row.join(" ")).join("\n"));
