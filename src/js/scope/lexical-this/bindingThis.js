/**
 * TODO: find out why line 19 output is not as expected which is 'Mani'.
 *
 * re-read the lexical this appendix section in Scopes & Closures book by Kyle Simpson.
 * @type {{getName: person.getName, name: string}}
 */
var person =
{
    name: 'Revanth',

    getName: function getName()
    {
        console.log(this.name);
    }
}

person.getName();

var name = 'Mani'

setTimeout(person.getName, 100);

