// Challange 3
// calculate the total cost for each item in the cart.

const cart = [
  { item: "Laptop", price: 1200, quantity: 1 },
  { item: "Smartphone", price: 800, quantity: 2 },
  { item: "Headphones", price: 200, quantity: 3 }
];

// let totalCost = 0
// cart.forEach(product => {

// }

// console.log([1200,1600,600]);

// Challange 5
// transform an array of product objects into an array of strings, where each string describes the product in a specific format.

const techProducts = [
  { id: 1, name: "Laptop", price: 1500 },
  { id: 2, name: "Smartphone", price: 800 },
  { id: 3, name: "Headphones", price: 200 }
];

const productStrings = techProducts.map(product => {
  return `product is ${product.name} and ${product.price}`;
});

console.log(productStrings);
