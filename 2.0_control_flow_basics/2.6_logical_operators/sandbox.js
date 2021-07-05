// Else if statements
const password = 'p@ss';

if (password.length >= 12 && password.includes('@')) {
  console.log('This password is mighty strong!');
} else if (password.length >= 8 || password.includes('@')) {
  console.log('This password is strong enough!');
} else {
  console.log('This password is not long enough!');
}