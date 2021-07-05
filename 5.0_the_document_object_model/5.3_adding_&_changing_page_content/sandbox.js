const para = document.querySelector('p');
const paras = document.querySelectorAll('p');
const content = document.querySelector('#content');

// Changing the inner text of a html tag:
// console.log(para.innerText);
// para.innerText = 'Ninjas are awesome.';

// paras.forEach(para => {
//    console.log(para.innerText);
//    para.innerText += ' new text';
// });

// Adding or changing html:
// console.log(content.innerHTML);
// content.innerHTML += '<h2>This is as new h2 tag.</h2>'

const people = ['mario', 'yoshi', 'luigi'];

people.forEach(person => {
    content.innerHTML += `<p>${person}</p>`;
})