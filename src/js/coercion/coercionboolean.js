function falseyBooleanCoercionExample()
{
    // Coercion to false
    console.log(Boolean(0), Boolean(-0), Boolean(NaN));

    console.log(Boolean(null), Boolean(undefined), Boolean(''));
}

function falseyObjectIsTrue()
{
    let a = new Boolean(false);

    let b = new Number(0);

    let c = new String('');

    console.log(a, b, c);

    console.log(a && b && c);

    console.log(Boolean(a && b && c));
}

falseyObjectIsTrue();