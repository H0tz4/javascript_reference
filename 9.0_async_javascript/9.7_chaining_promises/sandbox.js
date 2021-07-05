/*
  One of the most useful things that you can do with
  promisees is chaining them. In this file you will see
  a example of that.
*/

const getData = (resource) => {
  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();

    request.addEventListener('readystatechange', () => {
      if (request.readyState === 4 && request.status === 200) {
        let data = JSON.parse(request.responseText);
        resolve(data);
      } else if (request.readyState === 4) {
        reject('Could not fetch data');
      }
    });

    request.open('GET', resource);
    request.send();
  });
};

// Chaining Promisees.
getData('https://jsonplaceholder.typicode.com/todos/1')
  .then(data => {
    console.log('Promise resolved!');
    console.log(data);
    return getData('https://jsonplaceholder.typicode.com/posts/1');
  })
  .then(data => {
    console.log('Promise resolved!');
    console.log(data);
    return getData('https://jsonplaceholder.typicode.com/userss/1');
  })
  .then(data => {
    console.log('Promise resolved!');
    console.log(data);
    return getData('https://jsonplaceholder.typicode.com/albums/1');
  })
  .catch(error => {
    console.log('Promise rejected!');
    console.log(error);
  });