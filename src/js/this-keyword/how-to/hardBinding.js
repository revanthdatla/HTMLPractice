(function ()
{
  function getCity()
  {
    return this.city;
  }

  var address = {
    city: 'Rajahmundry'
  };

  // a wrapper function that hard binds the getCity to its @this reference
  function logCity()
  {
    console.log(getCity.call(address));
  }

  logCity();
})();

/**
 * The above examples didn't address pass through arguments and return values to the hard binding function.
 * Let's address that hear.
 */
(function ()
{
  function getCity(person)
  {
    console.log(person);

    return this.city;
  }

  var address = {
    city: 'Rajahmundry'
  };

  // a wrapper function that hard binds the getCity to its @this reference and will pass through arguments that are sent
  // to the function and return the values.
  function logCity()
  {
    return getCity.apply(address, arguments);
  }

  console.log(logCity('Revanth'));
})();

/**
 * Hard Binding Wrapper function can be created using a helper function.
 */
(function ()
{
  function getCity(person)
  {
    console.log(person);

    return this.city;
  }

  var address = {
    city: 'Rajahmundry'
  };

  function bind(fn, obj)
  {
      return function ()
      {
          return fn.apply(obj, arguments);
      }
  }

  console.log(bind(getCity, address)('Binding Helper'));
})();

/**
 * Hard Binding Wrapper function can be created using a utility function ready available from ES5
 */
(function ()
{
  function getCity(person)
  {
    console.log(person);

    return this.city;
  }

  var address = {
    city: 'Rajahmundry'
  };

  // bind
  console.log(getCity.bind(address, 'bind ES5 utility function')());
})();
