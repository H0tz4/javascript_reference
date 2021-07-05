// Else if statements
const password = 'p@ssword1234';

if (password.length >= 12) {
  console.log('This password is mighty strong!');
} else if (password.length >= 8) {
  console.log('This password is long enough!');
} else {
  console.log('This password is not long enough!');
}