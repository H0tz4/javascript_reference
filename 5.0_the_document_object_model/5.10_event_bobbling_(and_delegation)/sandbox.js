const ul = document.querySelector('ul');
const button = document.querySelector('button');

button.addEventListener('click', e => {
  const li = document.createElement('li');
  li.textContent = "new todo";
  ul.append(li);
});

// const items = document.querySelectorAll('li');

// items.forEach(item => {
//   item.addEventListener('click',e => {
//     // Stopping event bobbling:
//     e.stopPropagation();
//     console.log('Event in li.');
//   });
// });

ul.addEventListener('click', e => {
  // console.log('Event in ul.');

  // Event delegation:
  if (e.target.tagName === 'LI' ) {
    e.target.remove();
  }
});
