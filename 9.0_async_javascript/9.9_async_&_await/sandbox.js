// Creating a async function.
const getData = async resource => {
  const data = await fetch(resource);

  return data.json();
}

getData('https://jsonplaceholder.typicode.com/todos/1')
  .then(data => console.log('Resolved', data))
  .catch(error => console.log('Rejected', error));