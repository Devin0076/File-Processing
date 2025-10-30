const fs = require("fs");
const path = require("path");

function readTextFile(filePath) {
  const absolute = path.resolve(filePath);
  return fs.readFileSync(absolute, "utf8");
}

function tokenizeWords(text) {
  if (!text) return [];
  const matches = text.match(/[\p{L}\p{N}]+(?:'[^\s\W]+)?/gu);
  return matches ? matches.map(w => w.toLowerCase()) : [];
}

function countWords(text) {
  return tokenizeWords(text).length;
}

function findLongestWord(text) {
  const words = tokenizeWords(text);
  if (words.length === 0) return null;
  return words.reduce((longest, w) => (w.length > longest.length ? w : longest));
}

function countLines(text) {
  if (!text) return 0;
  return text.split(/\r?\n/).length;
}


if (require.main === module) {
  const file = "data/sample-text.txt";
  if (fs.existsSync(file)) {
    const txt = readTextFile(file);
    console.log("Words:", countWords(txt));
    console.log("Longest:", findLongestWord(txt));
    console.log("Lines:", countLines(txt));
  } else {
    console.log("No sample text found.");
  }
}

module.exports = { readTextFile, countWords, findLongestWord, countLines };
