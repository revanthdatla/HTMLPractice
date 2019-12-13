// 'eventloop' is a array that acts as a queue (First-in, First-out)
var eventloop = [];

// keep going forever
while(false)
{
    if(eventloop.length)
    {
        // get the next event in the queue
        let event = eventloop.pop();

        try
        {
            event();
        } catch (e)
        {

        }
    }
}