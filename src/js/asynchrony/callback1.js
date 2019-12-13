function getFirstName()
{
    return 'Revanth';
}

function getFullName()
{
    name = name + ' Datla';

    console.log(name);
}

var name = getFirstName();

setTimeout(getFullName, 1000); // sets up a timer to execute 'getFullName' after 1 second.