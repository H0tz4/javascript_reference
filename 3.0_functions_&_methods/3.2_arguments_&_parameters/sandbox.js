// Arguments & Parameters
const speak = function(name) {
  console.log(`Hello, ${name}.`);
}

speak('Hotza');

// Default values:
const greet = function(name = 'human', time = 'day') {
  console.log(`Good ${time}, ${name}.`);
}

greet();