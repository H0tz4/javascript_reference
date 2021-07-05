const form = document.querySelector('.signup-form');
const pattern = /^[a-zA-Z0-9]{6,10}$/;

form.addEventListener('submit', event => {
  event.preventDefault();

  // Testing RegEx
  let result = pattern.test(form.username.value);

  if (result) {
    alert('RegEx test passed. :)')
  } else {
    alert('RegEx test failed. :(')
  }
});

// Searching index of found pattern in strings
let text = "Hello, world! Programed to work and not to feel.";
let index = text.search(/world/); // <- Returns index of found pattern
console.log(index);

