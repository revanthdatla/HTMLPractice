function dateToNumber()
{
    const today = new Date('1991-07-05');

    // unary operator is used to coerce date to a number
    console.log(+today);

    // using unary operator, to convert string representation of date
    // to number (unix timestamp)
    console.log(+new Date());

    // other alternative to the above code is non-coe
    console.log(Date.now());


}

dateToNumber();