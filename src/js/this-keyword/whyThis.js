/**
 * Illustrate the motivation and utility of this keyword.
 *
 * this keyword allows multiple usage of the two functions(getGardenName and getTreesInTheGarden) below
 * in various contexts(garden1, garden2, ...), implicitly.
 *
 * Even though, the same results can be obtained by passing the context directly to the functions explicitly
 * to the functions. Implicit way of passing the context provides more elegant way of referencing leading to a
 * cleaner API functions.
 */
(function ()
{
    function getGardenName()
    {
        return this.name;
    }

    function getTreesInTheGarden()
    {
        return getGardenName.call(this) + ' ' + this.trees;
    }

    var garden1 = {
        name:'Palm Garden',
        trees: 300
    };

    var garden2 = {
        name: 'Mango Garden',
        trees: 50
    };

    console.log(getGardenName.call(garden1));
    console.log(getTreesInTheGarden.call(garden1));

    console.log(getGardenName.call(garden2));
    console.log(getTreesInTheGarden.call(garden2));

})();