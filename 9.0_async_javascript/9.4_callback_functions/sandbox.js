/*
  In this file we gonna show you how to make async callbacks
  and how this can make your code more reusable and clean.
*/

const getTodos = (callback) => {
  const request = new XMLHttpRequest();

  request.addEventListener('readystatechange', () => {
    // If the request is done, log the response to the console.
    if (request.readyState === 4 && request.status === 200) {
      callback(undefined, request.responseText);
    } else if (request.readyState === 4) {
      callback('Could not fetch data');
    }
  });

  request.open('GET', 'https://jsonplaceholder.typicode.com/todoss/');
  request.send();
};

console.log(1);
console.log(2);

// NOTE: This is all async:
getTodos((error, data) => {
  if (error) {
    console.log(error);
  } else {
    console.log(data);
  }
});

console.log(3);
console.log(4);