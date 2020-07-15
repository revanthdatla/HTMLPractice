/**
 * An Block scope example using ES6's let key-word.
 *
 *
 */
{
    let a = 6;

    console.log(a); // RHS lookup finds a in the enclosing scope.
}

// RHS lookup can't resolve a.
console.log(a); // ReferenceError