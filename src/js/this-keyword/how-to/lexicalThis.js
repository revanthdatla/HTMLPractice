/**
 * Demonstrate use of arrow function, which use lexical scoping for this binding.
 * they inherit the this binding from its enclosing scope.
 */
(function ()
{
  function foo()
  {
    // return an arrow function, which inherit this binding from foo.
    return (a) =>
    {
      console.log(this.a);
    }
  }

  var bar = foo.call({ a: 2 });

  // bar the arrow function is lexically inherit this from its enclosing scope.
  bar.call({ a: 5 });
})();

/**
 * Pre ES6 the same functionality can be achieved using syntactic self = this
 */
(function ()
{
  function foo()
  {
    var self = this; // lexical capture of `this`

    return function (a)
    {
      console.log(self.a);
    }
  }

  var obj = {
    a: 2
  };

  var bar = foo.call( obj );

  bar(9);
})();
