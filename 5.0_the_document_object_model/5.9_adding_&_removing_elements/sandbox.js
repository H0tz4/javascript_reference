const para = document.querySelector('p');

// This removes the tag form the DOM:
para.remove();

const list = document.querySelector('ul');
const listItems = document.querySelectorAll('ul>li');
const button = document.querySelector('button');

listItems.forEach(item => {
  item.addEventListener('click', e => {
    e.target.remove();
  })
})

button.addEventListener('click', () => {
  // Building the li:
  const li = document.createElement('li');
  li.innerText = 'new todo!';
  li.addEventListener('click', e => {
    e.target.remove();
  })

  // Adding the li to the list:
  list.append(li);
})