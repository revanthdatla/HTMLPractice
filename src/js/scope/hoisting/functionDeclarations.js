/**
 * This examples shows how function declarations are hoisted up during compilation just like
 * variable declarations.
 *
 * The compiler first looks for declarations - variable or functions first. Later during execuation phase, foo
 * enclosed in the global scope is retrieved and called.
 */
foo();

function foo()
{
    console.log("Called foo()");
}