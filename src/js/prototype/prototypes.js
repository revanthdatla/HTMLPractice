function traverseObjectUsingForIn()
{
    let test = { a: 3 };
    
    for (let i in test)
    {
        console.log("found " + i);
    }
}

function example1()
{
    function test()
    {

    }

    let a = new test();

    console.log(a.constructor.name);
}

function example2()
{
    function Test()
    {

    }

    let b = new Test();

    Test.prototype.constructor = function gotcha()
    {

    };

    console.log(b.constructor.name);

    console.log(b);
}

example2();