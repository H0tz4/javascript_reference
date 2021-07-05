/*
  It is also important to know http response status codes to indicate if a request has been
  successfully make, because even if the request has the status 4 (see 9.2 for more info),
  is not guaranteed that the request data has been successfully received.
  The HTTP response status codes are:

  1. Informational responses (100–199)
  2. Successful responses (200–299)
  3. Redirects (300–399)
  4. Client errors (400–499)
  5. Server errors (500–599)

  For more info see: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status
*/

const request = new XMLHttpRequest();

request.open('GET', 'https://jsonplaceholder.typicode.com/todoss/');

request.addEventListener('readystatechange', () => {
  // If the request is done, log the response to the console.
  if (request.readyState === 4 && request.status === 200) {
    console.log(request.response);
  } else if (request.readyState === 4) {
    console.log('Could not fetch the data!');
    console.log(`HTTP response status: ${request.status}`);
  }
});

request.send();