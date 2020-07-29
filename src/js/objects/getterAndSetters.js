(function ()
{
  // using object liternal form
  var station1 = {
    _a_: 4,
    get a() // accessor descriptor, the value and writable properties are ignored
    {
      return this._a_ * 2;
    }
  };

  for (let station1Key in station1)
  {
    console.log(station1Key);

  }

  // using define property
  var station2 = {
    _b_: 3
  };

  Object.defineProperty(station2, 'b', {

    get()
    {
      return this._b_ * 2;
    },
    enumerable: true
  });

  for (let station2Key in station2)
  {
    console.log(station2Key);

  }
})();
