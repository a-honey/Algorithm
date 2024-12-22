const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');

const [site_count, question_count] = input[0].split(' ').map(Number);
const site_zip = new Map();

for (let i = 1; i <= site_count; i++){
    const [site, pw] = input[i].split(' ');
    site_zip.set(site, pw);
}

const answer = input.slice(site_count + 1).map(site => site_zip.get(site));

console.log(answer.join('\n'));