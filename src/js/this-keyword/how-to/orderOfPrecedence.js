(function ()
{
  function foo()
  {
    console.log(this.a);
  }

  var obj1 = {
    a: 2,
    foo: foo
  };

  var obj2 = {
    a:3,
    foo: foo
  };

  // implicit binding
  obj1.foo(); // 2
  obj2.foo(); // 3

  // explicit binding takes precedence over implicit binding
  obj1.foo.call(obj2);
  obj2.foo.call(obj1);
})();

(function ()
{
  function setStudentName(name)
  {
    this.name = name;
  }

  var student1 = {
    setStudentName
  };

  var student2 = {};

  // implicit binding
  student1.setStudentName('Mani');
  console.log(student1.name); // Mani

  // explicit binding
  student1.setStudentName.call(student2, 'Bujji');
  console.log(student2.name);

  // new binding combined with implicit binding. new binding takes precedence over implicit binding.
  var student3 = new student1.setStudentName('Kavya');
  console.log(student3.name);
})();

(function ()
{
  function setStudentName(name)
  {
    this.name = name;
  }

  var sandbox = {};

  // explicit binding
  var student1 = setStudentName.bind(sandbox);
  student1('Vijji');
  console.log(sandbox.name);

  // new keyword and hard binding combined. new keyword takes precedence over explicit hard binding.
  var student2 = new student1('Raghu');
  console.log(sandbox.name);
  console.log(student2.name);

})();
