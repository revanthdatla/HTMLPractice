function InsertionSort(data = [])
{
    for (let i = 1; i < data.length; i++)
    {
        let temp = data[i];

        let j = i - 1;

        while(j >= 0)
        {
            if(data[j] > temp)
            {
                data[j + 1] = data[j];

                j--;
            }
            else
            {
                break;
            }
        }

        data[j + 1] = temp;

    }

    return data;
}

console.log(InsertionSort([9,8,7,6,5,4]));