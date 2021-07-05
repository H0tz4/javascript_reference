/*
  The Promise object represents the eventual completion (or failure)
  of an asynchronous operation and its resulting value. A Promise has
  two main methods, the "then" and "catch". The first one is used to
  handle data when the promise is resolved, but can also handle errors
  when a promise is rejected, the second one is especially used to deal
  with errors, also it can be used to handle errors of chained promises
  acting kinda like the "default" keyword in a switch statement.
*/
const getSomething = () => {
  return new Promise((resolve, rejected) => {
    // Fetch something...

    // If everything goes well:
    // resolve('Some data...');

    // If something goes wrong:
    rejected('Some error...');
  });
};

// getSomething().then((data) => {
//   console.log(data);
// }, (error) => {
//   console.log(error);
// });
// or
getSomething()
  .then(data => { // <- if the promise resolve do this.
  console.log(data);
  })
  .catch(error => { // <- if the promise reject do this.
    console.log(error);
  });