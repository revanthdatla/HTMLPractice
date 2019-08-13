function explicitStringToOrFromNumberConversion()
{
    let a = 45;

    let b = '45';

    // using toString() method
    console.log(a.toString());

    // using native constructor
    console.log(String(a));

    // using native constructor
    console.log(Number(b));

    // using unary operator
    console.log(+b);

    let pi = '3.14';

    console.log(b+ +pi);

    // using unary - operator
    // unary minus followed by string will flip the sign
    console.log(-pi);

    // unary minus space unary minus string will coerce to an number
    console.log(- -pi);

    
}

explicitStringToOrFromNumberConversion();