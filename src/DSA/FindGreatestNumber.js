function findGreatestNumber(data)
{
    return data.reduce((result, value) =>
    {
        if(value > result)
        {
            result = value;
        }

        return result;
    }, data[0]);
}

console.log(findGreatestNumber([2,4,45,98, 20,60]));