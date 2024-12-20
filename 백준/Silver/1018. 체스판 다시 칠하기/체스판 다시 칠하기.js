const [n, ...input] = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');

const [row, col] = n.split(' ').map(Number);

const array = input.map((row)=>row.split(''));

const pattern1 = [
  ['W', 'B', 'W', 'B', 'W', 'B', 'W', 'B'],
  ['B', 'W', 'B', 'W', 'B', 'W', 'B', 'W'],
  ['W', 'B', 'W', 'B', 'W', 'B', 'W', 'B'],
  ['B', 'W', 'B', 'W', 'B', 'W', 'B', 'W'],
  ['W', 'B', 'W', 'B', 'W', 'B', 'W', 'B'],
  ['B', 'W', 'B', 'W', 'B', 'W', 'B', 'W'],
  ['W', 'B', 'W', 'B', 'W', 'B', 'W', 'B'],
  ['B', 'W', 'B', 'W', 'B', 'W', 'B', 'W']
];

const pattern2 = [
  ['B', 'W', 'B', 'W', 'B', 'W', 'B', 'W'],
  ['W', 'B', 'W', 'B', 'W', 'B', 'W', 'B'],
  ['B', 'W', 'B', 'W', 'B', 'W', 'B', 'W'],
  ['W', 'B', 'W', 'B', 'W', 'B', 'W', 'B'],
  ['B', 'W', 'B', 'W', 'B', 'W', 'B', 'W'],
  ['W', 'B', 'W', 'B', 'W', 'B', 'W', 'B'],
  ['B', 'W', 'B', 'W', 'B', 'W', 'B', 'W'],
  ['W', 'B', 'W', 'B', 'W', 'B', 'W', 'B']
];

function countPaints(board, pattern, startRow, startCol){
    let count = 0;
    for (let i = 0; i < 8; i++){
        for (let j=0; j < 8; j++){
            if (board[startRow+i][startCol+j] !== pattern[i][j] ){
                count++;
            }
        }
    }
    return count;
}

let min = 64;

for (let i=0; i <= row - 8;i++){
    for (let j = 0; j <= col - 8; j++){
        const count1 = countPaints(array, pattern1, i, j);
        const count2 = countPaints(array, pattern2, i, j);
        min = Math.min(min, count1, count2);
    }
}

console.log(min);