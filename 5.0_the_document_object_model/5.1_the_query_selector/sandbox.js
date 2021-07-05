const para = document.querySelector('p'); // <- Gets the first p element.
const paras = document.querySelectorAll('p'); // <- Gets all the p elements and return a nodeList.
const error = document.querySelector('p.error'); // <- Gets the p element with a "error" class.

// Changing the style of elements:
error.style.color = 'red';

// Using "forEach" in a nodeList:
paras.forEach(para => {
  para.style.textDecoration = 'underline';
})