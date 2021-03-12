Static Typing
=============

Typescript, flow and type-aware linting.

[Typescript Vs. Flow](https://github.com/niieani/typescript-vs-flowtype)

### Benefits:

1. catch type-related mistakes.
2. communicate type intent.
3. provide IDE feedback.

### Caveats

1. Inferencing is a best-guess, not a guarantee.
2. Annotations are optional.
3. Any part of the application that isn't typed introduces uncertainty.

### Type-Aware Linting

1. Inferencing
2. custom types and signatures
3. validating operand types

### Pros

1. They make types more obvious.
2. Familiarity: they look like other language's type systems.
3. Extremely popular these days.
4. They're very sophisticated and good at what they do.

### Cons

1. They use `non-JS-standard` syntax (or code comments).
2. They require* a build process, which raises the barrier to entry.
3. Their sophistication can be intimidating to those without prior
   formal types experience.
4. They focus more on `static types` (variables, parameters, returns,
   properties, etc) than value types.

### Summary

1. JS has a dynamic type system, which uses various forms of coercion
   for value type conversion, including equality comparisons.
2. However, the prevailing response to be avoid as much as this system
   as possible, and use `===` to protect from needing to worry about
   types. Part of the problem with avoidance of whole swaths of JS, like
   pretending `===` saves you from needing to know types, is that it
   tends to systemically perpetuate bugs.
3. You simply cannot write quality JS programs without knowing the types
   involved in your operations.

