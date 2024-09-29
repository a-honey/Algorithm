const fs = require('fs');

const input = Number(fs.readFileSync('/dev/stdin').toString().trim())

if (input%2 === 0) {
    console.log('CY');
} else {
    console.log('SK');
}