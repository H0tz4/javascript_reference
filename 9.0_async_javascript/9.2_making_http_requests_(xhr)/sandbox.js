/*
  When we made a HTTP request, is important to know the ready state of
  if. Here is a table explaining what every state number means:
  +--------+-------------------+---------------------------------------------------------------+
  | Value  |      State        |                          Description                          |
  +--------+-------------------+---------------------------------------------------------------+
  |     0  | UNSENT            | Client has been created. open() not called yet.               |
  |     1  | OPENED            | open() has been called.                                       |
  |     2  | HEADERS_RECEIVED  | send() has been called, and headers and status are available. |
  |     3  | LOADING           | Downloading; responseText holds partial data.                 |
  |     4  | DONE              | The operation is complete.                                    |
  +--------+-------------------+---------------------------------------------------------------+
*/

const request = new XMLHttpRequest();

request.open('GET', 'https://jsonplaceholder.typicode.com/todos/');

// NOTE: every event listener is also asynchronous.
request.addEventListener('readystatechange', () => { // <- Triggers a event every time the
  console.log(request.readyState);                   // request state changes.

  // If the request is done, log the response to the console.
  if (request.readyState === 4) {
    console.log(request.response);
  }
});

request.send();