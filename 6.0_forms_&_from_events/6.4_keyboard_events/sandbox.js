const form = document.querySelector('.signup-form');
const feedback = document.querySelector('.feedback')

// Live feedback
form.username.addEventListener('keyup', event => {
  const usernamePattern = /^[a-zA-Z]{6,12}$/;

  if (usernamePattern.test(event.target.value)) {
    feedback.textContent = 'That username is valid!';
    form.username.setAttribute('class', 'success');
  } else {
    feedback.textContent = 'Username must contain letters only & be between 6 & 12 characters long';
    form.username.setAttribute('class', 'error');
  }
})