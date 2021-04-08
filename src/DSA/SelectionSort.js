function SelectionSort(data)
{
    for (let i = 0; i < data.length; i++)
    {
        let lowestNumberIndex = i;

        for (let j = i + 1; j < data.length; j++)
        {
            if (data[j] < data[lowestNumberIndex])
            {
                lowestNumberIndex = j;
            }
        }

        if (lowestNumberIndex != i)
        {
            let temp = data[i];

            data[i] = data[lowestNumberIndex];

            data[lowestNumberIndex] = temp;
        }
    }

    return data;
}

console.log(SelectionSort([4, 5, 2, 8, 10, 23, 1]));