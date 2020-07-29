(function ()
{
  function Student(name)
  {
    this.name = name;
  }

  // new keyword creates a new object and @this is bind to the newly created object.
  var student1 = new Student('Revanth');

  console.log(student1.name);
})();
