#!/usr/bin/env node
const plainText = process.argv[2];
const key = 5;

function encryptChar(c) {
  const first = 'A'.charCodeAt(0);
  const letter = c.toUpperCase().charCodeAt(0);
  const index = letter - first;
  if (index < 0 || index > 26) {
    return c;
  }
  return String.fromCharCode(((index - key + 26) % 26) + first);
}

var cypherText = "";
for (let i=0; i<plainText.length; ++i) {
  cypherText = cypherText + encryptChar(plainText.charAt(i));
}

console.log(plainText);
console.log(cypherText);
