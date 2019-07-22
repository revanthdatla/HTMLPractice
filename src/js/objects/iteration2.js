import { iteratorUsingForOf } from "./iteration";

function iterationUsingForOfObjects()
{
    let obj = {
        a: 4,
        b: 5
    };

    Object.defineProperty(obj, Symbol.iterator, {
        writable: false,
        enumerable: false,
        configurable: true,
        value: function ()
        {
            let self = this,
                id = 0,
                ks = Object.keys(self);
            return {
                next: function ()
                {
                    return {
                        value: self[ks[id++]],
                        done: (id > ks.length)
                    };
                }
            }
        }
    });

    iteratorUsingForOf(obj);
}

iterationUsingForOfObjects();