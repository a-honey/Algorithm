const num = Number(require('fs').readFileSync('/dev/stdin', 'utf8').trim());

const cards = Array.from({ length: num }, (_, i) => i + 1); 

let index = 0;
while (index < cards.length -1){
    index++; // 첫번째 카드 버리기
    cards.push(cards[index++]);
}

console.log(cards[index]);
