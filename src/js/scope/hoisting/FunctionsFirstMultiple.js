/**
 * During hoisting, Function Declarations take precedence over variable declarations on duplication.
 *
 * Subsequent function declarations do override previous ones.
 */
foo(); // Output: Function Declaration

// Even though the var declaration is first in the order of code, function declarations are first.
// var keyword allows duplication. Ideally let or const will be used. This is just for demonstration purposes.
var foo;

// Below declaration will be over-ridden if duplication declaration exists further
function foo()
{
    console.log('Function Declaration');
}

foo = function ()
{
    console.log('Function Expression');
}

function foo()
{
    console.log('Function Declaration Overridden')
}