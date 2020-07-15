/**
 * During hoisting, Function Declarations take precedence over variable declarations on duplication.
 */
foo(); // Output: Function Declaration

// Even though the var declaration is first in the order of code, function declarations are first.
var foo;

function foo()
{
    console.log('Function Declaration');
}

foo = function ()
{
    console.log('Function Expression');
}