const link = document.querySelector('a');

// Getting tags attributes:
console.log(link.getAttribute('href'));

// Setting tags attributes:
link.setAttribute('href', 'https://www.youtube.com');
link.innerText = 'The youtube website.';

const message = document.querySelector('.error');

console.log(message.getAttribute('class'));
message.setAttribute('class', 'success');
message.setAttribute('style', 'color: green');