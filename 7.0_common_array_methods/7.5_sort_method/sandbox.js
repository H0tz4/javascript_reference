/*
  As the name implies the sort method is most used to sort arrays.
  If no parameters is passed it sorts automatically form the biggest
  to the lowest (checking the first algorism only) in a numbers array,
  in a strings array, it sorts alphabetically.
*/
const names = ['Scott', 'Luis', 'Amanda', 'Stephanie', 'Chris', 'Angelica'];
names.sort();
console.log(names);

numbers = [13, 432, 524, 24, 82, 10, 89, 4, 8, 43, 70];
numbers.sort();
// TIP: you can also reverse arrays with the reverse method.
numbers.reverse() // <- now the biggest algorism comes first.
console.log(numbers);

/*
  If you need a more precise sort or sort through a array of objects,
  you can pass a callback function to the method that takes two arguments
  "a" and "b", a represent the element at the top and b the element at the
  bottom. If a should come fist, you need to return -1 (or a negative number),
  otherwise if b should come first you need to return 1 (or a positive number),
  if no reorder is need just return 0.
*/
const scores = [
  { player: 'mario', score: 50 },
  { player: 'yoshi', score: 30 },
  { player: 'mario', score: 70 },
  { player: 'crystal', score: 60 },
];

// scores.sort((a, b) => {
//     if (a.score > b.score) { // <- if a is bigger put it in the front.
//         return -1;
//     } else if (b.score > a.score) { // <- if b is bigger put it in the back.
//         return 1;
//     }

//     return 0; // <- if the two are equal do nothing.
// })
// or
scores.sort((a, b) => b.score - a.score);

console.log(scores);
