/**
 * A variation of closure example.
 */
function area()
{
    var a = 1;

    // ofTheRoom() has lexical scope access to the inner scope of area()
    function ofTheRoom()
    {
        console.log(a*50);
    }

    printArea(ofTheRoom);
}

function printArea(callback)
{
    callback();
}

area();