// TODO: define polyfill for `Object.is(..)`

/**
 * isItNegativeZero - Utility function that first check if a given value is either 0 or -0 and then values if it is
 * negative zero by comparing against -Infinity
 *
 * @param value
 * @returns {boolean}
 */
function isItNegativeZero(value)
{
    return value === 0 && (1 / value) === -Infinity;
}

/**
 * isItNaN - a utility function that checks if a value is strictly NaN
 *
 * @param value
 * @returns {boolean}
 */
function isItNaN(value)
{
    return value !== value;
}

/**
 * ObjectIs polyfill that return either true or false by comparing the parameter value1  and value2.
 *
 * @param value1
 * @param value2
 * @constructor
 */
function ObjectIs(value1, value2)
{
    // -0 corner case check is being delegated to isItNegativeZero Utility.
    var _value1 = isItNegativeZero(value1);

    var _value2 = isItNegativeZero(value2);

    // if one of the value is a negative zero, then make sure that both the values are true inorder to be equal or the values are not equal.
    if(_value1 || _value2)
    {
        return _value1 && _value2;
    } // NaN corner case check is being delegated to isItNaN function
    else if(isItNaN(value1) && isItNaN(value2))
    {
        return true;
    }

    // rest of the case, we are relying on JS strict equality check ===.
    return value1 === value2;
}

if(!Object.is || true)
{
    Object.is = ObjectIs;
}


// tests:
console.log(Object.is(42,42) === true);
console.log(Object.is("foo","foo") === true);
console.log(Object.is(false,false) === true);
console.log(Object.is(null,null) === true);
console.log(Object.is(undefined,undefined) === true);
console.log(Object.is(NaN,NaN) === true);
console.log(Object.is(-0,-0) === true);
console.log(Object.is(0,0) === true);

console.log(Object.is(-0,0) === false);
console.log(Object.is(0,-0) === false);
console.log(Object.is(0,NaN) === false);
console.log(Object.is(NaN,0) === false);
console.log(Object.is(42,"42") === false);
console.log(Object.is("42",42) === false);
console.log(Object.is("foo","bar") === false);
console.log(Object.is(false,true) === false);
console.log(Object.is(null,undefined) === false);
console.log(Object.is(undefined,null) === false);
