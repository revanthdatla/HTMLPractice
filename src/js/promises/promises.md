Promises
==========

Promises tackle the deficiencies of callback functions which are lack of
sequentiality and lack of trustability. It solves the problem of
inversion of control, the trust that is so fragile. For example, when
multiple service calls where triggered in a sequential order, callback
order is not guaranteed because control is taken by the third party API.
Promises pattern solves this by intimating the callback when the task
was finished and the callback can decide what to do next. 

This paradigm is called Promises. In fact, most new async APIs added to
JS/DOM platform are being built on Promises.

## What is a Promise?

