// This is a for loop.
for (let i = 0; i < 5; i++) {
  console.log(`in loop: ${i}`);
}

console.log('loop finished.');

// This is the same as:
// let i = 0;
// while (i < 5) {
//   console.log(`i = ${i}`);
//
//   i++;
// }

// Looping through arrays.
let names = ['shaun', 'mario', 'luigi']

for (let i = 0; i < names.length; i++) {
  console.log(names[i]);
}

// or

for (name in names) {
  console.log(names[name]);
}