(function ()
{
    function capitalizePhrase(phrase)
    {
        let _phrase = phrase[0].toUpperCase();

        for (let i = 1; i < phrase.length; i++)
        {
            _phrase += phrase[i-1] === " " ? phrase[i].toUpperCase() : phrase[i];
        }

        return _phrase;
    }

    console.log(capitalizePhrase("hello world"));
})();
