// This is a function expression:
const speak = function() {
  console.log('Good day!');
};

greet();
speak();

// This is a function declaration:
function greet() { // <- Functions declarations are hoisted to the top!
  console.log('Hello, there!');
}