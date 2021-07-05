// Get element by ID:
const title = document.getElementById('content');
console.log(title);

// Get elements by class name: 
const errors = document.getElementsByClassName('error'); // <- Returns a HTMLCollection.
console.log(errors);

// Get elements by their tag name:
const paras = document.getElementsByTagName('p'); // <- Also returns a HTMLCollection.
console.log(paras);