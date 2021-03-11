Coercion
========
Converting a value from one type to another is called type casting (or
type conversion ), when done explicitly and coercion when done
implicitly. Based on how a value is used, coercion rules will be
applied.

JS Coercion always results in one of the primitive values like string,
number, boolean. Coercion doesn't result in a complex values like Object
or function. Boxing - which wraps scalar primitives to object couterpars
is not coercion in accurate terms.  

Type casting or type conversion occur in statically typed languages at
compile time. While type coercion is a runtime conversion for
dynamically typed languages.  

`Explicit coercion` is when it is obvious looking at the code that a
type conversion is intentionally occurring. Whereas `implicit coercion`
will occur as a less obvious side effect of some intentional operation.  

# ES5 Abstract Operations
ES5 abstract operations contains rules of value conversion. The primary
operations are `ToString`, `ToNumber`, `ToBoolean` and `TOPrimitive`.  

## `ToString`
Takes any value and gives the representation of its value in string.

### JSON Stringification
`JSON.stringify()` serializes a value to a JSON compatible string value.
It is not same as coercion. But it is related to the `toString` rules.  

For simple values, it behaves is similar to `toString` conventions,
except that serialization result is always a `string`.  

Any JSON safe value can be stringified by `JSON.stringify()`.  

#### JSON-Safe
Any value that can be represented validly in a JSON representation is
JSON-Safe. `undefined`, `functions` , (ES6+) `Symbols` and Objects with
circular reference are not JSON-Safe. Because all these values are not
portable to other languages that consume JSON values. If a non JSON-Safe
value is passed to `JSON.Stringify()`, it will simply exclude the value
without trowing any error except for Object with circular reference.  

JSON stringification has a special behaviour if an `object` contains
toJSON method defined, which will be used to get a value to use for
serialization.  

`JSON.stringify()` takes a optional second parameter called replacer,
which can be a `array` or `function`. It is customizing the recursive
serialization of an object by providing a filtering mechanism for which
properties should and should not be included, in a similar way to
`toJSON()` can prepare value for serialization.

If *replacer* is an `array` it should be a array of string, which defines
the properties to be allowed for serialization.  

If *replacer* is a `function`, it will be called once for the `object`
itself, and then once for each property in the `object`.  

A third argument can be passed to `JSON.stringify()` which is optional
and used for indentation. It can be a positive integer to indicate how
many space characters to use at each indentation level.

## `ToNumber`
non-coercible object's can be created using `Object.create(null)`, if
the object has a `null` value for its `[[Prototype]]`.  

## `ToBoolean`
It is a common misconception that the values `1` and `0` are identical
to `true/false`.

# Philosophy of Coercion
You don't deal with these type conversion corner cases by avoiding coercions.

Instead, you have to adapt a coding style that makes value types plain and obvious.

A quality JS program embraces coercions, making sure the types involved in every operation are clear.
Thus, corner cases are safely managed.

JavaScript dynamic typing is not a weakness, but it's strongest qualities.

# implicit coercion
Implicitness is way of abstracting. Hiding the unnecessary details, re-focusing the reader and increasing clarity.

Is showing the extra details to the reader helpful or distracting?

It is irresponsible to knowingly avoid usage of a feature that can improve code readability.
