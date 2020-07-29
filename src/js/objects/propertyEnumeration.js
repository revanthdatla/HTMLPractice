(function ()
{
  var car1 = {};

  Object.defineProperty(car1, 'a', {
    value: 4,
    enumerable: true
  });

  Object.defineProperty(car1, 'b', {
    value: 5,
    enumerable: false
  });

  // check if a is in car1
  console.log('a' in car1);

  // check if b is in car1
  console.log(car1.hasOwnProperty('b'));

  // check if b is accessible
  console.log(car1.b);

  // iterate over car1, doesn't logs b as enumerable property is set to false
  for (let car1Key in car1)
  {
    console.log(car1Key);

  }

  // check if properties are enumerable
  console.log(car1.propertyIsEnumerable('a'));
  console.log(car1.propertyIsEnumerable('b'));

  // get enumerable keys.
  console.log(Object.keys(car1));

  // get own property names
  console.log(Object.getOwnPropertyNames(car1));

})();
