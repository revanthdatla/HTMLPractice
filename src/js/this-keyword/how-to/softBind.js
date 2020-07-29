(function ()
{
  if (!Function.prototype.softBind)
  {
    Function.prototype.softBind = function (obj)
    {
      var sbArgs = Array.prototype.slice.call(arguments, 1);

      var fn = this;

      // Wrapper function.
      function fBound()
      {
        var context = (!this ||
          (typeof window !== "undefined" &&
            this === window) ||
          (typeof global !== "undefined" &&
            this === global)
        ) ? obj : this;

        var finalArgs = sbArgs.concat(Array.prototype.slice.call(arguments));

        return fn.apply(context, finalArgs);
      }

      return fBound;
    }
  }

  function foo()
  {
      console.log(this.name);
  }

  var obj = { name: "obj" },
    obj2 = { name: "obj2" },
    obj3 = { name: "obj3" };

  var fooOBJ = foo.softBind( obj );

  fooOBJ();

  obj2.foo = foo.softBind(obj);
  obj2.foo(); // name: obj2   <---- look!!!

  fooOBJ.call( obj3 ); // name: obj3   <---- look!

  setTimeout( obj2.foo, 10 );
// name: obj   <---- falls back to soft-binding
})();
