/*
  The reduce() method reduces the array to a single value,
  by using a accumulator and iterating each value.
*/

const numbers = [10, 30, 60, 40, 70, 90, 30];

const result = numbers.reduce((accumulator, current) => {
  if (current > 50) { // <- if current number is bigger than 50, add 1 to acc...
    accumulator++;
  }

  return accumulator;
}, 0); // <- Defines the initial value of the accumulator.

console.log(result);

// Another example calculating the total score of "mario":
const scores = [
  { player: 'mario', score: 50 },
  { player: 'yoshi', score: 30 },
  { player: 'mario', score: 70 },
  { player: 'crystal', score: 60 },
];

const marioScore = scores.reduce((accumulator, score) => {
  if (score.player === 'mario') {
    accumulator += score.value;
  }

  return accumulator;
}, 0);

console.log(marioScore);