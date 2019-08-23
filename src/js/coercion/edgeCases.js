function modifyingNativePrototypes()
{
    Number.prototype.valueOf = function ()
    {
        return 3;
    };

    // when the type of the operands are same no implicit coercion will occur
    // specially on the primitive types. valueOf() will be called only on non-primitive values.
    console.log(2 == 3); // expected false

    // non-primitive
    let a = new Number(2);

    // is going to true because non-primitive values are coerced using ToPrimitive call, which in-turn
    // calls valueOf modified function to produce un-expected output.
    console.log(a == 3);

    console.log([].toString());
}

modifyingNativePrototypes();