const fs = require('fs');
const filePath = 'sowpods.txt';

const fileContents = fs.readFileSync(filePath, 'utf-8');
const wordsArray = fileContents.split('\n');


const wordsContainingUU = [];
for (let i = 0; i < wordsArray.length; i++) {
  const word = wordsArray[i];
  if (word.includes('UU')) {
    wordsContainingUU.push(word);
  }
}

console.log(wordsContainingUU);
