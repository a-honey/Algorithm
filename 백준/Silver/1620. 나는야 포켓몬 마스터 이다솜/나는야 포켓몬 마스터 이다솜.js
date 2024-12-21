const input = require('fs').readFileSync('/dev/stdin','utf8').trim().split('\n');
const [animalCount, problemCount] = input[0].split(' ').map(Number);

const nameToIndex = {};
const indexToName = {};
const answer = []; 

for (let i = 1; i <= animalCount; i++){
    nameToIndex[input[i]] = i;
    indexToName[i] = input[i];
}

for (let i = animalCount + 1; i <= animalCount + problemCount + 1; i++){
    if (Number.isNaN(Number(input[i]))){
        answer.push(nameToIndex[input[i]]);
    } else {
        answer.push(indexToName[input[i]]);
    }
}

console.log(answer.join('\n'))