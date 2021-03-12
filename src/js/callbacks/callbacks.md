Callbacks
=========

A function is a individual, indivisible unit of operations, whereby
inside the function, statements run in a predictable order. But at the
function ordering level (events) order of execution is not predictable.

Here function is acting like a callback, because it serves as the target
for the event loop to call back into the program, whenever the item in
the queue is processed.

The callback is the most fundamental async pattern used in the language
along with concurrency interaction patterns in countless JS program,
even more complex ones.

Callback are not without their shortcomings.


