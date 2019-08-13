function dateToNumber()
{
    const today = new Date('1991-07-05');

    // unary operator is used to coerce date to a number
    console.log(+today);

    // using unary operator, to convert string representation of date
    // to number (unix timestamp)
    console.log(+new Date());

    // other alternative to the above code is non-coercion approach
    console.log(Date.now());

    console.log(new Date().getTime());
}

function bitWiseOROpeation()
{
    // bit wise or (|) operation special numbers
    console.log(0 | -0);

    console.log(0 | NaN);
    
    console.log(0 | Infinity);

    console.log(0 | -Infinity);
}

function tildeOperation()
{
    // ~ operation coerces to a 32 bit number value and then
    // performs a bitwise negation (flipping each bit's parity)
    // To put it simply, it performs 2's complement
    console.log(~42);
    // -(42+1)
    console.log(-(42+1));
}

function trucatingBits()
{
    // ~~ will first applies the ToInt32 operation and does the bitwise flip,
    // and the second ~ does another flip, flipping all the bits back to the original state.
    // during this process it truncates the decimals.
    console.log(~~45);
    console.log(~~45.6);

    // First it only reliably only on 32-bit values
    console.log(~~-45);
    console.log(~~-45.6);

    // Math.Floor, when comparing ~~ with Math.floor(), truncation of decimal is slightly different
    console.log(Math.floor(45.9));
    console.log(Math.floor(-45.6));


    // The above ~~ operation will not produce the same results as Math.floor()
    //
}

function parsingNumericStrings()
{
    // Coercing numeric string to number is not tolerant to non-numeric string and
    // results in a NaN value
    console.log(Number("45"));
    console.log(Number("45px"));

    // parsing is tolerant to non-numeric string on the right hand side of the string
    console.log(parseInt('45px'));
    // when it encounter non-number string other than on right hand side it will return NaN value
    console.log(parseInt('p45px'));
}

parsingNumericStrings();