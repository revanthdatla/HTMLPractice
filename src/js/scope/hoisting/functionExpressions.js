/**
 * Explains how function expressions are scoped and hoisted.
 *
 * Function expressions are not hoisted as function declarations.
 *
 *
 */
// During foo lookup, the engine retrieves undefined and calling it causes an TypeError
foo(); // Output: TypeError
bar(); // Output : ReferenceError

// var foo; gets declared
var foo = function bar(){
    console.log("called bar()");
}