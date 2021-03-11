var myAge = Number("0o46");
var myNextAge = Number("39");
var myCatsAge = Number("n/a");

console.log("Log the output of the declared variables");
console.log("---------------------------");
console.log(myAge);
console.log(myNextAge);
console.log(myCatsAge);
console.log("---------------------------");

console.log("subtract operation on a number and string");
console.log("---------------------------");
console.log(myAge - "my son's age");
console.log("---------------------------");

console.log("Equality check on NaN variable");
console.log("---------------------------");
console.log(myCatsAge === myCatsAge);
console.log("---------------------------");

console.log("isNaN check on some values:");
console.log("--------------------------");
console.log(isNaN(myAge)); // false
console.log(isNaN(myCatsAge)); // true
console.log(isNaN("my son's age")); // true
console.log("--------------------------");

console.log("ES6 NaN equality check");
console.log("--------------------------");
console.log(Number.isNaN(myCatsAge)); // true
console.log(Number.isNaN("my son's cat age")); // false
console.log("--------------------------");