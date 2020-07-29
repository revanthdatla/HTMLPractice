(function ()
{
  function log(number)
  {
    console.log(number + ' ' + this.id);
  }

  var obj = {
    id: 'Home'
  };

  // forEach function prototype takes additional argument to bind the @this context to the callback
  [1, 2, 3].forEach(log, obj);
})();
