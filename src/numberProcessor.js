const fs = require("fs");
const path = require("path");

/**
 * Reads a file containing one number per line and returns
 * an array of valid numeric values.
 */
function readNumberFile(filePath) {
  const absolute = path.resolve(filePath);
  const raw = fs.readFileSync(absolute, "utf8");
  return raw
    .split(/\r?\n/)
    .map(s => s.trim())
    .filter(Boolean)
    .map(Number)
    .filter(n => Number.isFinite(n));
}

/** Returns the sum of all numbers in an array (empty → 0). */
function sumNumbers(nums) {
  return nums.reduce((acc, n) => acc + n, 0);
}

/** Returns the min and max in the array (empty → {min:null, max:null}). */
function minMaxNumbers(nums) {
  if (!nums || nums.length === 0) return { min: null, max: null };
  let min = nums[0];
  let max = nums[0];
  for (const n of nums) {
    if (n < min) min = n;
    if (n > max) max = n;
  }
  return { min, max };
}

/** Returns the average of the array (empty → null). */
function averageNumbers(nums) {
  if (!nums || nums.length === 0) return null;
  return sumNumbers(nums) / nums.length;
}

// Demo if the file is run directly
if (require.main === module) {
  const file = "data/sample-numbers.txt";
  if (fs.existsSync(file)) {
    const numbers = readNumberFile(file);
    const { min, max } = minMaxNumbers(numbers);
    console.log("Count:", numbers.length);
    console.log("Sum:", sumNumbers(numbers));
    console.log("Min:", min);
    console.log("Max:", max);
    console.log("Average:", averageNumbers(numbers));
  } else {
    console.log("No sample-numbers.txt found yet.");
  }
}

module.exports = { readNumberFile, sumNumbers, minMaxNumbers, averageNumbers };
