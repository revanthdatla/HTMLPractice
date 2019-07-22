/**
 * iterateOverIndices
 * Standard `for` loop example.
 */
function iterateOverIndices()
{
    let list = [0, 1, 2];

    for (let i = 0; i < list.length; i++)
    {
        console.log(list[i]);
    }
}

/**
 * iterationUsingIterator
 */
export function iterationUsingIterator(list = [4, 5, 6])
{
    // Arrays have a built-in @@iterator
    // @@iterator is a internal property of an object, it is access using
    // ES6 symbol: Symbol.iterator.The value of @@iterator is not an iterator
    // object, but a function that return a iterator object.
    const it = list[Symbol.iterator]();

    // the return value of the iterator's next call is an object of form
    // { value: [current iteration value], done: [boolean] } [boolean] indicates if the
    // current there is more to iterate.
    console.log(it.next()); // { value: 4, done: false }

    console.log(it.next()); // { value: 5, done: false }

    console.log(it.next()); // { value: 6, done: false }

    console.log(it.next()); // { value: undefined, done: true }

    // all subsequent return value on iterator's next call will return the same value
    console.log(it.next()); // { value: undefined, done: true }
}

/**
 * iterationUsingForIn - Iterates over all non-symbol, enumerable properties including
 * prototype chain
 *
 * TODO: add the prototype chain example to the below code.
 */
function iterationUsingForIn()
{
    let company = { name: 'Accenture', address: 'HDC2-Waverock' };

    // city property in the object is not enumerable.
    // Iteration using for..in not possible.
    Object.defineProperty(company, 'city', {
        value: 'Hyderabad',
        enumerable: false
    });

    for (let key in company)
    {
        console.log(key);
    }
}

/**
 * iteratorUsingForOf
 */
export function iteratorUsingForOf(param)
{
    for (let value of param)
    {
        console.log(value);
    }
}