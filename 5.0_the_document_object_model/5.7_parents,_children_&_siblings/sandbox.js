const article = document.querySelector('article');

console.log(article.children); // <- This returns a HTMLCollection.

console.log(Array.from(article.children)); // <- This transforms tha HTMLCollection into a array.

Array.from(article.children).forEach(child => {
    child.style.textDecoration = 'Underline';
    child.classList.add('article-element');
})

const title = document.querySelector('h2');

// Use "parentElement" propriety to find the "parent" of a tag:
console.log(title.parentElement);
console.log(title.parentElement.parentElement);

// You can also do this to get "sibling" tags:
console.log(title.nextElementSibling);
console.log(title.previousElementSibling);