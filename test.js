// We are using Node's built-in assert module to check things
const assert = require('assert');

// The math we want to test
const result = 2 + 2;

console.log("Running our test: What is 2 + 2?");

// This line tells the computer: "The result MUST equal 4. If not, throw an error saying 'Math is broken!'"
assert.strictEqual(result, 4, "Math is broken!");

console.log("Test passed! ✅");
