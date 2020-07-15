/**
 * Demonstrate closure example.
 *
 * Closure is when a function is able to remember and access its lexical scope even when that function is executing
 * outside its lexical scope
 *
 * @returns {ofTheRoom}
 */
function area()
{
    var area = 1;

    // ofTheRoom() has lexical scope access to the inner scope of area()
    function ofTheRoom()
    {
        console.log(area*50);
    }

    return ofTheRoom;// ofTheRoom() is returned as an value.
}

// references a closure, which remembers its lexical scope
var areaOfTheRoom = area();

areaOfTheRoom(); // Output: 50