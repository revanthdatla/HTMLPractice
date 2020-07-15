var student = {
    firstName: 'Datla',
    lastName: 'Revanth',
    address: {
        city: 'Rajahmundry'
    }
};

// returns a string representation of an object
console.log(student.toString());

// returns a date converted to a string using the current locale
console.log(new Date().toLocaleString());

// returns the primitive value of the specified object
console.log(student.valueOf());

// Determine if an object has a specified property name
console.log(student.hasOwnProperty('address'));

// Determine if an object exist in another object's prototype chain
// TODO:

// Determine if the specified property is enumerable

