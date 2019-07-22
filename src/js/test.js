function identify(name) {
    return name.toUpperCase();
}

function speak(person) {
    return "Hello, I'm " + identify(person.name);
}

console.log(speak({ name: 'Revanth'}));