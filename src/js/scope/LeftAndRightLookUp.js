/**
 * Example that demonstrate LHS and RHS lookup for an expression.
 *
 * If an RHS look-up never gets resolved, it throws an ReferenceError.
 * In a non-strict mode, a LHS look-up is going to create a variable of that name
 * in the global scope. But in a strict mode, it is going to throw ReferenceError
 * just like the RHS look-up.
 *
 * @constructor
 */
function foo(a)
{
    // RHS lookup finds a but b is not declared in foo's scope, so the engine will
    // look-up in its nested scope - global scope. As it is not defined in the global scope too,
    // variable b look-up throws an ReferenceError
    console.log(a+b);
}

foo(2);