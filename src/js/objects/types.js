function primitiveTypes()
{
  // string primitive
  const strPrimitive = 'Hello World!';

  // number primitive
  const numPrimitive = 5;

  // boolean primitive
  const boolPrimitive = true;

  // null primitive
  const nullPrimitive = null;

  // undefined primitive
  const undefinedPrimitive = undefined;

  // What is object primitive. Letter 'o' is small. TODO:
}


function subTypesOfObject()
{
  //function is an sub-type of object(callable object)

  // Array are also sub-type of object with extra behaviour
}

function primitiveAndNonPrimitiveString()
{
  // operation on string primitive requires String object. But the language automatically, coerces the primitive to
  // String Object which supports operation.
  // It is preferred by majority of JS community to make use of literal form for value.
  var strPrimitive = 'Hello World!';

  console.log(typeof strPrimitive);

  console.log(strPrimitive instanceof String);

  var strObject = new String('Hello Mac');

  console.log(typeof strObject);

  console.log(strObject instanceof String);

  console.log(strObject instanceof Object);

  // inspect the object sub-type
  console.log(Object.prototype.toString.call(strObject));

  // log the contents of object
  console.log(strObject.toString(strObject));

  // string operations on primitive. Language coerces the primitive to String object.
  console.log(strPrimitive.length);
  console.log(strPrimitive.charAt(2));
}

function primitiveAndObjectNumber()
{
  // similar to string literal. JS Language coerces number literal to Number object as needed.
  const numPrimitive = 4.5343;

  // operation on number primitive. coercers to Number object by the language.
  console.log(numPrimitive.toFixed(2));

}

function primitiveAndObjectBoolean()
{
  // similar to string literal and number literal
  const boolPrimitive = true;

  console.log(boolPrimitive.toString());
}

/**
 * null and undefined have no object wrapper form.
 */
function nullAndUndefined()
{

}

/**
 * Date can only be created using their constructor form.
 */
function dateObjects()
{

}

primitiveAndNonPrimitiveString();

primitiveAndObjectNumber();

primitiveAndObjectBoolean();
