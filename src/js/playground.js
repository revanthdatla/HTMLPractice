/*
Write a program that prints the numbers from 1 to 100. But for multiples of three print "Asterix" instead of the number
and for the multiples of five print "Obelix". For numbers which are multiples of both three and five print "AsterixObelix". *

 */

function printNumbers()
{
    for (let number = 1; number <= 100; number++)
    {
        if (number % 15 === 0)
        {
            console.log("AsterixObelix");
        } else if (number % 3 === 0)
        {
            console.log("Asterix");
        } else if (number % 5 === 0)
        {
            console.log("Obelix");
        } else
        {
            console.log(number)
        }
    }
}

printNumbers();
