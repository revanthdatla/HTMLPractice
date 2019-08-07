function toNumberExample()
{
    // non-number value coerced by the abstract operation ToNumber
    // implicit coercion
    console.log("44" - 5);

    // explicit way
    console.log(Number("44") - 5);

    console.log(Number(true));

    // Boolean values
    console.log(Number(true));
    console.log(Number(false));

    // undefined primitive value
    console.log(Number(undefined));

    // null primitive value
    console.log(Number(null));

    // string
    console.log(Number("abc"));

    // Objects and Array
    let a = {
        valueOf: function ()
        {
            return '35';
        }
    };

    let b = {
        toString: function ()
        {
            return '36';
        }
    };

    let c = [3, 5];

    c.toString = function ()
    {
        return this.join('');
    };

    console.log(Number(a));

    console.log(Number(b));

    console.log(Number(c));

    // [] array
    console.log(Number([]));

    console.log(Number(''));

    console.log(Number([ 1, 2, 3]));
}

toNumberExample();