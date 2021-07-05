const form = document.querySelector('.signup-form');
// const input = document.querySelector('#username');

form.addEventListener('submit', event => {
    event.preventDefault();
    // console.log(input.value);
    // or
    console.log(form.username.value); // <- You can do this with ids and names
});