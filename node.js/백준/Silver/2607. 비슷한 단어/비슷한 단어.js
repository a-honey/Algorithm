const fs = require('fs');

const [count, word, ...words] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let result = 0;

words.forEach((similar_word)=>{
  const target_array = word.split('');
  const similar_word_array = similar_word.split('');
  let change_count = 0;
  
  for (let w of similar_word_array) {
    const index = target_array.indexOf(w);
    
    if (index !== -1) {
      target_array.splice(index, 1);
    } else {
      change_count += 1;
    }
  }
  
  if (change_count <= 1 && target_array.length <= 1) {
    result += 1;
  }
})
console.log(result);