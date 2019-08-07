function explicitCoercionExample()
{
    let a = 46;

    // String(a) is not same as new String(a), the formal one is doing an explicit
    // type casting and the latter one is creating a wrapper object with the given value
    // explicitly type casted to a string.
    return String(a);
}

function implicitCoercionExample()
{
    let a = 45;

    // + operation with one of the operand being string will insist on the operation
    // being a string concatenation. Here the hidden side effect will force 45 to be
    // coerced to its string equivalent '45'.
    return a + "";
}

/**
 * toString abstract operation works as per the ES5 specification.
 */
function toStringOperationExamples()
{
    // primitives values have natural Stringification
    console.log(null + ''); // 'null'

    console.log(undefined + ''); // 'undefined'

    console.log(true + ''); // 'true'

    console.log(false + ''); // 'false'

    console.log(45 + ''); // '45'

    // numbers are expressed in its natural way but small/large number are
    // stringified to exponential form.
    let largeNumber = 234.45 * 1000 * 1000 * 1000 * 1000 * 1000 * 1000 * 1000;

    let smallNumber = -234.45 * 1000 * 1000 * 1000 * 1000 * 1000 * 1000 * 1000;

    console.log(largeNumber + '');

    console.log(smallNumber + '');

    // toString operation on Objects returns the internal `[[class]]` property, which
    // is a default located at Object.protoype.toString()
    // if a object contains toString method in it, it will be called.
    let obj = {};

    console.log(obj.toString());

    // array default have an overridden default toString(), which stringifies as its string
    // concatenation of all its values.
    let a = [4,5,6];

    console.log(a.toString());
}

function jsonStringifyExample()
{
    console.log(JSON.stringify(null));

    console.log(JSON.stringify(42));

    console.log(JSON.stringify(true));

    console.log(JSON.stringify(false));
}

/**
 * except for circular reference, JSON.Stringify() will exclude
 * all non-safe JSON values.
 */
function nonJSONSafeExample()
{
    console.log(JSON.stringify(undefined)); // undefined

    console.log(JSON.stringify(function () {})); // undefined

    console.log(JSON.stringify(Symbol.iterator)); // undefined
    
    console.log(JSON.stringify([5, undefined, function(){}]));

    console.log(JSON.stringify({ a: 5, b: function () {}, c: undefined, d: Symbol.iterator}));

    objectWithCircularReference(true);
}

function objectWithCircularReference(enableToJSON = false)
{
    // object with circular reference.
    let obj1 = {};

    let a = {
        i: 4,
        j: obj1,
        k: 4
    };

    obj1.b = a;

    if(enableToJSON)
    {
        a.toJSON = function ()
        {
            return { i: this.i, k: this.k };
        }
    }

    console.log(JSON.stringify(a));
}

function jsonStrinfigyReplacerExample()
{
    let obj = {
      a: 5,
      b: 6,
      c: [ 7, 8 , 9]
    };

    obj.toJSON = function ()
    {
        // occurs first to generate a value for serialization
        return { a: this.a, b: this.b };
    };

    // if replacer is array, only serializes properties b and c
    // in obj.
    console.log(JSON.stringify(obj, [ 'b', 'c']));

    // if replacer is function, it will called once for the object itself and
    // on every property within the object.
    function replacerFunc(k, v)
    {
        if (k !== 'a')
        {
            return v;
        }
    }

    console.log(JSON.stringify(obj, replacerFunc));
}

function jsonStringifySpaceExample()
{
    let obj = {
        a: 5,
        b: 6,
        c: 7,
        d: [ { f: 3, d: [ 2,3]}]
    };

    console.log(JSON.stringify(obj, null, 3));

    console.log(JSON.stringify(obj, null, '-----'));
}
jsonStringifySpaceExample()