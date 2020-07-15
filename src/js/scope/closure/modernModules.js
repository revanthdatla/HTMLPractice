/**
 * A Simple proof of concept for modules dependency management.
 *
 * @type {{getModule: (function(*): *), define: define}}
 */
var moduleManager = (function Manager()
{
    var modules = [];

    /**
     * Define a module and its dependencies and store its public API reference locally
     *
     * @param moduleName
     * @param moduleDependencies
     * @param module
     */
    function define(moduleName, moduleDependencies, module)
    {
        // iterate over each module dependencies and get override it with its API from the internal state.
        for (var i=0; i<moduleDependencies.length; i++)
        {
            // get the dependent module name
            var depModuleName = moduleDependencies[i];

            // override the dependency module name with its public API
            moduleDependencies[i] = modules[depModuleName];
        }

        // assign module's public API reference
        modules[moduleName] = module.apply(module, moduleDependencies);
    }

    /**
     * Get a modules Public API reference
     *
     * @param moduleName
     * @returns {*}
     */
    function getModule(moduleName)
    {
        return modules[moduleName];
    }

    return {

        define,

        getModule
    }
})();

// Below is an example on how to use the above module manager.
moduleManager.define('products', [], function ()
{
    var products = {
      milk: 40,
      water:20
    };

    function getTheCostOf(productName)
    {
        return products[productName];
    }

    return {
        getTheCostOf
    }
});

moduleManager.define('invoice', ['products'], function (products)
{
    function getInvoice(quantity, productName)
    {
        var productCost = products.getTheCostOf(productName);

        return quantity * productCost;
    }

    return {
        getInvoice
    }
});

console.log(moduleManager.getModule('invoice').getInvoice(6, 'milk'));


