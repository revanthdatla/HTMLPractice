/**
 * Demonstrate hoisting example.
 *
 * The JS Engine process the variable and function declarations first(compiler phase) and leaves the assignments
 * at the execution phase.
 *
 * var a = 6;
 *
 * The above single statement is seen by the compiler as var a; and a = 6;
 * var a; is handled at the compilation phase and a =6; is left for execution phase.
 */
function simpleVarDeclarations()
{
    a=5;// occurs at the time of execution

    var a;// declarations are hoisted. Occurs first.

    // 'a' is within the scope of the function simpleVarDeclarations. During compilation, a is declared within simpleVarDeclarations's scope.
    // During execution, 5 is assigned to a. RHS lookup occurs on console.log call and finds 5 in the called scope.
    console.log(a); // output: 5
}

/**
 * Demonstrating hoisting example for variable declarations with variation.
 * 
 * @param c
 */
function simpleVarDeclarations2(c)
{
    // c + d is an RHS lookup.
    // c,d are within the simpleVarDeclarations2's scope.
    // RHS lookup on c gives 5 and d gives 'undefined' at this point. Integer + undefined gives NaN
    console.log(c+d); // output: NaN

    var d = 10;// declaration var d; is hoisted during compilation.
}
