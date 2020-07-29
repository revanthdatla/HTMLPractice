(function ()
{
  var value;

  function foo(p1, p2)
  {
    this.value = p1 + p2;
  }

  // binds the
  var bar = foo.bind(null, 'a');

  var baz = new bar('b');

  console.log(baz.value);
})();

(function ()
{
  function foo(p1, p2)
  {
    this.value = p1 + p2;
  }

  // binds the given fn to the given obj and allows currying.
  function bind(fn, obj)
  {
    var bArgs = Array.prototype.slice.call(arguments, 2);

    // default binding is avoided and points to the given default object for this binding.
    function fBound()
    {
      var context = !this || (typeof window !== "undefined" && this === window)
                          || (typeof global !== "undefined" && this === global)
                    ? obj
                    : this;

      var finalArgs = bArgs.concat(Array.prototype.slice.call(arguments));

      return fn.apply(context, finalArgs);
    }

    return fBound;
  }

  var ø = {};

  var wrapper = bind(foo, ø, 1);

  wrapper.call(null, 2);

  console.log(ø.value);
})();
