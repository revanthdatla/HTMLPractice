(function ()
{
    function caesarCipher(phrase, number)
    {
        let alphabets = "abcdefghijklmnopqrstuvwxyz".split('');

        let input = phrase.toLowerCase();

        let output = "";

        for (let i = 0; i < input.length; i++)
        {
            let letter = input[i];

            if (alphabets.indexOf(letter) === -1)
            {
                output += letter;

                continue;
            }

            let index = alphabets.indexOf(letter) + number % 26;

            if (index > 25) index -= 26;
            if (index < 0) index += 26;

            output += phrase[i] === phrase[i].toUpperCase()
                    ? alphabets[index].toUpperCase()
                    : alphabets[index];
        }

        return output;
    }

    console.log(caesarCipher("I love JavaScript!", 1));
})();
