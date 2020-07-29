(function ()
{
  var obj = {
    name: 'Revanth'
  };

  // returns the property descriptor for the given object's property
  console.log(Object.getOwnPropertyDescriptor(obj, 'name'));

  writableProperty();

  // configurablePropertyDescriptor();

  enumerablePropertyDescriptor();

})();

function writableProperty()
{
  var student = {};

  Object.defineProperty(student, 'name',{
    value: 'Mani',
    writable: false,
    enumerable: true,
    configurable: true
  });

  console.log(student.name);

  // in a non-strict mode the changing the value is silently ignored.
  student.name = 'Revanth';

  console.log(student.name);

}

function configurablePropertyDescriptor()
{
  var zoo = {};

  Object.defineProperty(zoo, 'animalCount', {
    value: 100,
    writable: true,
    enumerable: true,
    configurable: false // animalCount property descriptor can't be re-defined.
  });

  console.log(zoo.animalCount);

  // silently ignored as configurable is false
  delete zoo.animalCount;

  console.log(zoo.animalCount);


  // animalCount property descriptor can't be redefined. Throws an TypeError
  Object.defineProperty(zoo, 'animalCount', {
    value: 101,
    writable: true,
    enumerable: true,
    configurable: true
  });
}

function enumerablePropertyDescriptor()
{
  // used to skip a object-property enumeration.
  var beach = {
    name: 'South Beach',
    area: '100 Square foot',
    type: 'wet'
  };

  Object.defineProperty(beach, 'people', {
    value: 10000,
    writable: true,
    enumerable: false,
    configurable: true
  });

  for (let beachKey in beach)
  {
    console.log(beachKey);
  }
}


