const fs = require('fs');
const content = fs.readFileSync('src/data/brands.ts', 'utf8');
const regex = /"id":\s*"([^"]+)"/g;
let match;
const ids = [];
while ((match = regex.exec(content)) !== null) {
  ids.push(match[1]);
}
console.log('Total brands:', ids.length);
console.log('First 15 brand IDs:', ids.slice(0, 15));
