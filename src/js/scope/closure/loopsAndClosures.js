
function simpleLoopTimeout()
{
    for (var i=0; i<5; i++)
    {
        setTimeout(function ()
        {
            console.log(i);
        },0)
    }
}

function simpleLoopIIFETimeout()
{
    for (var i=0; i<5; i++)
    {
        (function ()
        {
            var j=i;
            setTimeout(function ()
            {
                console.log(j);
            }, j*1000)
        })();
    }
}

function simpleLoopIIFETimeoutVariation()
{
    for (var i=0; i<5; i++)
    {
        (function (j)
        {
            setTimeout(function ()
            {
                console.log(j);
            }, j*1000)
        })(i);
    }
}

/**
 * Block scoping helps to have a per iteration scope of i.
 *
 * The let during iteration declares the variable per iteration and assigns the
 * previous iteration end value
 */
function simpleSolutionToThis()
{
    for (let i=0;i<5; i++)
    {
        setTimeout(function ()
        {
            console.log(i);
        }, i*1000)
    }
}

simpleSolutionToThis();