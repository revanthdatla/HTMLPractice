/**
 * Example of default binding.
 */
function foo()
{
  // foo's scope
  console.log(this.a);
}

var a = 'Hello';

// called from global scope
foo(); // TODO: this is not pointing to the global scope and resolving to a. Contradicting with the authors statement.
