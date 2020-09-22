function* foo(x, y)
{
  return x * y;
}

var it = foo(1,3);

console.log(it.next().value);
