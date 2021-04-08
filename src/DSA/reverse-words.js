(function ()
{
    /**
     * "I love JavaScript!", "I evol !tpircSavaJ"
     * @param phrase
     */
    function reverseWords(phrase)
    {
        return phrase.split(" ").reduce((reverseWords, word) =>
        {
            reverseWords += stringReverse(word) + " ";

            return reverseWords;
        }, '');
    }

    function stringReverse(word)
    {
        let result = '';

        for (let wordElement of word)
        {
            result = wordElement + result;
        }

        return result;
    }

    console.log(reverseWords("I love JavaScript!"));
    console.log(reverseWords("I evol !tpircSavaJ"));
})();
