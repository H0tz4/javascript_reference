/*
  To use the filter method you need to return a boolean,
  if is true, keep in the array, if is false, remove from the array.
*/

const scores = [10, 30, 15, 25, 50, 40, 5];

// const filteredScores = scores.filter(score => {
//   return score > 20; // <- only keep in the array scores over 20.
// })
// or
const filteredScores = scores.filter(score => score > 20);

console.log(filteredScores);