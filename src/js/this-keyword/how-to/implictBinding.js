/**
 * Demonstrate the implicit binding rule.
 *
 * Function call be preceded by the object reference.
 */
(function ()
{
  function getScore()
  {
    return this.score;
  }

  var student1 = {
    name: 'Revanth',
    score: 100,
    getScore // implicitly bound function
  };

  // call-site
  // @this refer to student1
  console.log(student1.getScore());
})();


(function ()
{
  function getCity()
  {
    return this.city;
  }

  var address = {
    city: 'Rajahmundry',
    getCity // implicitly bound function of address
  };

  var student1 = {
    name: 'Revanth',
    address
  };

  var city = 'Wrong City!';

  // call site. Only the top/last object property reference in the chain matters.
  // @this address not student1
  console.log(student1.address.getCity());

  // calling the implicitly bound function to an object's reference directly will not be able to capture the correct
  // @this reference. Instead, default binding rule kicks in(global scope or undefined).
  var getCityReference = address.getCity;

  console.log(getCityReference());
})();
