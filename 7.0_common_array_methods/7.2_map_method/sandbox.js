/*
  The map method iterates through a array and applies a operation
  in each item, returning a new array.
*/

const prices = [20, 10, 30, 25, 15, 40, 80, 5];

// const salePrices = prices.map(price => {
//   return price / 2; // <- Makes a new array with all the prices by half.
// })
// or
const salePrices = prices.map(price => price / 2);

console.log(salePrices);

// Another example:
const products = [
  { name: 'golden star', price: 20 },
  { name: 'mushroom', price: 40 },
  { name: 'green shells', price: 30 },
  { name: 'banana skin', price: 10 },
  { name: 'red shells', price: 50 },
];

const saleProducts = products.map(product => {
  if (product.price > 30) {
    return { name: product.name, price: product.price / 2 };
  }

  return product;
});

console.log(saleProducts);