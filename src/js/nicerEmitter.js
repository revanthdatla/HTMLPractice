function on(event, fn)
{
    this._callbacks = this._callbacks || {};
    (this._callbacks['$' + event] = this._callbacks['$' + event] || [])
        .push(fn);
    return this;
}

function once(event, fn)
{
    function on()
    {
        this.off(event, on);
        console.log(arguments);
        fn.apply(this, arguments);
    }

    on.fn = fn;
    this.on(event, on);
    return this;
}

function off(event, fn)
{
    this._callbacks = this._callbacks || {};

    // all
    if (0 == arguments.length)
    {
        this._callbacks = {};
        return this;
    }

    // specific event
    let callbacks = this._callbacks['$' + event];
    if (!callbacks) return this;

    // remove all handlers
    if (1 == arguments.length)
    {
        delete this._callbacks['$' + event];
        return this;
    }

    // remove specific handler
    let cb;
    for (let i = 0; i < callbacks.length; i++)
    {
        cb = callbacks[i];
        if (cb === fn || cb.fn === fn)
        {
            callbacks.splice(i, 1);
            break;
        }
    }

    // Remove event specific arrays for event types that no
    // one is subscribed for to avoid memory leak.
    if (callbacks.length === 0)
    {
        delete this._callbacks['$' + event];
    }

    return this;
}

function emit(event)
{
    this._callbacks = this._callbacks || {};

    let args = new Array(arguments.length - 1)
        , callbacks = this._callbacks['$' + event];

    for (let i = 1; i < arguments.length; i++)
    {
        args[i - 1] = arguments[i];
    }

    if (callbacks)
    {
        callbacks = callbacks.slice(0);
        for (let i = 0, len = callbacks.length; i < len; ++i)
        {
            callbacks[i].apply(this, args);
        }
    }

    return this;
}

function listeners(event)
{
    this._callbacks = this._callbacks || {};
    return this._callbacks['$' + event] || [];
}

function hasListeners(event){
    return !! this.listeners(event).length;
}

export const Emitter = {
    on,
    addEventListener: on,
    once,
    off,
    removeListener: off,
    removeAllListeners: off,
    removeEventListener: off,
    emit,
    listeners,
    hasListeners
};

Emitter.on('click1', () => { console.log('click1')});
// emitter.removeListener('click1');

Emitter.emit('click1');

function isObject(val) {
    return {}.toString.call(val) === '[object Object]';
}
console.log(isObject({}));