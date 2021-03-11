/**
 * sign utility function returns the sign of the given number.
 *
 * Examples:
 * Number as -3, returns -1
 * Number as 6, returns 1
 * Number as -0, returns -1
 * Number as 0, returns 0
 *
 * @param v
 * @returns {number|number}
 */
function signOf(v)
{
    return v !== 0 ? Math.sign(v) : Object.is(v, -0) ? -1 : 1;
}

console.log(signOf(-3)); // -1
console.log(signOf(8)); // 1
console.log(signOf(-0)); // -1
console.log(signOf(0)); // 1