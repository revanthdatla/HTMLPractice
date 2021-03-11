var trendRate = -0;
console.log("converting number to string");
console.log(trendRate.toString()); // oops not "-0"

console.log("Equality check with 0 and -0");
console.log(trendRate === 0); // true OOPS!
console.log(trendRate === -0); // true

console.log("Relational Operation check");
console.log(trendRate < 0); // false
console.log(trendRate > 0); // false

console.log("ES6 utility check");
console.log(Object.is(trendRate, -0)); // true
console.log(Object.is(trendRate, 0)); // false