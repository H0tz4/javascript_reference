const button = document.querySelector('button');
const listItems = document.querySelectorAll('li');

button.addEventListener('click', event => {
  alert('You clicked me!');
})

listItems.forEach(item => {
  addEventListener('click', event => {
    event.target.style.textDecoration = 'line-through';
  })
})

