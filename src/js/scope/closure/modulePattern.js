/**
 * A Module Pattern example making using of scope closure.
 *
 * Calling the function roots() will create an instance that exposes three object function properties.
 *
 * @returns {{squareRoot: (function(): number), cubeRoot: (function(): number), changeDefaultNumber: changeDefaultNumber}}
 */
function roots()
{
    var defaultNumber = 2;

    function squareRoot()
    {
        return defaultNumber * defaultNumber;
    }

    function cubeRoot()
    {
        return defaultNumber * defaultNumber * defaultNumber;
    }

    function changeDefaultNumber(value)
    {
        defaultNumber = value;
    }

    return {
        squareRoot,

        cubeRoot,

        changeDefaultNumber
    }
}

var root1 = roots();

console.log(root1.squareRoot());

console.log(root1.cubeRoot());

root1.changeDefaultNumber(5);

console.log(root1.cubeRoot());

console.log(root1.squareRoot());