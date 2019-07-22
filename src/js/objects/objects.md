Objects
=======
## Iteration
The `for..in` loop iterates over all the non-symbol, enumerable properties of an object, including `[[prototype]]` chain.
Refer to `iteration.js#iterationUsingForIn`. The values can't be accessed directly using this loop.  

But to iterate over the values is typically done using `for` loop. Refer to the `iteration.js#iterateOverIndices`. This
is not accessing values directly but it is using indices to access corresponding value.  

**NOTE**: The order of iteration over an object's properties is not guaranteed and may vary between different JS Engines.  

In order to iterate over the values of an array (or object), ES6 added a `for..of` loop syntax for iterating over a array (
and objects, if the object defines its own iterator). Internal, `for..of` syntax does its iterations using `@@iterator` internal property.
Refer to `iteration.js#iterationUsingIterator`.  

Regular objects do not have built-in `@@iterator`. To use `for..of` loop syntax on a object,
it should define its own iterator. Refer to `iteration2.js#iterationUsingForOfObjects`. The other way of defining `@@iterator` on a object.
```javascript
var obj = {
    a: 2,
    b: 3,
    [Symbol.iterator]: function() {
      /* */
    }
}
```













