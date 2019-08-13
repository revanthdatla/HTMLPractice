let a = new Array(3);

let b = [ undefined, undefined, undefined ];

delete b[1];

let c = [];

c.length = 3;

let test = new Function("x", "return x * 5;");

console.log(a, b, c);

console.log(a.join('-'));

console.log(a.map((v, i) => i));

console.log(b.map((v,i) => i));

console.log([5,6,7]);