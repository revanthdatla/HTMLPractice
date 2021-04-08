(function ()
{
    function arrayChunking(arr, chunkSize)
    {
        let result = [];

        for (let i = 0; i < arr.length; i = i + chunkSize)
        {
            result.push(arr.slice(i, i + chunkSize));
        }

        return result;
    }

    console.log(arrayChunking([1,2,3,4], 2));
    console.log(arrayChunking([1,2,3,4], 3));
    console.log(arrayChunking([1,2,3,4], 5));
})();

(function ()
{
    function arrayChunckingUsingForOf(array, size)
    {
        let chuncks = [];

        for (let arrayElement of array)
        {
            const lastChunck = chuncks[chuncks.length - 1];

            if(!lastChunck || lastChunck.length === size)
            {
                chuncks.push([arrayElement]);
            }
            else
            {
                lastChunck.push(arrayElement);
            }
        }

        return chuncks;
    }

    console.log(arrayChunckingUsingForOf([1,2,3,4], 2));
    console.log(arrayChunckingUsingForOf([1,2,3,4], 3));
    console.log(arrayChunckingUsingForOf([1,2,3,4], 5));
})();

