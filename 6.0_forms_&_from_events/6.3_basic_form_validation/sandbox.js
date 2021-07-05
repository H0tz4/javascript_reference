const form = document.querySelector('.signup-form');
const feedback = document.querySelector('.feedback')

form.addEventListener('submit', event => {
  event.preventDefault();

  const username = form.username.value;
  const usernamePattern = /^[a-zA-Z]{6,12}$/;

  if (usernamePattern.test(username)) {
    feedback.textContent = 'That username is valid!';
  } else {
    feedback.textContent = 'Username must contain letters only & be between 6 & 12 characters long';
  }
});