Asynchrony
==========

Asynchronous programming in JS is practically seen in cases like when a
app is waiting for user input, requesting data from database, sending
data across network and waiting for the response, performing repeated
task at a fixed interval. More practical cases where I applied
Asynchronous programming are on dropdown change handler's, on text input
change, on hover, on-click event handling.

They are both conventional and new ways of handling Asynchrony in JS,
using callback, promise, generators.

## A program in chunks

Lets take a program that is making a service call and based on its
response it is going to do some additional executions.

If this additional executions is not completed asynchronously then a
blocking behaviour occurs which causes execution to be stop until a
response is returned. This behaviour can be avoided using asynchronous
programming in JS.

Usually, `util` functions like `Ajax` , `Get`, `Post` to make service
calls don't complete synchronously. Avoiding blocking of UI (Buttons,
Menus, Scrolling, etc.) which prevents any user interactions to happen.

Asynchrony is introduced to a program by wrapping a chunk of code into a
function and specify that it should be executed in response to a event
(like timer, on-click, service response).

## Async Console

The `console` function is not a specification of JS rather it is
introduced by the hosting environments like Browsers. So they are no
requirements around how `console` works.

Browsers/JS environments may not execute the `console.log()` method
immediately. The reason for this is because a I/O operation in a program
is slow and blocking part of the programs. It may perform better for a
browser to handle it asynchronously in the background.

The best option to achieve predictability to `console.log()` statements
in a program is either by using breakpoints or forcing a snapshot by
serializing in to a string using `JSON.stringify(...)`

## Event Loop

Up until ES6 JS doesn't have a notion of asynchrony built into it. JS
itself has never done anything more than execute a single chunk of your
program at any given moment.

The JS engine doesn't run in isolation. It runs inside a hoisting
environments like Browsers. Most recently, JS expanded beyond the
browsers into other environments like servers, via thing like Node.js.
JS gets embedded into all kinds of devices these days.

All these environments have a mechanism in them that handles executing
multiple chunks of a program over time, at each moment invoking the JS
engine called event loop.

JS engine has no sense of time, it is the surrounding environment that
always scheduled events.

For example, when a service call is initiated from a browser, the
browser will add the chunk of program to be executed after getting the
response to the event loop not the JS engine.

Similarly, when a `setTimeout()` is executed, it doesn't put the
callback in the event loop queue. What it does is setup a timer, when
the timer expires, the environment place the callback into the queue.
This explains why `setTimeout()` timers may not fire will temporal
accuracy.

Starting ES6, event loops works in the purview of JS engine. One main
change is due to the introduction of `ES6 Promises()` which require
ability to have fine-grained control over scheduling operations on the
event loop queue.

## Parallel Threading

`async` and `parallel` are quite different even though they are used
interchangeably. `async` is about the gap between now and later.
`parallel` is about being able to occur simultaneously.

Parallel computing happens through processes and threads. Multiple
threads in a process can share memory.

An event loop, breaks its works into tasks and run it serially,
disallowing parallel access and sharing of memory.

## Run to Completion

The JS single threading, run-to-completion behaviour. Take for example
two functions with code the does some manipulation to a number like
addition and multiplication separately. The single-threading grantees
each function to be atomic.

But still non-determinism is possible for both parallel and
single-threaded but one at statement level and other at function level
respectively.

ES6 Generators which did not have run-to-completion behavior.

## Concurrency

When two or more 'process' occur simultaneously at the same time window
then concurrency is in place.

Examples in your existing project are triggering multiple API calls and
handling responses. Here both triggering and handling responses were
happening at the same time window.

The single-threaded event loop is one expression of concurrency.

### Non-interacting

When two or more 'process' are running simultaneously within a same
program and if they doesn't need interaction with each other then
non-determinism is perfectly acceptable.

### Interaction

The other ways of handling non-determinism is through gate and latch
interaction between process.

### Cooperation

Another expression of concurrency cooperation is called 'Cooperative
Concurrency'. Here the goal to take a long-running process and break it
into steps or batches so that other processes have a chance to
interleave their operations into the event loop queue.

A long running process can still block UI interaction during its
execution. This can be avoided by cooperating with the event loop by
breaking it into sub-process and interleave with the existing process in
the queue which will give more responsive site/app.

`setTimeout(...)` is not directly inserting task to the event loop.
Rather when a timers gets expires, the environment will insert the task
to the queue. When multiple `setTimeout(...)` calls were triggered, the
calls would not be strictly guaranteed to be processed in call order. So
ordering is not predictable.

## Jobs

As of ES6, there's is new concept layered on top of event loop queue
called Job queue. The asynchronous behaviour of Promises is based on
jobs, which is related to event loop behaviour.

## Statement Ordering

Compiler statement reordering is a micro-metaphor for concurrency and
interaction.

The order in which we express statements in our code is not necessarily
the same order as the JS engine will execute them. In various cases of
reordering, the JS engine is performing safe optimizations during its
compilation as the end result would be the same.

## Review

A JavaScript program is practically always broken into chunks of code
where one part runs now and the later part in response to an event. Even
though programs runs chunk-by-chunk. all of them share the same access
to program scope and state.

Event loops run until the queue is empty. Each iteration to a event loop
is a 'tick'. User Interaction, I/O, timers enqueue on the event queue.

At a given moment, only one event can be processed from the queue at a
time. A running event could trigger one or more event either directly or
indirectly.

Concurrency is when two or more process(events) run interleave over
time, such that at a higher perspective, it appears to be running
simultaneously(even though at any given time only one process is
processed).

It is necessary to often do some interaction coordination between
concurrent processes to ensure ordering or prevent race conditions.
These processes can also cooperate by breaking themselves into smaller
chunks and allow other process to interleave.


