
/**
 * A Module Pattern example making using of scope closure.
 *
 * Calling the function roots() will create an instance that exposes three object function properties.
 *
 * @returns {{squareRoot: (function(): number), cubeRoot: (function(): number), changeDefaultNumber: changeDefaultNumber}}
 */
var singletonRoots = (function roots()
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
})();

console.log(singletonRoots.squareRoot());

console.log(singletonRoots.cubeRoot());

singletonRoots.changeDefaultNumber(5);

console.log(singletonRoots.cubeRoot());

console.log(singletonRoots.squareRoot());