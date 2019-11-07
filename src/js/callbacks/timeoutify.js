function timeoutify(fn, delay)
{
    // if the utils under use doesn't call the returned function after the delay time. The timer expires and during next
    // event loop tick, callback will be processed by returning the error object with a message 'timeout'.
    let intv = setTimeout(function ()
    {
        intv = null;

        fn(new Error('timeout'));

    }, delay);

    console.log(intv);

    return function ()
    {
        if(intv)
        {
            clearTimeout(intv);

            fn.apply(this, [null].concat(Array.prototype.slice.call(arguments)));
        }
    }
}

timeoutify(() => {}, 3000)();