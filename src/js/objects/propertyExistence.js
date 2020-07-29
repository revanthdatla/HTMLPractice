(function ()
{
  var bus1 = {
    c: 4
  };

  var bus2 = {};

  // in operation check if the property exists in the object or if it exists at any higher level
  // of the prototype chain.
  console.log('c' in bus1);

  console.log('a' in bus2);

  // just checks only the object in question and will not consult the prototype chain.
  console.log(bus1.hasOwnProperty('c'));
  console.log(bus2.hasOwnProperty('a'));

  // a object can be created with out linking it to the Object.prototype
  var bus3 = Object.create(null);

  bus3.a = 4;

  // bus3 object is not referring to prototype chain, calling direct will lead to TypeError
  // console.log(bus3.hasOwnProperty('a'));

  // robust way to do it is
  console.log(Object.prototype.hasOwnProperty.call(bus3, 'a'));

})();
