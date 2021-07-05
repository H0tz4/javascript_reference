/*
  JSON (JavaScript Object Notation) is a lightweight format for storing
  and transporting data and is also often used when data is sent from
  a server to a web page. In this file you will learn the basics of
  manipulation of this type of data.
*/

const getTodos = (callback) => {
  const request = new XMLHttpRequest();

  request.addEventListener('readystatechange', () => {
    // If the request is done, log the response to the console.
    if (request.readyState === 4 && request.status === 200) {
      let data = JSON.parse(request.responseText); // <- the "JSON.parse()" converts the received
      callback(undefined, data);                   // JSON data into a array.
    } else if (request.readyState === 4) {
      callback('Could not fetch data');
    }
  });

  request.open('GET', 'json_example.json');
  request.send();
};

getTodos((error, data) => {
  if (error) {
    console.log(error);
  } else {
    console.log(data);
  }
});