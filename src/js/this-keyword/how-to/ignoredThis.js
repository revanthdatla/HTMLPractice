(function ()
{
  function foo()
  {
    console.log(this.a);
  }

  var a = 5;

  // when a null or undefined is passed as a this context, it will be ignored and default rule applies.
  foo.call(null);
})();

/**
 * Spreading out array of values as parameters.
 */
(function ()
{
  function foo(p1, p2)
  {
    console.log(p1 + ' ' + p2);
  }

  // here foo is not making use of any this reference, which will not causes side-effect due to null or undefined.
  foo.apply(null, [1,2]);

  // If we call a third-party function, it is important to safely passes the this reference to avoid side effects.
  var ø = Object.create(null); // without the delegation to Object.prototype

  foo.apply(ø, [2,3]);
})();

(function ()
{
  function foo()
  {
    console.log(this.a);
  }

  var p = {
    a: 2,
    foo
  };

  var q = {
    a:3
  };

  // indirect referencing
  (q.foo = p.foo)();
})();
