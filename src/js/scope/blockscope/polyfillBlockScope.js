/**
 * A poly-fill for pre-ES6.
 *
 * A catch block provides a block scope
 */
try
{
    throw 5;
}
catch (value)
{
    console.log(value);
}

console.log(value); // ReferenceError