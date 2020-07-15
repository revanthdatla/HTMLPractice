/**
 * A indirect way of observing closure example.
 */

var arr;

function area()
{
    var a = 1;

    // ofTheRoom() has lexical scope access to the inner scope of area()
    function ofTheRoom()
    {
        console.log(a*50);
    }

    arr = ofTheRoom; // assign the ofTheRoom() function to global scope.
}

function printArea()
{
    arr();
}

area();

// The inner function of area->ofTheRoom is assigned to a global variable arr.
// when it is called inner scope of area is observed by accessing a.
printArea(); // Output: 50