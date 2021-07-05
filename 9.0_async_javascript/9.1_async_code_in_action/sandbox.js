console.log(1);
console.log(2);

// This will not block the code.
setTimeout(() => {
  console.log('callback function fired');
}, 2000);

console.log(3);
console.log(4);