(function ()
{
  var school = {};

  // defining a property with writable and configurable as false will create a object constant.
  Object.defineProperty(school, 'name', {
    value: 'Usha',
    writable: false,
    configurable: false,
    enumerable: true
  });

  console.log(school);

  // silently ignored
  school.name = 'alkjdfl';

  console.log(school.name);

  preventExtension();

  freezeObject();

})();

function preventExtension()
{
  var computer = {
    core: 4
  };

  // prevent extended the object computer beyond property core.
  Object.preventExtensions(computer);

  computer.ram = 6;

  console.log(computer);

}

function sealObject()
{
  var interior = {
    room: 2
  };

  // call prevent extension and set configurable as false for each property of room
  Object.seal(interior);

  // try extension
  interior.floor = 'wide';

  // din't got extended.
  console.log(interior);

  // existing property values can be changed.
  interior.room = 4;

  // changed
  console.log(interior);

  // try changing configurable for room
  // throws an error
  Object.defineProperty(interior, 'room', {
    value: 3,
    configurable: true
  })

}

function freezeObject()
{
  // prevent extension, seal configurable for all properties of the object, and don't allow changing property values.
  var house = {
    garden: true
  };

  Object.freeze(house);

  // try extension
  house.color = 'white';

  // didn't extended, fails silently
  console.log(house);

  // try changing value
  house.garden = false;

  // didn't got changed.
  console.log(house);


}
