(function ()
{
  function getCity()
  {
    return this.city;
  }

  var address = {
    city: 'Rajahmundry'
  };

  // @this is explicitly reference to address object.
  console.log(getCity.call(address));
})();
