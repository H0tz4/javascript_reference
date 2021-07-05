// Break and Continue

const scores = [50, 25, 0, 30, 100, 20, 10];

// for (let i = 0; i < scores.length; i++) {
//   console.log("Your score is: ", scores[i]);

//   if (scores[i] === 100) {
//     console.log("You won!!!");
//     break; // The "break" keyword just break us out of the loop.
//   }
// }

for (let i = 0; i < scores.length; i++) {
  if (scores[i] === 0) {
    continue; // The "continue" key word makes us jump to the next loop.
  }

  console.log("Your score is: ", scores[i]);
}
